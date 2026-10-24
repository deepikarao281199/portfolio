import React from 'react';

export default function Hero() {
  return (
    <section id="about" className="section container" style={{ paddingTop: '12rem', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="glass" style={{ padding: '4rem', width: '100%', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', justifyContent: 'space-between' }}>
        
        <div style={{ flex: '1 1 500px' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '1rem', fontWeight: 600 }}>Hello, I am</h2>
          <h1 className="title" style={{ textAlign: 'left', marginBottom: '0.5rem', fontSize: '3.5rem', lineHeight: 1.1 }}>Deepika Kubendira Rao</h1>
          <h3 style={{ fontSize: '2rem', color: 'var(--text-color)', marginBottom: '1.5rem', fontWeight: 500 }}>Software Engineer</h3>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '900px', marginBottom: '2.5rem' }}>
            Software Engineer with 3+ years of experience designing and developing scalable backend systems in enterprise SaaS environments. Skilled in Java, Spring Boot, Jakarta EE , REST APIs, SQL, and microservices architecture, with hands-on expertise in CI/CD, automated testing, performance optimization, and AI assisted development within Agile SDLC.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#projects" className="btn-accent" style={{ fontSize: '1.1rem' }}>View My Work</a>
            <a href="#contact" className="btn-accent btn-outline" style={{ fontSize: '1.1rem' }}>Get In Touch</a>
          </div>
        </div>

        <div style={{ flex: '1 1 350px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ 
            width: '380px', 
            height: '380px', 
            borderRadius: '24px', 
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <img 
              src="/profile.jpeg" 
              alt="Deepika Kubendira Rao" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', transform: 'scale(1.4)', transformOrigin: 'center 15%' }} 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
