import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  { name: "Recyclotronics", type: "UI/UX & Frontend", year: "2023" },
  { name: "Stark Esports", type: "Full Stack Dev", year: "2023" },
  { name: "Achievers", type: "Platform Dev", year: "2023" },
  { name: "Goyal Fashions", type: "Design & Dev", year: "2025" },
];

const ProjectItem = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div 
      style={{ 
        borderBottom: '1px solid #333', 
        padding: '50px 0', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: '4vw', margin: 0, color: hovered ? '#fff' : '#888', transition: '0.4s' }}>
          {project.name}
        </h2>
      </div>
      <div style={{ flex: 1, textAlign: 'center', display: 'none', md: { display: 'block'} }}>
        <span style={{ textTransform: 'uppercase', fontSize: '0.9rem' }}>{project.type}</span>
      </div>
      <div style={{ flex: 0.2, textAlign: 'right' }}>
        <span>{project.year}</span>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="container section-padding">
      <span style={{ textTransform: 'uppercase', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Featured Works (05)</span>
      <div style={{ marginTop: '50px' }}>
        {projects.map((p, i) => <ProjectItem key={i} project={p} />)}
      </div>
    </section>
  );
};

export default Projects;