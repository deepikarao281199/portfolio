import React from 'react';

export default function Header({ toggleTheme, currentTheme }) {
  return (
    <header className="glass-nav" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, padding: '1rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>Deepika Portfolio</h1>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#about" style={{ fontWeight: 500 }}>About</a>
          <a href="#experience" style={{ fontWeight: 500 }}>Experience</a>
          <a href="#education" style={{ fontWeight: 500 }}>Education</a>
          <a href="#projects" style={{ fontWeight: 500 }}>Projects</a>
          <a href="#contact" style={{ fontWeight: 500 }}>Contact</a>
          <button onClick={toggleTheme} className="btn-accent" style={{ padding: '0.4rem 1rem' }}>
            {currentTheme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </nav>
      </div>
    </header>
  );
}
