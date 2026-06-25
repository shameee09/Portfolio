import React, { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [typed, setTyped] = useState('');
  const roles = ["AI Engineer", "Data Scientist", "ML Developer", "Problem Solver"];
  const roleIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      const current = roles[roleIdx.current];
      if (!deleting.current) {
        const next = current.slice(0, charIdx.current + 1);
        setTyped(next);
        charIdx.current++;
        if (charIdx.current === current.length) {
          deleting.current = true;
          timerRef.current = setTimeout(tick, 1600);
          return;
        }
      } else {
        const next = current.slice(0, charIdx.current - 1);
        setTyped(next);
        charIdx.current--;
        if (charIdx.current === 0) {
          deleting.current = false;
          roleIdx.current = (roleIdx.current + 1) % roles.length;
        }
      }
      timerRef.current = setTimeout(tick, deleting.current ? 60 : 100);
    };
    timerRef.current = setTimeout(tick, 600);
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <section id="hero">
      <div className="hero-grid" />
      <div className="hero-inner">
        <div className="hero-tag">Available for full-time roles</div>
         <h1 className="hero-name">Shameem <span className="highlight">Banu</span></h1>
        <p className="hero-role">
          // <span className="typed">{typed}</span>
          <span style={{ color: 'var(--cyan)' }}>_</span>
        </p>
        <p className="hero-desc">
          Aspiring Data Science & AI Engineer with hands-on experience in Machine Learning,Data visualization,Statistics
          intelligent app development, and deploying real-world AI solutions.
          
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-glow">View Projects</a>
          <a href="https://github.com/shameee09" target="_blank" rel="noreferrer" className="btn-ghost">GitHub</a>
          <a href="https://www.linkedin.com/in/shameem--banu" target="_blank" rel="noreferrer" className="btn-ghost">LinkedIn</a>
        </div>
        <div className="stats-row">
          {[["3+","Projects Built"],["1","Internship"],["10+","Technologies"],["2026","Graduating"]].map(([n,l]) => (
            <div className="stat" key={l}>
              <div className="stat-num"><span>{n}</span></div>
              <div className="stat-lbl">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}