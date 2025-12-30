import React from 'react';

const honors = [
  { title: "Smart India Hackathon", subtitle: "College Winners", year: "2023" },
  { title: "UI/UX Developer", subtitle: "Certification", year: "2023" },
  { title: "Bharat Intern", subtitle: "Web Internship", year: "2023" },
  { title: "JCS Production Lead", subtitle: "Video & Prod", year: "2022" },
];

const Experience = () => {
  return (
    <section className="container section-padding">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '50px' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem' }}>Honors & <br/> Achievements</h2>
        </div>
        <div>
          {honors.map((item, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0', borderBottom: '1px solid #222' }}>
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '500' }}>{item.title}</h4>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>{item.subtitle}</p>
              </div>
              <span style={{ color: '#666' }}>{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;