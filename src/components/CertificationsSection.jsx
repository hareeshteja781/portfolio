import SectionHeading from './common/SectionHeading';

const certificates = [
  { title: 'Oracle Agentic AI Certified Foundations Associate', provider: 'Oracle University', icon: 'fa-robot' },
  { title: 'Advanced Software Engineering Job Simulation', provider: 'Walmart Global Tech', icon: 'fa-code' },
  { title: 'Introduction to Cloud', provider: 'Datacom', icon: 'fa-cloud' }
];

function CertificationsSection() {
  return (
    <section className="section certifications-section" id="certifications" data-aos="fade-up">
      <SectionHeading eyebrow="Certifications" title="Certifications" />
      <div className="cert-card-grid">
        {certificates.map((cert, index) => (
          <article className="cert-card" key={cert.title} data-aos="fade-up" data-aos-delay={index * 80}>
            <div className="cert-icon">
              <i className={`fa-solid ${cert.icon}`} />
            </div>
            <h3>{cert.title}</h3>
            <p>Provider</p>
            <span>{cert.provider}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CertificationsSection;
