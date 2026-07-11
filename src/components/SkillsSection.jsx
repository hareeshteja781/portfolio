import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import SectionHeading from './common/SectionHeading';

const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['Python', 'SQL', 'JavaScript']
  },
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js']
  },
  {
    title: 'Backend',
    items: ['Python', 'Flask', 'Node.js', 'Express.js', 'REST APIs']
  },
  {
    title: 'Database',
    items: ['MySQL', 'PostgreSQL']
  },
  {
    title: 'Cloud',
    items: ['AWS (Basics)']
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'VS Code']
  },
  {
    title: 'Concepts',
    items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS', 'Responsive Web Design', 'CRUD Operations', 'JWT Authentication']
  }
];

const iconMap = {
  Python: { icon: 'fa-python', prefix: 'fa-brands' },
  SQL: { icon: 'fa-database', prefix: 'fa-solid' },
  JavaScript: { icon: 'fa-js', prefix: 'fa-brands' },
  'HTML5': { icon: 'fa-html5', prefix: 'fa-brands' },
  'CSS3': { icon: 'fa-css3-alt', prefix: 'fa-brands' },
  'React.js': { icon: 'fa-react', prefix: 'fa-brands' },
  'Next.js': { icon: 'fa-code', prefix: 'fa-solid' },
  Flask: { icon: 'fa-flask', prefix: 'fa-solid' },
  'Node.js': { icon: 'fa-node-js', prefix: 'fa-brands' },
  'Express.js': { icon: 'fa-server', prefix: 'fa-solid' },
  'REST APIs': { icon: 'fa-network-wired', prefix: 'fa-solid' },
  MySQL: { icon: 'fa-database', prefix: 'fa-solid' },
  PostgreSQL: { icon: 'fa-database', prefix: 'fa-solid' },
  'AWS (Basics)': { icon: 'fa-cloud', prefix: 'fa-solid' },
  Git: { icon: 'fa-git-alt', prefix: 'fa-brands' },
  GitHub: { icon: 'fa-github', prefix: 'fa-brands' },
  Docker: { icon: 'fa-docker', prefix: 'fa-brands' },
  'VS Code': { icon: 'fa-code', prefix: 'fa-solid' },
  'Data Structures & Algorithms': { icon: 'fa-sitemap', prefix: 'fa-solid' },
  'Object-Oriented Programming': { icon: 'fa-cubes', prefix: 'fa-solid' },
  DBMS: { icon: 'fa-database', prefix: 'fa-solid' },
  'Responsive Web Design': { icon: 'fa-mobile-screen', prefix: 'fa-solid' },
  'CRUD Operations': { icon: 'fa-list-check', prefix: 'fa-solid' },
  'JWT Authentication': { icon: 'fa-lock', prefix: 'fa-solid' }
};

function SkillsSection() {
  const tiltRefs = useRef([]);

  useEffect(() => {
    const elements = tiltRefs.current.filter(Boolean);
    elements.forEach((el) => VanillaTilt.init(el, { max: 10, speed: 400, glare: true, 'max-glare': 0.22 }));
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
