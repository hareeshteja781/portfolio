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
  { icon: 'fa-lightbulb', title: 'Problem Solving', text: 'Turning complex ideas into elegant, reliable solutions with calm focus.' },
  { icon: 'fa-layer-group', title: 'Full Stack Development', text: 'Building scalable web experiences across frontend, backend, and APIs.' },
  { icon: 'fa-code', title: 'Clean Code', text: 'Writing maintainable, readable, and high-quality code that stands the test of time.' },
  { icon: 'fa-rocket', title: 'Continuous Learning', text: 'Eager to adapt, grow, and master emerging tools and practices.' }
];

const techIcons = ['fa-python', 'fa-react', 'fa-node-js', 'fa-database', 'fa-js', 'fa-git-alt'];

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
      strings: ['Software Engineer', 'Full Stack Developer', 'Python Developer', 'Flask Developer', 'React Developer', 'Problem Solver'],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    });

    const timeout = setTimeout(() => setIsLoaded(true), 1800);
    return () => {
      typing.destroy();
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const elements = tiltRefs.current.filter(Boolean);
    elements.forEach((el) => VanillaTilt.init(el, { max: 10, speed: 400, glare: true, 'max-glare': 0.16 }));
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
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
          </button>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
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
                I’m a passionate software engineer focused on building full-stack web applications, solving meaningful problems, and crafting modern digital experiences with clean, scalable code.
              </p>
              <div className="hero-actions">
                <button className="btn primary" onClick={handleHireMe} aria-label="Open email to hire Hareesh">Hire Me</button>
                <a className="btn secondary" href="#why-hire-me">View Projects</a>
                <a className="btn tertiary" href="mailto:hareeshtejaparuchuri@gmail.com">Contact Me</a>
              </div>
              <div className="social-row">
                <a href="https://github.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-github" /> GitHub</a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin" /> LinkedIn</a>
                <a href="mailto:hareeshtejaparuchuri@gmail.com"><i className="fa-solid fa-envelope" /> Email</a>
              </div>
            </div>
            <div className="hero-visual" data-aos="zoom-in" data-aos-delay="150">
              <div className="profile-card" ref={(el) => (tiltRefs.current[0] = el)} role="img" aria-label="Portrait photo of Hareesh Teja Paruchuri">
                <img className="profile-image" src="/profile.jpg" alt="Hareesh Teja Paruchuri" />
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
              I’m a passionate Software Engineer with a strong interest in full stack development, scalable web applications, and continuous learning. I enjoy turning ideas into polished products through clean architecture, thoughtful problem solving, and modern technologies. My goal is to create experiences that are not only functional but also impactful, maintainable, and delightful to use.
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
              <p>I’m available for full-stack and software engineering opportunities across web applications, APIs, and product-focused development.</p>
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
