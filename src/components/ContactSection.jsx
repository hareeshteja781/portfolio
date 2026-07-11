import { useState } from 'react';
import SectionHeading from './common/SectionHeading';
import { sendPortfolioEmail } from '../services/emailService';

const contactCards = [
  { title: 'Phone', value: '+91 7816025937', icon: 'fa-phone', copy: true },
  { title: 'Email', value: 'hareeshtejaparuchuri@gmail.com', icon: 'fa-envelope', copy: true },
  { title: 'Location', value: 'Khammam, Telangana, India', icon: 'fa-location-dot', copy: false },
  { title: 'GitHub', value: 'https://github.com/hareeshteja781', icon: 'fa-github', copy: false, link: true },
  { title: 'LinkedIn', value: 'https://www.linkedin.com/in/hareeshteja-paruchuri-385b7535b/', icon: 'fa-linkedin', copy: false, link: true }
];

const socialLinks = [
  { label: 'GitHub', icon: 'fa-github', url: 'https://github.com/hareeshteja781' },
  { label: 'LinkedIn', icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/hareeshteja-paruchuri-385b7535b/' },
  { label: 'Gmail', icon: 'fa-envelope', url: 'mailto:hareeshtejaparuchuri@gmail.com' }
];

function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showToast = (message) => {
    setStatus(message);
    setTimeout(() => setStatus(''), 2500);
  };

  const copyValue = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      showToast(`${value.includes('@') ? 'Email' : 'Phone Number'} Copied Successfully`);
    } catch {
      showToast('Copy failed. Please try again.');
    }
  };

  const sanitizeInput = (value) => value.replace(/<[^>]*>/g, '').trim();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const safeName = sanitizeInput(formData.name);
    const safeEmail = sanitizeInput(formData.email);
    const safeSubject = sanitizeInput(formData.subject);
    const safeMessage = sanitizeInput(formData.message);

    if (!safeName || !safeEmail || !safeSubject || !safeMessage) {
      showToast('Please fill in all fields.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(safeEmail)) {
      showToast('Please enter a valid email address.');
      return;
    }

    setIsSending(true);
    try {
      const payload = {
        from_name: safeName,
        from_email: safeEmail,
        subject: safeSubject,
        message: safeMessage
      };

      await sendPortfolioEmail(payload);
      showToast('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      showToast('Unable to send message right now. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="section contact-section" id="contact" data-aos="fade-up">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Connect"
        subtitle="I'm always open to discussing new opportunities, collaborations and exciting projects."
      />

      <div className="contact-grid">
        <div className="contact-panel">
          <div className="contact-cards">
            {contactCards.map((card) => (
              <div className="contact-card" key={card.title}>
                <div className="contact-icon">
                  <i className={`fa-solid ${card.icon}`} />
                </div>
                <div>
                  <h3>{card.title}</h3>
                  {card.link ? (
                    <a href={card.value} target="_blank" rel="noreferrer">{card.value}</a>
                  ) : (
                    <p>{card.value}</p>
                  )}
                </div>
                {card.copy && (
                  <button className="copy-btn" onClick={() => copyValue(card.value)}>
                    <i className="fa-regular fa-copy" />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="social-links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noreferrer" className="social-pill">
                <i className={`fa-brands ${link.icon}`} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              <span>Name</span>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" aria-label="Name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" aria-label="Email" />
            </label>
          </div>
          <label>
            <span>Subject</span>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="What do you want to discuss?" aria-label="Subject" />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here" rows="6" aria-label="Message" />
          </label>
          <div className="form-actions">
            <button type="submit" className="btn primary" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
            <button type="button" className="btn secondary" onClick={() => setFormData({ name: '', email: '', subject: '', message: '' })}>Clear Form</button>
          </div>
        </form>
      </div>

      {status && <div className="toast">{status}</div>}
    </section>
  );
}

export default ContactSection;
