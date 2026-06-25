import React from 'react';

const EDUCATION = [
  {
    label:"University",
    degree:"M.Sc Information Technology (Integrated)",
    school:"College of Engineering, Guindy — Anna University",
    year:"2022 – Present",
  },
  {
    label:"Professional Training",
    degree:"Applied AI, Generative AI & Data Science",
    school:"Hope Artificial Intelligence Pvt. Ltd.",
    year:"2026 – Present",
  },
];

function Education() {
  return (
    <section id="education" className="sec">
      <div className="sec-inner">
        <div className="sec-head">
          <p className="sec-eyebrow">// academic background</p>
          <h2 className="sec-title">Education & Training</h2>
          <div className="sec-line" />
        </div>
        <div className="edu-timeline">
          {EDUCATION.map(e => (
            <div className="edu-card" key={e.degree}>
              <div className="edu-year">{e.year}</div>
              <div>
                <div className="edu-label">{e.label}</div>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-school" style={{marginBottom: e.points.length ? '0.8rem' : 0}}>{e.school}</div>
                {e.points.length > 0 && (
                  <ul style={{listStyle:'none',marginTop:'0.5rem'}}>
                    {e.points.map((p,i) => (
                      <li key={i} style={{display:'flex',gap:'0.6rem',color:'#94a3b8',fontSize:'0.85rem',lineHeight:1.7,marginBottom:'0.2rem'}}>
                        <span style={{color:'var(--cyan)',flexShrink:0}}>▸</span>{p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}

          {/* Certification */}
          <div className="act-card">
            <h4 style={{color:'var(--cyan)',marginBottom:'1rem',fontSize:'0.75rem',letterSpacing:'0.12em',textTransform:'uppercase',fontFamily:"'Fira Code',monospace"}}>🏆 Certifications</h4>
            <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
              <div>
                <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:'0.5rem',marginBottom:'0.4rem'}}>
                  <span style={{fontWeight:700,color:'var(--white)',fontSize:'0.92rem'}}>Deloitte Australia – Data Analytics Job Simulation</span>
                  <span style={{fontFamily:"'Fira Code',monospace",fontSize:'0.72rem',color:'var(--green)',background:'rgba(16,185,129,0.1)',border:'1px solid rgba(16,185,129,0.3)',padding:'0.15rem 0.6rem',borderRadius:'4px'}}>June 2026</span>
                </div>
                <div style={{fontSize:'0.8rem',color:'var(--purple-lt)',marginBottom:'0.5rem',fontFamily:"'Fira Code',monospace"}}>Forage</div>
                <ul style={{listStyle:'none'}}>
                  {[
                    "Analyzed telemetry data using Tableau and built interactive dashboards.",
                    "Identified operational downtime trends and generated business insights.",
                    "Applied forensic data analysis to investigate gender pay equality.",
                  ].map((p,i) => (
                    <li key={i} style={{display:'flex',gap:'0.6rem',color:'#94a3b8',fontSize:'0.83rem',lineHeight:1.7}}>
                      <span style={{color:'var(--accent, var(--cyan))',flexShrink:0}}>▸</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div className="act-card">
            <h4>Leadership & Activities</h4>
            <div className="act-item">Math Computing Society (MCS) — Office Bearer, Techops 2024</div>
            <div className="act-item">National Service Scheme (NSS) — Volunteer</div>
          </div>
        </div>
      </div>
    </section>
  );
}