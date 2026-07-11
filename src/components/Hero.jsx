import React, { useState, useEffect, useRef } from 'react';
import './styles/global.css';

const SKILLS = [
  { icon:"🐍", cat:"Programming",  items:["Python","SQL","Java"] },
  { icon:"🤖", cat:"ML & AI",      items:["Scikit-Learn","TensorFlow","PyTorch","MLflow"] },
  { icon:"⚡", cat:"Frameworks",   items:["Flask","Streamlit","Pandas","NumPy","Flutter","Express.js","React","Node.js"] },
  { icon:"🌐", cat:"MERN Stack",   items:["MongoDB","Express.js","React","Node.js"] },
  { icon:"🗄️", cat:"Databases",    items:["MySQL","SQLite","Firebase","MongoDB"] },
  { icon:"📊", cat:"Data Viz",     items:["Matplotlib","Tableau","Data Studio","Plotly"] },
  { icon:"✨", cat:"Gen AI Tools", items:["Hugging Face","Groq API","ChatGPT","Claude"] },
  { icon:"🚀", cat:"Deployment",   items:["Render","Netlify","Streamlit Cloud"] },
  { icon:"🛠️", cat:"Dev Tools",    items:["GitHub","VS Code","Jupyter","Google Colab","Dart"] },
  { icon:"🧠", cat:"Soft Skills",  items:["Problem Solving","Communication","Teamwork","Adaptability"] },
];

const PROJECTS = [
  { tag:"ML · Flask · Live", live:true, name:"Telecom Customer Churn Prediction", desc:"End-to-end ML web app predicting telecom customer churn with AI-driven retention strategies based on risk classification.", stack:["Python","Flask","Scikit-learn","SQLite","Groq API"], link:"https://telecom-churn-prediction-system.onrender.com/login" },
  { tag:"Healthcare · Streamlit · Live", live:true, name:"Hospital Patient Classification", desc:"ML solution classifying hospital patients via anomaly detection and feature analysis to improve patient categorization.", stack:["Python","Pandas","NumPy","Scikit-Learn","Streamlit"], link:"https://hospital-patient-classification-6exvrmfbjqordnfvyiy7us.streamlit.app/" },
  { tag:"Mobile · Flutter · Firebase", live:false, name:"Campus Polling App", desc:"Cross-platform mobile polling app for university communities with real-time vote tallying using Firebase backend.", stack:["Flutter","Firebase","Dart"], link:"https://github.com/shameee09" },
  { tag:"React · Full Stack", live:false, name:"To-Do List App", desc:"Full-featured task management app with add, edit, delete and mark-complete functionality with persistent state management.", stack:["React","JavaScript","CSS"], link:"https://github.com/shameee09" },
  { tag:"Mobile · Gen AI", live:false, name:"Intelligent Fashion Recommendation App", desc:"Flutter app giving outfit suggestions based on user mood (Hugging Face) and horoscope (Aztro API) with e-commerce features.", stack:["Flutter","Firebase","Hugging Face API","Aztro API"], link:"https://github.com/shameee09" },
];

const EDUCATION = [
  { label:"University", degree:"M.Sc Information Technology (Integrated)", school:"College of Engineering, Guindy — Anna University", year:"2022 – Present", points:[] },
  { label:"Professional Training", degree:"Master Program in Applied AI, Generative AI & Data Science", school:"Hope Artificial Intelligence Pvt. Ltd.", year:"2026 – Present", points:["Learning ML, Deep Learning, NLP, Time Series Analysis & Generative AI.","Hands-on projects in AI, Data Science & Machine Learning.","Practical experience in Python, Scikit-Learn & Data Visualization.","Exploring Agentic AI, AI APIs & Retrieval-Augmented Generation (RAG)."] },
];

const CONTACTS = [
  { icon:"📧", lbl:"Email",    val:"shameembanuinfotech@gmail.com", href:"mailto:shameembanuinfotech@gmail.com" },
  { icon:"💼", lbl:"LinkedIn", val:"linkedin.com/in/shameem--banu",  href:"https://www.linkedin.com/in/shameem--banu" },
  { icon:"🐙", lbl:"GitHub",   val:"github.com/shameee09",           href:"https://github.com/shameee09" },
  { icon:"📍", lbl:"Location", val:"Villupuram, Tamil Nadu, India",   href:null },
];

