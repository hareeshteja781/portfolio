import { useEffect, useState } from 'react';
import SectionHeading from './common/SectionHeading';

const achievements = [
  { icon: 'fa-briefcase', value: '2+', label: 'Projects Completed' },
  { icon: 'fa-layer-group', value: '15+', label: 'Technologies Learned' },
  { icon: 'fa-code-branch', value: '2+', label: 'GitHub Repositories' },
  { icon: 'fa-rocket', value: '1+', label: 'Deployment Projects' }
];

function AchievementsSection() {
  const [counts, setCounts] = useState(achievements.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => prev.map((value, index) => (value < (parseInt(achievements[index].value, 10) || 0) ? value + 1 : value)));
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section achievements-section" id="achievements" data-aos="fade-up">
      <SectionHeading eyebrow="Achievements" title="Achievements" />
      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <article className="achievement-card" key={item.label} data-aos="fade-up" data-aos-delay={index * 80}>
            <div className="achievement-icon">
              <i className={`fa-solid ${item.icon}`} />
            </div>
            <h3>{counts[index]}{item.value.replace(/\d+/g, '')}</h3>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AchievementsSection;
