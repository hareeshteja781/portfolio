function Footer() {
  const quickLinks = ['Home', 'About', 'Why Hire Me', 'Skills', 'Projects', 'Education', 'Certifications', 'Achievements', 'Contact'];

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>Hareesh Teja Paruchuri</h3>
          <p>Software Engineer focused on building modern, scalable, and meaningful digital experiences.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <div className="footer-links">
            {quickLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>
                {link}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4>Social Links</h4>
          <div className="footer-links">
            <a href="https://github.com/hareeshteja781" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/hareeshteja-paruchuri-385b7535b/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:hareeshtejaparuchuri@gmail.com">Email</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Hareesh Teja Paruchuri</p>
        <p>Designed & Developed by Hareesh Teja Paruchuri</p>
        <a href="#home" className="back-to-top">Back To Top</a>
      </div>
    </footer>
  );
}

export default Footer;
