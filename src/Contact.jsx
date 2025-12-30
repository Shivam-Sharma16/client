import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  { id: 1, text: "Hi! What's your name?", field: "name", type: "text", placeholder: "Enter your name" },
  { id: 2, text: "What kind of project is this?", field: "projectType", type: "options", options: ["Web Design", "Development", "Full Package"] },
  { id: 3, text: "What's your budget range?", field: "budget", type: "options", options: ["< $5k", "$5k - $20k", "> $20k"] },
  { id: 4, text: "Where can I reach you?", field: "email", type: "email", placeholder: "name@example.com" },
];

const Contact = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = (val) => {
    setFormData({ ...formData, [questions[step].field]: val });
    if (step < questions.length - 1) setStep(step + 1);
    else alert("Message Sent!"); // Replace with real submission
  };

  const currentQ = questions[step];

  return (
    <section className="container section-padding" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <span style={{ textTransform: 'uppercase', color: '#666' }}>{step + 1} / {questions.length}</span>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{ fontSize: '3rem', margin: '20px 0 40px' }}>{currentQ.text}</h2>
            
            {currentQ.type === 'options' ? (
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {currentQ.options.map(opt => (
                  <button
                    key={opt}
                    onClick={() => handleNext(opt)}
                    style={{
                      background: 'transparent',
                      border: '1px solid #555',
                      color: '#fff',
                      padding: '15px 30px',
                      borderRadius: '30px',
                      fontSize: '1.2rem',
                      cursor: 'pointer',
                      transition: '0.3s'
                    }}
                    onMouseOver={(e) => {e.target.style.background = '#fff'; e.target.style.color = '#000'}}
                    onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = '#fff'}}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); handleNext(e.target[0].value); }}>
                <input 
                  autoFocus 
                  type={currentQ.type} 
                  placeholder={currentQ.placeholder}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '2px solid #555',
                    width: '100%',
                    fontSize: '2rem',
                    color: '#fff',
                    padding: '10px 0',
                    outline: 'none'
                  }}
                />
                <button type="submit" style={{ marginTop: '30px', padding: '15px 40px', background: '#fff', border: 'none', borderRadius: '30px', fontSize: '1rem', cursor: 'pointer' }}>
                  Next &rarr;
                </button>
              </form>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;