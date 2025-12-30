import React from 'react';
import { motion } from 'framer-motion';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Home = ({ setCursorVariant }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <header className="container" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="hero-text" style={{ position: 'relative', zIndex: 10 }}>
          {["Multitasking", "Freelancer", "Visual", "Developer"].map((text, index) => (
            <div key={index} className="text-reveal" style={{ height: '110px' }}>
              <motion.h1
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ ...transition, delay: index * 0.1 }}
                style={{ fontSize: '7vw', lineHeight: '1', textTransform: 'uppercase', letterSpacing: '-2px' }}
                onMouseEnter={() => setCursorVariant("text")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                {text}
              </motion.h1>
            </div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1, duration: 1 }}
          style={{ position: 'absolute', bottom: '50px', right: '50px', textAlign: 'right' }}
        >
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem' }}>Based in India</p>
          <p style={{ color: 'var(--text-muted)' }}>GMT +5:30</p>
        </motion.div>
      </header>

      {/* Render other sections as one long scrollable page like the original */}
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </motion.div>
  );
};

export default Home;