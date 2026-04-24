"use client";

import { useEffect, useRef } from "react";

// ─── Shaders ─────────────────────────────────────────────────────────────────

const VERT_SRC = `
  attribute vec2 a_pos;
  void main() {
    gl_Position = vec4(a_pos, 0.0, 1.0);
  }
`;

/**
 * Domain-warping fragment shader (Inigo Quilez style).
 * Produces the swirling, liquid-gradient look used by the Framer
 * AnimatedLiquidBackground component.
 */
const FRAG_SRC = `
  precision highp float;

  uniform float u_time;
  uniform vec2  u_res;
  uniform vec3  u_c1;
  uniform vec3  u_c2;
  uniform vec3  u_c3;

  // ── Gradient noise ──────────────────────────────────────────────────────────
  vec2 hash2(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }

  float gnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
          dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
      mix(dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
          dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
      u.y);
  }

  // ── Fractional Brownian Motion ──────────────────────────────────────────────
  float fbm(vec2 p) {
    float val = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 6; i++) {
      val += amp * gnoise(p);
      p   *= 2.02;
      amp *= 0.48;
    }
    return val;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_res;
    uv = vec2(uv.x * (u_res.x / u_res.y), uv.y);

    float t = u_time * 0.10;

    // Two-level domain warp
    vec2 q = vec2(
      fbm(uv + vec2(0.0, 0.0) + t),
      fbm(uv + vec2(5.2, 1.3) + t * 0.9)
    );

    vec2 r = vec2(
      fbm(uv + 3.8 * q + vec2(1.7, 9.2) + 0.13 * t),
      fbm(uv + 3.8 * q + vec2(8.3, 2.8) + 0.11 * t)
    );

    float f = fbm(uv + 3.8 * r);
    float m = clamp(f * 0.5 + 0.5, 0.0, 1.0);

    // Three-way color blend
    vec3 col = mix(u_c1, u_c2, smoothstep(0.0, 0.65, m));
    col      = mix(col,  u_c3, smoothstep(0.55, 1.0,  m));

    gl_FragColor = vec4(col, 1.0);
  }
`;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function hexToRgb01(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16) / 255,
    parseInt(h.slice(2, 4), 16) / 255,
    parseInt(h.slice(4, 6), 16) / 255,
  ];
}

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  src: string
): WebGLShader {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  return shader;
}

// ─── Component ───────────────────────────────────────────────────────────────

interface Props {
  /** First base color (default: brand navy #253A7D) */
  color1?: string;
  /** Second accent color (default: light blue #47A7DD) */
  color2?: string;
  /** Third highlight color (default: deep navy #0b1a3d) */
  color3?: string;
  className?: string;
}

export default function AnimatedLiquidBackground({
  color1 = "#253A7D",
  color2 = "#47A7DD",
  color3 = "#0b1a3d",
  className = "",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    // Compile & link program
    const vert = compileShader(gl, gl.VERTEX_SHADER, VERT_SRC);
    const frag = compileShader(gl, gl.FRAGMENT_SHADER, FRAG_SRC);
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vert);
    gl.attachShader(prog, frag);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    // Fullscreen triangle-strip quad
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const posLoc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes  = gl.getUniformLocation(prog, "u_res");
    const uC1   = gl.getUniformLocation(prog, "u_c1");
    const uC2   = gl.getUniformLocation(prog, "u_c2");
    const uC3   = gl.getUniformLocation(prog, "u_c3");

    gl.uniform3fv(uC1, hexToRgb01(color1));
    gl.uniform3fv(uC2, hexToRgb01(color2));
    gl.uniform3fv(uC3, hexToRgb01(color3));

    // Resize canvas to match layout size
    function resize() {
      if (!canvas) return;
      const { offsetWidth: w, offsetHeight: h } = canvas;
      canvas.width  = w;
      canvas.height = h;
      gl!.viewport(0, 0, w, h);
      gl!.uniform2f(uRes, w, h);
    }
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    // Render loop
    let rafId: number;
    const t0 = performance.now();

    function render() {
      gl!.uniform1f(uTime, (performance.now() - t0) / 1000);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      rafId = requestAnimationFrame(render);
    }
    render();

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      gl.deleteProgram(prog);
      gl.deleteShader(vert);
      gl.deleteShader(frag);
      gl.deleteBuffer(buf);
    };
  }, [color1, color2, color3]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ display: "block" }}
    />
  );
}
