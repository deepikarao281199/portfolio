import React from 'react';
import { 
  FaJava, FaPython, FaSwift, FaHtml5, FaCss3Alt, FaReact, FaAngular, 
  FaAws, FaDocker, FaJenkins, FaDatabase, FaLeaf, FaBrain, FaServer, FaCode, FaProjectDiagram 
} from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';

export default function Education() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", icon: <FaJava /> },
        { name: "C++", icon: <FaCode /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Swift", icon: <FaSwift /> },
        { name: "JavaScript", icon: <FaCode /> },
        { name: "Objective C", icon: <FaCode /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> }
      ]
    },
    {
      category: "Frameworks & Frontend",
      items: [
        { name: "Spring Boot", icon: <FaLeaf /> },
        { name: "Jakarta EE", icon: <FaServer /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Angular.js", icon: <FaAngular /> },
        { name: "REST APIs", icon: <FaProjectDiagram /> },
        { name: "Spring MVC", icon: <FaLeaf /> }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", icon: <FaDatabase /> },
        { name: "MySQL", icon: <FaDatabase /> },
        { name: "Oracle", icon: <FaDatabase /> },
        { name: "MongoDB", icon: <FaDatabase /> },
        { name: "NoSQL", icon: <FaDatabase /> }
      ]
    },
    {
      category: "Data & Machine Learning",
      items: [
        { name: "Pandas", icon: <FaDatabase /> },
        { name: "scikit-learn", icon: <FaBrain /> },
        { name: "PCA", icon: <FaBrain /> },
        { name: "K-Means", icon: <FaBrain /> },
        { name: "Random Forest", icon: <FaBrain /> },
        { name: "Neural Networks", icon: <FaBrain /> }
      ]
    },
    {
      category: "DevOps & Cloud",
      items: [
        { name: "AWS", icon: <FaAws /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Kubernetes", icon: <FaServer /> },
        { name: "Jenkins", icon: <FaJenkins /> },
        { name: "Kafka", icon: <FaServer /> },
        { name: "CI/CD", icon: <FaProjectDiagram /> }
      ]
    }
  ];

  const mastersCourses = [
    "Data Structures and Algorithm", "Machine Learning", "Advanced Software Paradigms",
    "Computer Architecture", "Big Data", "Cloud Computing", "Database Systems",
    "Object Oriented Programming", "Software Engineering", "Information Policy"
  ];

  const bachelorsCourses = [
    "Database Management Systems", "Human Computer Interaction", "Artificial Intelligence",
    "Mobile Application Development", "Cybersecurity", "Distributed Systems", "Software Engineering",
    "Internet Programming", "Operating Systems", "Machine Learning", "Programming in Java",
    "Computer Architecture", "Data Structures & Algorithms", "Cryptography & Network Security",
    "Object-Oriented Programming", "Programming in Python", "Compiler Design", "Programming in C",
    "Objects & Design", "Cloud Computing", "Programming & Development", "Computer Networks",
    "Software Project Management", "Object Oriented Analysis", "Theory of Computations"
  ];

  return (
    <section id="education" className="section container">
      <h2 className="title">Education</h2>
      <div className="glass" style={{ padding: '3.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.4rem', fontWeight: 700 }}>Master of Science in Computer Science</h3>
            <p className="gradient-text" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>George Washington University, Washington DC</p>
            <p style={{ display: 'inline-block', background: 'var(--accent-gradient)', padding: '0.2rem 1rem', borderRadius: '15px', color: '#fff', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1rem' }}>
              CGPA: 3.7 / 4.0
            </p>
            <div>
              <p style={{ fontWeight: 600, color: 'var(--text-color)', marginBottom: '0.5rem' }}>Coursework:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {mastersCourses.map(course => (
                  <span key={course} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '1.1rem' }}>May 2026</p>
        </div>

        <div style={{ marginTop: '3.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '3.5rem', borderTop: '1px solid var(--glass-border)', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.4rem', fontWeight: 700 }}>Bachelor of Engineering, Computer Science</h3>
            <p className="gradient-text" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Sri Sairam Engineering College, India</p>
            <p style={{ display: 'inline-block', background: 'var(--accent-gradient)', padding: '0.2rem 1rem', borderRadius: '15px', color: '#fff', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1rem' }}>
              CGPA: 8.53 / 10.0
            </p>
            <div>
              <p style={{ fontWeight: 600, color: 'var(--text-color)', marginBottom: '0.5rem' }}>Coursework:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {bachelorsCourses.map(course => (
                  <span key={course} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '1.1rem' }}>May 2021</p>
        </div>
      </div>
      
      <h2 className="title" style={{ marginTop: '7rem', marginBottom: '3rem' }}>Technical Arsenal</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {skills.map((skillGroup, index) => (
          <div key={index} className="glass skill-category" style={{ padding: '2.5rem' }}>
            <h3 className="gradient-text" style={{ fontSize: '1.4rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
              {skillGroup.category}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {skillGroup.items.map(item => (
                 <span key={item.name} className="skill-pill" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-color)', border: '1px solid var(--glass-border)' }}>
                   <span style={{ color: 'var(--accent-color)', fontSize: '1.1rem', display: 'flex' }}>{item.icon}</span>
                   {item.name}
                 </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