function FadeIn({ children, delay=0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`;
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity='1'; el.style.transform='translateY(0)'; }
    }, { threshold:0.1 });
    ob.observe(el);
    return () => ob.disconnect();
  }, [delay]);
  return <div ref={ref}>{children}</div>;
}

function Pill({ text }) {
  return <span className="pill">{text}</span>;
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["About","Skills","Experience","Projects","Education","Contact"];
  return (
    <nav>
      <div className="nav-inner">
        <div className="nav-brand">&lt;<span>SB</span> /&gt;</div>
        <ul className="nav-links">
          {links.map(n => <li key={n}><a href={`#${n.toLowerCase()}`}>{n}</a></li>)}
        </ul>
        <button onClick={() => setOpen(!open)} style={{display:'none',background:'none',border:'none',cursor:'pointer',flexDirection:'column',gap:5,padding:4}} className="hamburger">
          <span style={{display:'block',width:22,height:2,background:'var(--text)',transition:'all .3s',transform:open?'rotate(45deg) translate(5px,5px)':'none'}}/>
          <span style={{display:'block',width:22,height:2,background:'var(--text)',transition:'all .3s',opacity:open?0:1}}/>
          <span style={{display:'block',width:22,height:2,background:'var(--text)',transition:'all .3s',transform:open?'rotate(-45deg) translate(5px,-5px)':'none'}}/>
        </button>
      </div>
      {open && (
        <div style={{background:'rgba(8,12,20,0.98)',borderTop:'1px solid var(--border)',display:'flex',flexDirection:'column',padding:'1rem 2rem',gap:'1rem'}}>
          {links.map(n => <a key={n} href={`#${n.toLowerCase()}`} onClick={()=>setOpen(false)} style={{color:'var(--text)',textDecoration:'none',fontSize:'0.95rem',fontWeight:500}}>{n}</a>)}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const [typed, setTyped] = useState('');
  const roles = ["AI Engineer","Data Scientist","ML Developer","Problem Solver"];
  const ri = useRef(0), ci = useRef(0), del = useRef(false);
  useEffect(() => {
    let t;
    const tick = () => {
      const cur = roles[ri.current];
      if (!del.current) {
        setTyped(cur.slice(0, ci.current+1));
        ci.current++;
        if (ci.current === cur.length) { del.current=true; t=setTimeout(tick,1600); return; }
      } else {
        setTyped(cur.slice(0, ci.current-1));
        ci.current--;
        if (ci.current===0) { del.current=false; ri.current=(ri.current+1)%roles.length; }
      }
      t = setTimeout(tick, del.current?60:100);
    };
    t = setTimeout(tick, 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="about">
      <div className="hero-grid"/>
      <div className="hero-inner">
        <div style={{display:'flex',alignItems:'center',gap:'2.5rem',flexWrap:'wrap',marginBottom:'1.5rem'}}>
          <div style={{width:130,height:130,borderRadius:'50%',flexShrink:0,border:'3px solid transparent',background:'linear-gradient(var(--bg),var(--bg)) padding-box, linear-gradient(135deg,var(--purple),var(--cyan)) border-box',overflow:'hidden',boxShadow:'0 0 30px rgba(124,58,237,0.3)'}}>
            <img src="/Shameem Banu.jpeg" alt="Shameem Banu" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
          </div>
          <div>
            <div className="hero-tag">Available for full-time roles</div>
            <h1 className="hero-name">Shameem <span className="highlight">Banu</span></h1>
            <p className="hero-role">// <span className="typed">{typed}</span><span style={{color:'var(--cyan)'}}>_</span></p>
          </div>
        </div>
        <p className="hero-desc">Aspiring Data Science & AI Engineer with hands-on experience in Machine Learning, intelligent app development, and deploying real-world AI solutions. Based in Tamil Nadu, India.</p>
        <div className="hero-btns">
          <a href="#projects" className="btn-glow">View Projects</a>
          <a href="/Shameem_Banu_2022242015 Resume_new_pdf__3_.pdf" download className="btn-glow" style={{background:'linear-gradient(135deg,#10b981,#06b6d4)'}}>⬇ Download Resume</a>
          <a href="https://github.com/shameee09" target="_blank" rel="noreferrer" className="btn-ghost">GitHub</a>
          <a href="https://www.linkedin.com/in/shameem--banu" target="_blank" rel="noreferrer" className="btn-ghost">LinkedIn</a>
        </div>
        <div className="stats-row">
          {[["5+","Projects Built"],["1","Internship"],["10+","Technologies"],["2026","Graduating"]].map(([n,l]) => (
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

function Skills() {
  return (
    <section id="skills" className="sec sec-alt">
      <div className="sec-inner">
        <div className="sec-head">
          <p className="sec-eyebrow">// what I work with</p>
          <h2 className="sec-title">Skills & Tools</h2>
          <div className="sec-line"/>
        </div>
        <div className="skills-grid">
          {SKILLS.map((s,i) => (
            <FadeIn key={s.cat} delay={i*0.07}>
              <div className="skill-card">
                <div className="skill-card-top">
                  <span className="skill-icon">{s.icon}</span>
                  <span className="skill-cat">{s.cat}</span>
                </div>
                <div className="pill-wrap">{s.items.map(item => <Pill key={item} text={item}/>)}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="sec">
      <div className="sec-inner">
        <div className="sec-head">
          <p className="sec-eyebrow">// work history</p>
          <h2 className="sec-title">Experience</h2>
          <div className="sec-line"/>
        </div>
        <FadeIn delay={0.1}>
          <div className="exp-card" style={{marginBottom:'1.5rem'}}>
            <div className="exp-header">
              <div>
                <div className="exp-role">Software Developer Intern — Intelligent Fashion Recommendation App</div>
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
              {["Flutter","Firebase","Hugging Face API","Aztro API"].map(t => <Pill key={t} text={t}/>)}
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="exp-card">
            <div className="exp-header">
              <div>
                <div className="exp-role">Data Analytics Virtual Job Simulation</div>
                <div className="exp-company">Deloitte Australia — via Forage</div>
              </div>
              <span className="exp-badge">June 2026</span>
            </div>
            <p style={{fontSize:'0.85rem',color:'#94a3b8',marginBottom:'0.8rem',lineHeight:1.7}}>Completed Deloitte Australia's Data Analytics Job Simulation offered through Forage. Worked on:</p>
            <ul className="exp-list">
              <li>Analyzed telemetry data using Tableau and built interactive dashboards to visualize operational insights.</li>
              <li>Identified operational downtime trends and generated actionable business insights from raw data.</li>
              <li>Applied forensic data analysis techniques to investigate gender pay equality across business units.</li>
            </ul>
            <div>
              <p style={{fontSize:'0.72rem',color:'var(--muted)',marginBottom:'0.5rem',fontFamily:"'Fira Code',monospace",textTransform:'uppercase',letterSpacing:'0.08em'}}>Skills Gained</p>
              <div className="pill-wrap">
                {["Data Analysis","Tableau","Dashboard Development","Forensic Data Investigation","Business Insights"].map(t => <Pill key={t} text={t}/>)}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="sec sec-alt">
      <div className="sec-inner">
        <div className="sec-head">
          <p className="sec-eyebrow">// selected work</p>
          <h2 className="sec-title">Projects</h2>
          <div className="sec-line"/>
        </div>
        <div className="proj-grid">
          {PROJECTS.map((p,i) => (
            <FadeIn key={p.name} delay={i*0.1}>
              <div className="proj-card">
                <div className="proj-tag-row">
                  <span className="proj-tag">{p.tag}</span>
                  {p.live && <div className="proj-live"/>}
                </div>
                <div className="proj-name">{p.name}</div>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-stack">{p.stack.map(t => <Pill key={t} text={t}/>)}</div>
                <a className="proj-link" href={p.link} target="_blank" rel="noreferrer">
                  {p.live ? "→ View Live Project" : "→ View on GitHub"}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="sec">
      <div className="sec-inner">
        <div className="sec-head">
          <p className="sec-eyebrow">// academic background</p>
          <h2 className="sec-title">Education & Training</h2>
          <div className="sec-line"/>
        </div>
        <div className="edu-timeline">
          {EDUCATION.map((e,i) => (
            <FadeIn key={e.degree} delay={i*0.1}>
              <div className="edu-card">
                <div className="edu-year">{e.year}</div>
                <div>
                  <div className="edu-label">{e.label}</div>
                  <div className="edu-degree">{e.degree}</div>
                  <div className="edu-school" style={{marginBottom:e.points.length?'0.8rem':0}}>{e.school}</div>
                  {e.points.length > 0 && (
                    <ul style={{listStyle:'none',marginTop:'0.5rem'}}>
                      {e.points.map((p,j) => (
                        <li key={j} style={{display:'flex',gap:'0.6rem',color:'#94a3b8',fontSize:'0.85rem',lineHeight:1.7,marginBottom:'0.2rem'}}>
                          <span style={{color:'var(--cyan)',flexShrink:0}}>▸</span>{p}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
          <FadeIn delay={0.2}>
            <div className="act-card">
              <h4 style={{color:'var(--cyan)',marginBottom:'1rem',fontSize:'0.75rem',letterSpacing:'0.12em',textTransform:'uppercase',fontFamily:"'Fira Code',monospace"}}>🏆 Certifications</h4>
              <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:'0.5rem',marginBottom:'0.3rem'}}>
                <span style={{fontWeight:700,color:'var(--white)',fontSize:'0.92rem'}}>Deloitte Australia – Data Analytics Job Simulation</span>
                <span style={{fontFamily:"'Fira Code',monospace",fontSize:'0.72rem',color:'var(--green)',background:'rgba(16,185,129,0.1)',border:'1px solid rgba(16,185,129,0.3)',padding:'0.15rem 0.6rem',borderRadius:'4px'}}>June 2026</span>
              </div>
              <div style={{fontSize:'0.8rem',color:'var(--purple-lt)',marginBottom:'0.6rem',fontFamily:"'Fira Code',monospace"}}>Forage</div>
              <ul style={{listStyle:'none'}}>
                {["Analyzed telemetry data using Tableau and built interactive dashboards.","Identified operational downtime trends and generated business insights.","Applied forensic data analysis to investigate gender pay equality."].map((p,i) => (
                  <li key={i} style={{display:'flex',gap:'0.6rem',color:'#94a3b8',fontSize:'0.83rem',lineHeight:1.7,marginBottom:'0.15rem'}}>
                    <span style={{color:'var(--cyan)',flexShrink:0}}>▸</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="act-card" style={{marginTop:'1.5rem'}}>
              <h4>Leadership & Activities</h4>
              <div className="act-item">Math Computing Society (MCS) — Office Bearer, Techops 2024</div>
              <div className="act-item">National Service Scheme (NSS) — Volunteer</div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="sec sec-alt">
      <div className="sec-inner">
        <div className="contact-grid">
          <FadeIn delay={0.1}>
            <div>
              <p className="sec-eyebrow">// let's connect</p>
              <h2 className="sec-title">Contact</h2>
              <div className="sec-line" style={{marginBottom:'1.8rem'}}/>
              <p className="contact-desc">I'm actively looking for full-time roles in AI engineering and data science. Open to opportunities, collaborations, or just talking tech!</p>
              <a href="mailto:shameembanuinfotech@gmail.com" className="btn-glow">Send Email</a>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="contact-items">
              {CONTACTS.map(c => (
                c.href
                  ? <a className="contact-row" href={c.href} target="_blank" rel="noreferrer" key={c.lbl}>
                      <div className="c-icon">{c.icon}</div>
                      <div><div className="c-lbl">{c.lbl}</div><div className="c-val">{c.val}</div></div>
                    </a>
                  : <div className="contact-row" key={c.lbl} style={{cursor:'default'}}>
                      <div className="c-icon">{c.icon}</div>
                      <div><div className="c-lbl">{c.lbl}</div><div className="c-val">{c.val}</div></div>
                    </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>&lt; built by <span>Shameem Banu</span> · Chennai 2026 /&gt;</footer>
  );
}

export default function App() {
  return (
    <div style={{background:'#080c14',minHeight:'100vh'}}>
      <div className="blob blob1"/>
      <div className="blob blob2"/>
      <Nav/>
      <Hero/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}