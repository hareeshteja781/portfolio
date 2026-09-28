import SectionHeading from './common/SectionHeading';

function EducationSection() {
  return (
    <section className="section education-section" id="education" data-aos="fade-up">
      <SectionHeading eyebrow="Education" title="Education" />
      <div className="timeline-card">
        <div className="timeline-icon">
          <i className="fa-solid fa-graduation-cap" />
        </div>
        <div className="timeline-content">
          <h3>Bachelor of Technology</h3>
          <p className="timeline-subtitle">Computer Science and Engineering</p>
          <p className="timeline-school">Malla Reddy College of Engineering</p>
          <p className="timeline-school">JNTUH</p>
          <div className="timeline-meta">
            <span>Graduation: May 2026</span>
            <span>CGPA: 7.0 / 10.0</span>
          </div>
          <p className="timeline-school">Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks, Software Engineering.</p>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
