import React, { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';

import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(curr => curr === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} currentTheme={theme} />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
