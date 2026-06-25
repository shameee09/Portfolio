import React from 'react';

function Experience() {
  return (
    <section id="experience" className="sec">
      <div className="sec-inner">
        <div className="sec-head">
          <p className="sec-eyebrow">// work history</p>
          <h2 className="sec-title">Experience</h2>
          <div className="sec-line" />
        </div>

        {/* Internship */}
        <div className="exp-card" style={{marginBottom:'1.5rem'}}>
          <div className="exp-header">
            <div>
              <div className="exp-role">Software Developer— Intelligent Fashion Recommendation App</div>
              <div className="exp-company">mcAmdosis Tech Solution Pvt. Ltd.</div>
            </div>
            <span className="exp-badge">Jul – Nov 2025</span>
          </div>
          <ul className="exp-list">
            <li>Built intelligent fashion app personalizing outfit recommendations based on user mood and horoscope.</li>
            <li>Integrated Hugging Face API for mood detection and Aztro API for horoscope-based styling logic.</li>
            <li>Implemented e-commerce features, performed functional testing, and prepared full documentation.</li>
          </ul>
          <div className="pill-wrap">
            {["Flutter","Firebase","Hugging Face API","Aztro API"].map(t => <Pill key={t} text={t} />)}
          </div>
        </div>

        {/* Virtual Experience */}
        <div className="exp-card">
          <div className="exp-header">
            <div>
              <div className="exp-role">Data Analytics Virtual Experience</div>
              <div className="exp-company">Deloitte Australia — via Forage</div>
            </div>
            <span className="exp-badge">June 2026</span>
          </div>
          <ul className="exp-list">
            <li>Analyzed telemetry data using Tableau and built interactive dashboards to visualize operational insights.</li>
            <li>Identified operational downtime trends and generated actionable business insights from raw data.</li>
            <li>Applied forensic data analysis techniques to investigate gender pay equality across business units.</li>
          </ul>
          <div style={{marginBottom:'0.8rem'}}>
            <p style={{fontSize:'0.78rem',color:'var(--muted)',marginBottom:'0.5rem',fontFamily:"'Fira Code',monospace",textTransform:'uppercase',letterSpacing:'0.08em'}}>Skills Gained</p>
            <div className="pill-wrap">
              {["Data Analysis","Tableau","Dashboard Development","Forensic Data Investigation","Business Insights"].map(t => <Pill key={t} text={t} />)}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}