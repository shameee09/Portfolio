import React from 'react';

const PROJECTS = [
  {
    tag:"ML · Flask · Live", live:true,
    name:"Telecom Customer Churn Prediction",
    desc:"End-to-end ML web app predicting telecom customer churn with AI-driven retention strategies based on risk classification.",
    stack:["Python","Flask","Scikit-learn","SQLite","Groq API"],
    link:"https://telecom-churn-prediction-system.onrender.com/login",
  },
  {
    tag:"Healthcare · Streamlit · Live", live:true,
    name:"Hospital Patient Classification",
    desc:"ML solution classifying hospital patients via anomaly detection and feature analysis to improve patient categorization.",
    stack:["Python","Pandas","NumPy","Scikit-Learn","Streamlit"],
    link:"https://hospital-patient-classification-6exvrmfbjqordnfvyiy7us.streamlit.app/",
  },
  {
    tag:"Mobile · Flutter · Firebase", live:false,
    name:"Campus Polling App",
    desc:"Cross-platform mobile polling app for university communities with real-time vote tallying using Firebase backend.",
    stack:["Flutter","Firebase","Dart"],
    link:"https://github.com/shameee09",
  },
  {
    tag:"React · Full Stack", live:false,
    name:"To-Do List App",
    desc:"Full-featured task management app with add, edit, delete, and mark-complete functionality. Clean UI with persistent state management.",
    stack:["React","JavaScript","CSS"],
    link:"https://github.com/shameee09",
  },
  {
    tag:"Mobile · Gen AI", live:false,
    name:"Intelligent Fashion Recommendation App",
    desc:"Flutter app giving outfit suggestions based on user mood (Hugging Face) and horoscope (Aztro API) with e-commerce features.",
    stack:["Flutter","Firebase","Hugging Face API","Aztro API"],
    link:"https://github.com/shameee09",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="sec sec-alt">
      <div className="sec-inner">
        <div className="sec-head">
          <p className="sec-eyebrow">// selected work</p>
          <h2 className="sec-title">Projects</h2>
          <div className="sec-line" />
        </div>
        <div className="proj-grid">
          {PROJECTS.map(p => (
            <div className="proj-card" key={p.name}>
              <div className="proj-tag-row">
                <span className="proj-tag">{p.tag}</span>
                {p.live && <div className="proj-live" title="Live" />}
              </div>
              <div className="proj-name">{p.name}</div>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-stack">
                {p.stack.map(t => <span className="pill" key={t}>{t}</span>)}
              </div>
              <a className="proj-link" href={p.link} target="_blank" rel="noreferrer">
                {p.live ? "→ View Live Project" : "→ View on GitHub"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}