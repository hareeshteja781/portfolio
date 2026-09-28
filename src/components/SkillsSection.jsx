import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import SectionHeading from './common/SectionHeading';

const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['Python', 'JavaScript', 'SQL']
  },
  {
    title: 'Software Development & Web/Backend',
    items: ['FastAPI', 'React.js', 'REST APIs', 'JWT Authentication', 'Pydantic', 'HTML5', 'CSS3']
  },
  {
    title: 'Databases & Cloud & Messaging',
    items: ['PostgreSQL', 'MySQL', 'AWS', 'Redis', 'Redis Streams', 'Redis Pub/Sub']
  },
  {
    title: 'DevOps & Version Control',
    items: ['Git', 'GitHub', 'Docker', 'CI/CD Pipelines']
  },
  {
    title: 'CS Fundamentals',
    items: ['Data Structures & Algorithms (DSA)', 'Object-Oriented Programming (OOP)', 'DBMS', 'Computer Networks', 'System Design', 'Agile Methodology (Scrum)']
  },
  {
    title: 'Generative AI & ML',
    items: ['Gemini LLM Integration', 'Custom RAG Pipeline', 'Embeddings', 'Vector Search']
  }
];

const iconMap = {
  Python: { icon: 'fa-python', prefix: 'fa-brands' },
  JavaScript: { icon: 'fa-js', prefix: 'fa-brands' },
  SQL: { icon: 'fa-database', prefix: 'fa-solid' },
  FastAPI: { icon: 'fa-bolt', prefix: 'fa-solid' },
  'React.js': { icon: 'fa-react', prefix: 'fa-brands' },
  'REST APIs': { icon: 'fa-network-wired', prefix: 'fa-solid' },
  'JWT Authentication': { icon: 'fa-lock', prefix: 'fa-solid' },
  Pydantic: { icon: 'fa-check-double', prefix: 'fa-solid' },
  'HTML5': { icon: 'fa-html5', prefix: 'fa-brands' },
  'CSS3': { icon: 'fa-css3-alt', prefix: 'fa-brands' },
  PostgreSQL: { icon: 'fa-database', prefix: 'fa-solid' },
  MySQL: { icon: 'fa-database', prefix: 'fa-solid' },
  AWS: { icon: 'fa-cloud', prefix: 'fa-solid' },
  Redis: { icon: 'fa-database', prefix: 'fa-solid' },
  'Redis Streams': { icon: 'fa-stream', prefix: 'fa-solid' },
  'Redis Pub/Sub': { icon: 'fa-tower-broadcast', prefix: 'fa-solid' },
  Git: { icon: 'fa-git-alt', prefix: 'fa-brands' },
  GitHub: { icon: 'fa-github', prefix: 'fa-brands' },
  Docker: { icon: 'fa-docker', prefix: 'fa-brands' },
  'CI/CD Pipelines': { icon: 'fa-arrows-rotate', prefix: 'fa-solid' },
  'Data Structures & Algorithms (DSA)': { icon: 'fa-sitemap', prefix: 'fa-solid' },
  'Object-Oriented Programming (OOP)': { icon: 'fa-cubes', prefix: 'fa-solid' },
  DBMS: { icon: 'fa-database', prefix: 'fa-solid' },
  'Computer Networks': { icon: 'fa-network-wired', prefix: 'fa-solid' },
  'System Design': { icon: 'fa-diagram-project', prefix: 'fa-solid' },
  'Agile Methodology (Scrum)': { icon: 'fa-users-gear', prefix: 'fa-solid' },
  'Gemini LLM Integration': { icon: 'fa-wand-magic-sparkles', prefix: 'fa-solid' },
  'Custom RAG Pipeline': { icon: 'fa-diagram-project', prefix: 'fa-solid' },
  Embeddings: { icon: 'fa-vector-square', prefix: 'fa-solid' },
  'Vector Search': { icon: 'fa-magnifying-glass', prefix: 'fa-solid' }
};
const TILT_CONFIG = { max: 10, speed: 400, glare: true, 'max-glare': 0.22 };

function SkillsSection() {
  const tiltRefs = useRef([]);

  useEffect(() => {
    const elements = tiltRefs.current.filter(Boolean);
    elements.forEach((el) => {
      if (el.vanillaTilt) {
        el.vanillaTilt.destroy();
      }
      VanillaTilt.init(el, TILT_CONFIG);
    });

    return () => {
      elements.forEach((el) => {
        if (el.vanillaTilt) {
          el.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <section className="section skills-section" id="skills" data-aos="fade-up">
      <SectionHeading
        eyebrow="Skills"
        title="Skills & Technologies"
        subtitle="Technologies I work with and continuously improve through projects, practice and continuous learning."
      />
      <div className="skill-groups">
        {skillGroups.map((group, groupIndex) => (
          <div className="skill-group" key={group.title} data-aos="fade-up" data-aos-delay={groupIndex * 60}>
            <h3>{group.title}</h3>
            <div className="skill-cards">
              {group.items.map((item, itemIndex) => (
                <div
                  className="skill-card"
                  key={item}
                  ref={(el) => (tiltRefs.current[groupIndex * 10 + itemIndex] = el)}
                  data-aos="zoom-in"
                  data-aos-delay={itemIndex * 40}
                >
                  <div className="skill-icon">
                    <i className={`${iconMap[item]?.prefix || 'fa-solid'} ${iconMap[item]?.icon || 'fa-code'}`} />
                  </div>
                  <span>{item}</span>
                  <div className="skill-tooltip">{item}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
