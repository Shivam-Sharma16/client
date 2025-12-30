import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './Home';
import About from './About';
import Projects from './Projects'; // Corrected filename usage
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import Navbar from './Navbar'; // Simple navbar component

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const cursorVariants = {
    default: { x: mousePosition.x - 10, y: mousePosition.y - 10 },
    text: { height: 80, width: 80, x: mousePosition.x - 40, y: mousePosition.y - 40, backgroundColor: "#fff", mixBlendMode: "difference" }
  };

  return (
    <Router>
      <div className="app">
        <motion.div 
          className="cursor"
          variants={cursorVariants}
          animate={cursorVariant}
          transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
        />
        <Navbar setCursorVariant={setCursorVariant} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home setCursorVariant={setCursorVariant} />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
};

// Simple Internal Navbar for navigation
const Navbar = ({ setCursorVariant }) => (
  <nav style={{ position: 'fixed', top: 0, width: '100%', padding: '30px 50px', display: 'flex', justifyContent: 'space-between', zIndex: 100, mixBlendMode: 'difference' }}>
    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 'bold' }}>RACHIT AVASTHI</div>
    <div style={{ display: 'flex', gap: '30px' }}>
      {['About', 'Projects', 'Contact'].map((item) => (
        <a 
          key={item} 
          href={`/${item.toLowerCase()}`} 
          style={{ textDecoration: 'none', color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase' }}
          onMouseEnter={() => setCursorVariant("text")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          {item}
        </a>
      ))}
    </div>
  </nav>
);

export default App;