import { useEffect, useMemo, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import SectionHeading from './common/SectionHeading';

const projects = [
  {
    id: 1,
    title: 'Hook Pulse — Distributed Webhook Gateway & Reliability Proxy',
    category: 'Full Stack',
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
    dates: 'January 2026 – July 2026',
    description: 'Built an asynchronous webhook gateway with HMAC-SHA256 verification, idempotency checks, and Redis Streams for reliable, non-blocking event ingestion.',
    technologies: ['Python', 'FastAPI', 'React.js', 'PostgreSQL', 'Redis', 'WebSockets', 'Docker'],
    features: ['HMAC-SHA256 Verification', 'Idempotency Checks', 'Redis Streams', 'Background Workers', 'Exponential Backoff Retries', 'Timeout Handling', 'Dead-Letter Queue (DLQ)', 'Redis Pub/Sub', 'WebSockets', 'Monaco Editor Replay Console'],
    liveUrl: '',
    repoUrl: '',
    overview: 'Distributed webhook gateway and reliability proxy with asynchronous ingestion, reliable delivery, real-time monitoring, and replay.',
    problem: 'Reliable event ingestion and delivery with retries, failure handling, monitoring, and replay capabilities.',
    architecture: 'Python and FastAPI services with Redis Streams, background workers, Redis Pub/Sub, WebSockets, PostgreSQL, and Docker.',
    challenges: 'Reliable event ingestion, idempotency, delivery retries, timeout handling, failed-event processing, and real-time monitoring.',
    solutions: 'Implemented HMAC-SHA256 verification, idempotency checks, HTTP delivery, exponential backoff retries, timeout handling, DLQ support, Redis Pub/Sub, WebSockets, and a Monaco Editor replay console.',
    learning: 'Strengthened experience in distributed event processing, reliability patterns, real-time systems, and full-stack development.',
    future: 'Continue extending the webhook gateway and reliability workflow.'
  },
  {
    id: 2,
    title: 'AI Customer Support Bot & Automated Ticket Manager',
    category: 'AI / Backend',
    badge: 'AI Project',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    dates: 'September 2025 – December 2025',
    description: 'Architected and deployed a customer support automation platform leveraging FastAPI and LLMs, resolving over 76% of common tier-1 support queries autonomously.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'REST APIs', 'LLMs'],
    features: ['LLM Intent Classification', 'Priority Tags', 'Human-Agent Escalation', 'Asynchronous REST APIs', 'Pydantic Schema Validation', 'Ticket Lifecycle Management', 'User Authentication', 'Real-Time State Synchronization', 'Normalized PostgreSQL Schemas', 'Indexed Foreign Keys'],
    liveUrl: '',
    repoUrl: 'https://github.com/hareeshteja781/AI-Customer-Support-Bot-Ticket-management-system',
    overview: 'Customer support automation platform using FastAPI and LLMs for autonomous tier-1 query resolution and automated ticket management.',
    problem: 'Automate common tier-1 support queries and ticket workflows while routing escalated cases to human agents.',
    architecture: 'FastAPI REST APIs with Pydantic validation, LLM-based intent classification, PostgreSQL relational schemas, authentication, and real-time state synchronization.',
    challenges: 'Automated query resolution, ticket triage, priority assignment, escalation routing, and historical ticket tracking.',
    solutions: 'Implemented LLM-based intent classification, priority tagging, human-agent escalation, asynchronous RESTful endpoints, Pydantic validation, and normalized indexed PostgreSQL schemas.',
    learning: 'Strengthened experience in LLM integration, workflow automation, asynchronous APIs, authentication, and relational database design.',
    future: 'Continue improving support automation and ticket-management workflows.'
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
              <p className="project-meta">{project.dates}</p>
              <p>{project.description}</p>
              <div className="tech-badges">
                {project.technologies.slice(0, 6).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn primary small" aria-label={`Open live demo for ${project.title}`}>Live Demo</a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn secondary small" aria-label={`Open GitHub repository for ${project.title}`}>GitHub</a>
                )}
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
