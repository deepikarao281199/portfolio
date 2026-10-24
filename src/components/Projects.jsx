import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Mind The Gap',
      description: 'End-to-end analytics pipeline processing 26K+ neighborhood records with Python, Pandas, NumPy, and scikit-learn. Engineered OpenStreetMap features with PCA and K-Means to identify transit deserts. Validated via Random Forest and Neural Networks achieving 99% accuracy.',
      tags: ['Python', 'Pandas', 'scikit-learn', 'Machine Learning', 'Data Science']
    },
    {
      title: 'Community Connect',
      description: 'Scalable community engagement platform with event-driven messaging for reliable notifications. Designed REST services to support concurrent users and reduced API response time by 280ms under load testing.',
      tags: ['Java', 'Spring Boot', 'Apache Kafka', 'MySQL', 'REST APIs']
    },
    {
      title: 'Pharmassist Medicine Detector',
      description: 'Mobile application to assist elderly and visually impaired users with medication adherence. Utilized pattern recognition to identify medicine bottles and TTS/STT features for voice-guided reminders.',
      tags: ['Flutter', 'Firebase', 'Mobile Dev', 'Pattern Recognition']
    },
    {
      title: 'Chirologia Recognition using Deep Learning',
      description: 'To interpret the various hand gestures populated in the detecting environment and predict the gesture that is defined by an individual or the media source using convolutional neural network deep learning. ',
      tags: ['Python', 'CNN', 'Deep Learning']
    },
    {
      title: 'Parachute Lander using Reinforcement Learning',
      description: 'Proposed a model which is both cost-effective and easily executable for the parachutist to engage without any safety compromise to reduce parachute accidents and notifying in case there is a chance that the parachutes can collide and the parachutist can make necessary decisions for a safe landing.',
      tags: ['Reinforcement Learning', 'SARSA', 'DQN', 'Actor Critic']
    },
    {
      title: 'Face Mask Detection',
      description: 'To evaluate a dataset of face images to detect faces in the frame and determine if they are wearing a face mask or not. Predicted the testing set, evaluating the performance, accuracy, and processing time to provide insights for users effectively. ',
      tags: ['Python', 'Anaconda', 'ANN', 'CNN']
    }
  ];

  return (
    <section id="projects" className="section container">
      <h2 className="title">Academic & Personal Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {projects.map((p, i) => (
          <div key={i} className="glass" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{p.title}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>{p.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {p.tags.map(tag => (
                <span key={tag} style={{ background: 'var(--accent-color)', color: '#fff', padding: '0.2rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
