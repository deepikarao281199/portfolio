import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="section container">
      <h2 className="title">Professional Experience</h2>

      <div className="glass" style={{ padding: '3rem', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Software Developer</h3>
            <p style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '1.1rem' }}>Zoho Corporation, India</p>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>May 2021 - Dec 2024</p>
        </div>
        <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          <li style={{ marginBottom: '0.75rem' }}>Designed and developed backend services within the patch management module of ManageEngine Endpoint Central using Java, J2EE, Spring Boot, and REST APIs, securely orchestrating deployments across 25M+ endpoints.</li>
          <li style={{ marginBottom: '0.75rem' }}>Engineered a Java and SQL-driven self-service deployment portal that streamlined multi-environment patch releases, minimized manual configuration, and enhanced deployment speed and stability.</li>
          <li style={{ marginBottom: '0.75rem' }}>Automated Microsoft Office patch lifecycle workflows, reducing background publishing time from 70 to 25 minutes and accelerating update rollout across 10K+ devices.</li>
          <li style={{ marginBottom: '0.75rem' }}>Developed and optimized complex SQL queries using MySQL and PostgreSQL for Test & Approve, Manual, and APD modules, reducing API latency by 390ms.</li>
          <li style={{ marginBottom: '0.75rem' }}>Spearheaded UI/UX revamps for multiple features in the module, implementing responsive interfaces using React.js, Angular and JavaScript.</li>
          <li style={{ marginBottom: '0.75rem' }}>Led production incident triage using Git, log analysis, and JVM debugging tools, resolving 95+ critical issues annually while sustaining 99.9% SLA adherence.</li>
        </ul>
      </div>

      <div className="glass" style={{ padding: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Software Developer Intern</h3>
            <p style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '1.1rem' }}>Zoho Corporation, India</p>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Mar 2021 - Apr 2021</p>
        </div>
        <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          <li style={{ marginBottom: '0.75rem' }}>Developed a lightweight system monitoring tool using Java, tracking CPU, Disk, and Network metrics across 80+ internal machines.</li>
          <li style={{ marginBottom: '0.75rem' }}>Built SLA breach alert automation using Deluge Script and event triggers, enabling proactive notifications for 200+ service tickets monthly.</li>
          <li style={{ marginBottom: '0.75rem' }}>Led testing and deployment of monitoring workflows using Git and CI validation scripts, reducing rollback incidents by 30%.</li>
        </ul>
      </div>
    </section>
  );
}
