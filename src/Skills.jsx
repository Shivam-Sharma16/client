import React from 'react';

const Skills = () => {
  const skills = [
    "Web & Mobile Design",
    "UI/UX Strategy",
    "Branding",
    "Front-end Development"
  ];

  return (
    <section className="container section-padding">
      <div style={{ borderTop: '1px solid #333', borderBottom: '1px solid #333', padding: '60px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Things I can help you with</h3>
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            {skills.map((skill, i) => (
              <span key={i} style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;