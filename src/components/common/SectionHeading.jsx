function SectionHeading({ title, subtitle, className = '', id, eyebrow }) {
  return (
    <div className={`section-heading ${className}`.trim()} data-aos="fade-up" id={id}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <div className="section-heading__title-wrap">
        <h2>{title}</h2>
        <span className="section-heading__accent" aria-hidden="true" />
      </div>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionHeading;
