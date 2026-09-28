import { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';
import VanillaTilt from 'vanilla-tilt';
import SectionHeading from './components/common/SectionHeading';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import CertificationsSection from './components/CertificationsSection';
import AchievementsSection from './components/AchievementsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Why Hire Me', href: '#why-hire-me' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' }
];

const cards = [
  { icon: 'fa-lightbulb', title: 'Problem Solving', text: 'Analytical problem-solving with a focus on clean, maintainable software solutions.' },
  { icon: 'fa-brain', title: 'Analytical Thinking', text: 'Strong analytical thinking across algorithms, APIs, databases, and software projects.' },
  { icon: 'fa-comments', title: 'Communication', text: 'Clear communication skills supported by collaboration and project-based development.' },
  { icon: 'fa-people-group', title: 'Team Collaboration', text: 'Collaborative approach with adaptability, time management, and willingness to learn.' }
];

const techIcons = ['fa-python', 'fa-react', 'fa-node-js', 'fa-database', 'fa-js', 'fa-git-alt'];
const TILT_CONFIG = { max: 10, speed: 400, glare: true, 'max-glare': 0.16 };

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const typedRef = useRef(null);
  const tiltRefs = useRef([]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 80 });

    const typing = new Typed(typedRef.current, {
      strings: ['Software Developer', 'Full-Stack Web Developer', 'Python Developer', 'Backend Developer'],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    });

    const timeout = setTimeout(() => setIsLoaded(true), 1000);
    return () => {
      typing.destroy();
      clearTimeout(timeout);
    };
  }, []);

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

  useEffect(() => {
    const onScroll = () => {
      const progress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      document.documentElement.style.setProperty('--scroll-progress', `${Math.min(progress, 100)}%`);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleHireMe = () => {
    window.open('mailto:hareeshtejaparuchuri@gmail.com?subject=Hire%20Me%20for%20your%20next%20project', '_blank');
  };

  return (
    <>
      {!isLoaded && (
        <div className="loader-screen">
          <div className="loader-ring" />
          <h1>Hareesh Teja Paruchuri</h1>
        </div>
      )}

      <div className={`page-shell ${isLoaded ? 'visible' : ''}`}>
        <div className="scroll-progress" />
        <header className="navbar" id="home">
          <a href="#home" className="brand" aria-label="Go to home section">HT</a>
          <button type="button" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen} aria-controls="primary-navigation">
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
          </button>
          <nav id="primary-navigation" className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="https://github.com/hareeshteja781" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/hareeshteja-paruchuri-385b7535b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <button type="button" className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} aria-pressed={theme === 'dark'}>
              <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} />
            </button>
          </nav>
        </header>

        <main>
          <section className="hero section">
            <div className="hero-content" data-aos="fade-up">
              <span className="badge">Available For Work</span>
              <h1>
                Hi, I'm <span>Hareesh Teja Paruchuri</span>
              </h1>
              <p className="subtitle">
                <span ref={typedRef} />
              </p>
              <p className="intro">
                Detail-oriented Computer Science graduate with strong core foundations in Data Structures, Algorithms, Object-Oriented Design, and Full-Stack Web Development. Experienced in building responsive web applications, designing RESTful APIs, and implementing database schemas through end-to-end software projects.
              </p>
              <div className="hero-actions">
                <button type="button" className="btn primary" onClick={handleHireMe} aria-label="Open email to hire Hareesh">Hire Me</button>
                <a className="btn secondary" href="#projects">View Projects</a>
                <a className="btn tertiary" href="mailto:hareeshtejaparuchuri@gmail.com">Contact Me</a>
              </div>
              <div className="social-row">
                <a href="https://github.com/hareeshteja781" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github" /> GitHub</a>
                <a href="https://www.linkedin.com/in/hareeshteja-paruchuri-385b7535b/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin" /> LinkedIn</a>
                <a href="mailto:hareeshtejaparuchuri@gmail.com"><i className="fa-solid fa-envelope" /> Email</a>
              </div>
            </div>
            <div className="hero-visual" data-aos="zoom-in" data-aos-delay="150">
              <div className="profile-card" ref={(el) => (tiltRefs.current[0] = el)} role="img" aria-label="Portrait photo of Hareesh Teja Paruchuri">
                <img className="profile-image" src="/profile.jpg" alt="Hareesh Teja Paruchuri" loading="eager" decoding="async" fetchpriority="high" />
                <div className="profile-glow" />
              </div>
              {techIcons.map((icon, index) => (
                <div key={icon} className={`floating-icon icon-${index + 1}`}>
                  <i className={`fa-brands ${icon}`} />
                </div>
              ))}
            </div>
            <div className="scroll-indicator">
              <span>Scroll</span>
              <i className="fa-solid fa-chevron-down" />
            </div>
          </section>

          <section className="section about" id="about" data-aos="fade-up">
            <SectionHeading
              eyebrow="About Me"
              title="Passionate about building meaningful digital experiences."
            />
            <p>
              Analytical problem-solver proficient in clean code practices, automated unit testing, and Git version control, eager to drive tangible value as an entry-level Software Developer.
            </p>
          </section>

          <section className="section why-hire" id="why-hire-me">
            <SectionHeading eyebrow="Why Hire Me" title="Built for impact, growth, and modern product excellence." />
            <div className="card-grid">
              {cards.map((card, index) => (
                <article className="info-card" key={card.title} data-aos="fade-up" data-aos-delay={index * 100} ref={(el) => (tiltRefs.current[index + 1] = el)}>
                  <div className="icon-wrap">
                    <i className={`fa-solid ${card.icon}`} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </section>

          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <CertificationsSection />
          <AchievementsSection />
          <section className="section resume-section" id="resume" data-aos="fade-up">
            <SectionHeading eyebrow="Resume" title="Resume" subtitle="A concise overview of my background, skills, and project experience for recruiters and hiring teams." />
            <div className="resume-card">
              <div className="resume-card-icon">
                <i className="fa-solid fa-file-pdf" />
              </div>
              <h3>Hareesh Teja Resume</h3>
              <p>Entry-level Software Developer focused on Full-Stack Web Development, RESTful APIs, databases, and AI/ML-integrated software projects.</p>
              <div className="resume-actions">
                <a className="btn primary" href="/Hareesh_Teja_Resume.pdf" download aria-label="Download Hareesh Teja Resume PDF">
                  <i className="fa-solid fa-download" /> Download Resume
                </a>
                <a className="btn secondary" href="#contact">Contact Me</a>
              </div>
            </div>
          </section>
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
