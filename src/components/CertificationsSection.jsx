import SectionHeading from './common/SectionHeading';

const certificates = [
  { title: 'Python Programming', provider: 'Udemy', icon: 'fa-python' },
  { title: 'Full Stack Web Development', provider: 'Udemy', icon: 'fa-laptop-code' },
  { title: 'SQL & Database Management', provider: 'Udemy', icon: 'fa-database' }
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
