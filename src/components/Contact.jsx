import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section container" style={{ marginBottom: '5rem' }}>
      <h2 className="title">Get In Touch</h2>
      <div className="glass" style={{ padding: '4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
          Interested in working together or have a question? Feel free to reach out to me via email or connect with me on LinkedIn!
        </p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
          <a href="mailto:deepika.kubendirarao28@gmail.com" style={{ fontSize: '1.1rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            📧 deepika.kubendirarao28@gmail.com
          </a>
          <a href="https://linkedin.com/deepika-kubendirarao" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            💼 LinkedIn
          </a>
          <a href="https://github.com/deepikarao281199" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            💻 GitHub
          </a>
          <a href="tel:+15712204035" style={{ fontSize: '1.1rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            📱 +1 5712204035
          </a>
        </div>

        <a href="mailto:deepika.kubendirarao28@gmail.com" className="btn-accent" style={{ fontSize: '1.2rem', padding: '1rem 2rem', display: 'inline-block' }}>Say Hello</a>
      </div>
    </section>
  );
}
