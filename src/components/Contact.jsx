import React from 'react';

const LINKS = [
  { icon:"📧", lbl:"Email",    val:"shameembanuinfotech@gmail.com", href:"mailto:shameembanuinfotech@gmail.com" },
  { icon:"💼", lbl:"LinkedIn", val:"linkedin.com/in/shameem--banu",  href:"https://www.linkedin.com/in/shameem--banu" },
  { icon:"🐙", lbl:"GitHub",   val:"github.com/shameee09",           href:"https://github.com/shameee09" },
  { icon:"📍", lbl:"Location", val:"Villupuram, Tamil Nadu, India",   href:null },
];

export default function Contact() {
  return (
    <section id="contact" className="sec sec-alt">
      <div className="sec-inner">
        <div className="contact-grid">
          <div>
            <p className="sec-eyebrow">// let's connect</p>
            <h2 className="sec-title">Contact</h2>
            <div className="sec-line" style={{ marginBottom:'1.8rem' }} />
            <p className="contact-desc">
              I'm actively looking for full-time roles in AI engineering and data science.
              Open to discussing opportunities, collaborations, or just talking tech.
            </p>
            <a href="mailto:shameembanuinfotech@gmail.com" className="btn-glow">
              Send Email
            </a>
          </div>
          <div className="contact-items">
            {LINKS.map(c => (
              c.href
                ? <a className="contact-row" href={c.href} target="_blank" rel="noreferrer" key={c.lbl}>
                    <div className="c-icon">{c.icon}</div>
                    <div><div className="c-lbl">{c.lbl}</div><div className="c-val">{c.val}</div></div>
                  </a>
                : <div className="contact-row" key={c.lbl} style={{ cursor:'default' }}>
                    <div className="c-icon">{c.icon}</div>
                    <div><div className="c-lbl">{c.lbl}</div><div className="c-val">{c.val}</div></div>
                  </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}