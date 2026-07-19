import { useEffect, useMemo, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import SectionHeading from './common/SectionHeading';

const projects = [
  {
    id: 1,
    title: 'Task Management System',
    category: 'Full Stack',
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
    description: 'Developed a Full Stack Task Management System using Python, Flask, SQLite, HTML, CSS and JavaScript.',
    technologies: ['Python', 'Flask', 'SQLite', 'HTML5', 'CSS3', 'JavaScript', 'REST API', 'Git', 'GitHub'],
    features: ['Authentication', 'CRUD Operations', 'Dashboard', 'Search', 'Filters', 'Sorting', 'Responsive UI', 'REST APIs', 'Secure Database', 'Professional Design'],
    liveUrl: 'https://task-manager-5t2o.onrender.com/login',
    repoUrl: 'https://github.com/hareeshteja781/task-manager',
    overview: 'A modern task management platform designed to help users organize work, track progress, and manage priorities with ease.',
    problem: 'Users needed a simple, responsive system to manage tasks without sacrificing clarity or performance.',
    architecture: 'Flask backend with SQLite storage and a modular frontend built with vanilla JavaScript and modern CSS.',
    challenges: 'Delivering a clean UI while keeping the app lightweight, secure, and easy to use across devices.',
    solutions: 'Implemented modular routes, REST-based endpoints, and polished responsive screens with intuitive interactions.',
    learning: 'Improved my understanding of backend design, authentication flows, and creating maintainable full-stack applications.',
    future: 'Add team collaboration, notifications, and drag-and-drop task boards.'
  },
  {
    id: 2,
    title: 'Employee Management System',
    category: 'Full Stack',
    badge: 'Premium',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    description: 'Developed a Full Stack Employee Management System using Python, Flask, MySQL, HTML, CSS and JavaScript.',
    technologies: ['Python', 'Flask', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'REST APIs', 'Git'],
    features: ['CRUD Operations', 'Employee Search', 'Authentication', 'Session Management', 'Database Optimization', 'Professional UI'],
    liveUrl: 'https://github.com/hareeshteja781',
    repoUrl: 'https://github.com/hareeshteja781',
    overview: 'An employee management portal for handling records, search, and administration in a professional and organized manner.',
    problem: 'Organizations needed a simple system to keep employee data structured and accessible.',
    architecture: 'Flask application with a relational MySQL database and a responsive UI for day-to-day administrative work.',
    challenges: 'Balancing usability with strong backend validation and secure session handling.',
    solutions: 'Built modular routes, secure authentication, and optimized database queries for reliable operations.',
    learning: 'Strengthened my experience in session-based auth, database design, and operational reliability.',
    future: 'Introduce dashboards, role-based access, and reporting features.'
  }
];

const filters = ['All'];
const TILT_CONFIG = { max: 10, speed: 400, glare: true, 'max-glare': 0.18 };

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
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
  }, [activeFilter]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => {
      if (activeFilter === 'Python') return project.technologies.includes('Python');
      if (activeFilter === 'Flask') return project.technologies.includes('Flask');
      if (activeFilter === 'Frontend') return project.technologies.includes('HTML5') || project.technologies.includes('CSS3') || project.technologies.includes('JavaScript');
      if (activeFilter === 'Backend') return project.technologies.includes('REST API') || project.technologies.includes('REST APIs') || project.technologies.includes('SQLite') || project.technologies.includes('MySQL');
      return project.category === activeFilter;
    });
  }, [activeFilter]);

  return (
    <section className="section projects-section" id="projects" data-aos="fade-up">
      <SectionHeading
        eyebrow="Projects"
        title="Projects"
        subtitle="Two representative projects that highlight my full-stack development skills and problem-solving approach."
      />

      <div className="filter-row" data-aos="fade-up">
        {filters.map((filter) => (
          <button type="button" key={filter} className={`filter-chip ${activeFilter === filter ? 'active' : ''}`} onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter}>
            {filter}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <article
            key={project.id}
            className={`project-card ${project.id === 1 ? 'featured-card' : ''}`}
            data-aos="fade-up"
            data-aos-delay={index * 70}
            ref={(el) => (tiltRefs.current[index] = el)}
          >
            <div className="project-media">
              <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
              <span className="project-badge">{project.badge}</span>
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-badges">
                {project.technologies.slice(0, 6).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn primary small" aria-label={`Open live demo for ${project.title}`}>Live Demo</a>
                <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn secondary small" aria-label={`Open GitHub repository for ${project.title}`}>GitHub</a>
                <button type="button" className="btn tertiary small" onClick={() => setActiveProject(project)} aria-label={`View details for ${project.title}`}>View Details</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)} role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><i className="fa-solid fa-xmark" /></button>
            <div className="modal-content">
              <div className="modal-hero">
                <div>
                  <p className="eyebrow">Project Overview</p>
                  <h3 id="project-modal-title">{activeProject.title}</h3>
                  <p>{activeProject.overview}</p>
                </div>
                <div className="modal-image-placeholder">
                  <i className="fa-solid fa-layer-group" />
                </div>
              </div>

              <div className="modal-grid">
                <div className="modal-card">
                  <h4>Problem Statement</h4>
                  <p>{activeProject.problem}</p>
                </div>
                <div className="modal-card">
                  <h4>Features</h4>
                  <ul>
                    {activeProject.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                </div>
                <div className="modal-card">
                  <h4>Architecture</h4>
                  <p>{activeProject.architecture}</p>
                </div>
                <div className="modal-card">
                  <h4>Technologies</h4>
                  <div className="tech-badges compact">
                    {activeProject.technologies.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                </div>
                <div className="modal-card">
                  <h4>Challenges</h4>
                  <p>{activeProject.challenges}</p>
                </div>
                <div className="modal-card">
                  <h4>Solutions</h4>
                  <p>{activeProject.solutions}</p>
                </div>
                <div className="modal-card">
                  <h4>What I Learned</h4>
                  <p>{activeProject.learning}</p>
                </div>
                <div className="modal-card">
                  <h4>Future Improvements</h4>
                  <p>{activeProject.future}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectsSection;
