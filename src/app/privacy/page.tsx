export default function Privacy() {
  return (
    <>
      <section className="py-20 md:py-28 bg-gradient-to-br from-dark-blue to-deep-blue">
        <div className="max-w-[800px] mx-auto px-5 md:px-10 lg:px-16">
          <h1 className="text-4xl md:text-5xl font-extralight leading-[1.1] text-white">
            Privacy Disclaimer
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-[100px] bg-white">
        <div className="max-w-[800px] mx-auto px-5 md:px-10 lg:px-16 prose prose-lg max-w-none">
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Privacy disclaimer content will be added here. This page will
            outline how First Class Credit collects, uses, stores, and protects
            personal data in compliance with the Personal Data Protection Act
            2010 (PDPA).
          </p>
        </div>
      </section>
    </>
  );
}
