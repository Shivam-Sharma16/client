import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    // Load GSAP
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.async = true;
    
    script.onload = () => {
      const gsap = window.gsap;

      // Cursor follow effect
      const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: 'power3.out'
        });

        gsap.to(cursorDotRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1
        });

        // Parallax effect
        const xPercent = (e.clientX / window.innerWidth - 0.5) * 2;
        const yPercent = (e.clientY / window.innerHeight - 0.5) * 2;

        gsap.to('.image-card-1', {
          x: xPercent * 40,
          y: yPercent * 40,
          rotationY: xPercent * 10,
          rotationX: -yPercent * 10,
          duration: 1.5,
          ease: 'power2.out'
        });

        gsap.to('.image-card-2', {
          x: xPercent * 60,
          y: yPercent * 60,
          rotationY: xPercent * 15,
          rotationX: -yPercent * 15,
          duration: 2,
          ease: 'power2.out'
        });

        gsap.to('.title-visual', {
          x: xPercent * -15,
          y: yPercent * -15,
          duration: 1.2,
          ease: 'power2.out'
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      // Initial animations
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Magnetic reveal for titles
      gsap.set('.title-word', { 
        opacity: 0, 
        y: 150,
        rotationX: -90,
        transformOrigin: 'center bottom'
      });

      gsap.set('.about-line', { 
        opacity: 0, 
        y: 50,
        skewY: 5
      });

      gsap.set('.status-item', { 
        opacity: 0, 
        x: -50 
      });

      gsap.set(['.image-card-1', '.image-card-2'], { 
        opacity: 0, 
        scale: 0.6,
        y: 100,
        rotationZ: -10
      });

      gsap.set('.scroll-text', { 
        opacity: 0 
      });

      gsap.set('.gradient-orb', { 
        scale: 0, 
        opacity: 0 
      });

      // Animation sequence
      tl.to('.gradient-orb', {
        scale: 1,
        opacity: 0.6,
        duration: 2,
        ease: 'power2.out'
      }, 0)
      .to('.title-word', {
        opacity: 1,
        y: 0,
        rotationX: 0,
        stagger: 0.15,
        duration: 1.8,
        ease: 'power4.out'
      }, 0.3)
      .to('.status-item', {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 1.2
      }, 1)
      .to('.about-line', {
        opacity: 1,
        y: 0,
        skewY: 0,
        stagger: 0.08,
        duration: 1
      }, 1.3)
      .to('.image-card-1', {
        opacity: 1,
        scale: 1,
        y: 0,
        rotationZ: 0,
        duration: 1.8,
        ease: 'back.out(1.4)'
      }, 1.5)
      .to('.image-card-2', {
        opacity: 1,
        scale: 1,
        y: 0,
        rotationZ: 0,
        duration: 1.8,
        ease: 'back.out(1.4)'
      }, 1.7)
      .to('.scroll-text', {
        opacity: 1,
        duration: 1
      }, 2.5);

      // Continuous floating animations
      gsap.to('.image-card-1', {
        y: '+=30',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 3
      });

      gsap.to('.image-card-2', {
        y: '+=40',
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 3.3
      });

      gsap.to('.gradient-orb', {
        x: '+=50',
        y: '+=50',
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to('.scroll-text', {
        y: '+=10',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 3
      });

      // Rotate title slightly
      gsap.to('.title-visual', {
        rotation: '+=2',
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 3
      });

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        tl.kill();
      };
    };

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div className="custom-cursor" ref={cursorRef}></div>
      <div className="custom-cursor-dot" ref={cursorDotRef}></div>

      <div className="hero" ref={heroRef}>
        {/* Animated Background */}
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="noise-overlay"></div>

        <div className="hero-container">
          {/* Main Content Grid */}
          <div className="hero-grid">
            
            {/* Left Section - Title */}
            <div className="hero-left">
              <div className="title-section">
                <h1 className="hero-main-title">
                  <span className="title-word">Creative</span>
                  <span className="title-word title-visual">Visual</span>
                  <span className="title-word">Developer</span>
                </h1>
              </div>

              {/* Status Bar */}
              <div className="status-bar">
                <div className="status-item">
                  <div className="status-dot"></div>
                  <span className="status-text">Available for Freelance</span>
                </div>
                <div className="status-item">
                  <span className="status-label">Location</span>
                  <span className="status-value">Worldwide</span>
                </div>
                <div className="status-item">
                  <span className="status-label">Local Time</span>
                  <span className="status-value">22:16 GMT+5:30</span>
                </div>
              </div>
            </div>

            {/* Right Section - About & Images */}
            <div className="hero-right">
              <div className="about-section">
                <div className="about-content">
                  <p className="about-line">
                    <span className="about-greeting">Hello there! 👋</span>
                  </p>
                  <p className="about-line">
                    I'm <span className="highlight">Rachit Avasthi</span>, a passionate
                  </p>
                  <p className="about-line">
                    developer who crafts <span className="highlight">unconventional</span>
                  </p>
                  <p className="about-line">
                    yet <span className="highlight-alt">functional</span> & visually stunning
                  </p>
                  <p className="about-line">
                    experiences for web and mobile.
                  </p>
                </div>

                {/* CTA Button */}
                <button className="cta-button">
                  <span className="cta-text">Let's Create Together</span>
                  <span className="cta-arrow">→</span>
                </button>
              </div>

              {/* Floating Image Cards */}
              <div className="images-container">
                <div className="image-card image-card-1">
                  <div className="image-shine"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=800&fit=crop&q=80" 
                    alt="Creative workspace"
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="image-card image-card-2">
                  <div className="image-shine"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop&q=80" 
                    alt="Development"
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <div className="scroll-text">Scroll to explore</div>
            <div className="scroll-line"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;