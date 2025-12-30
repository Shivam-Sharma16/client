import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="container section-padding" style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '900px' }}>
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textTransform: 'uppercase', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px', display: 'block' }}
        >
          About Myself
        </motion.span>
        
        <p style={{ fontSize: '3rem', lineHeight: '1.3', fontFamily: 'var(--font-serif)' }}>
          <motion.span 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ staggerChildren: 0.02 }}
          >
            I am Rachit Avasthi, I create 
            <span style={{ fontStyle: 'italic', color: '#fff' }}> unconventional </span> 
            yet functional & visually pleasing interfaces for the mobile and web.
          </motion.span>
        </p>
      </div>
    </section>
  );
};

export default About;