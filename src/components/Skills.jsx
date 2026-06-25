import React from 'react';

const SKILLS = [
  { icon:"🐍", cat:"Programming",  items:["Python","SQL","Java"] },
  { icon:"🤖", cat:"ML & AI",      items:["Scikit-Learn","TensorFlow","PyTorch","MLflow"] },
  { icon:"⚡", cat:"Frameworks",   items:["Flask","Streamlit","Pandas","NumPy","Flutter","Express.js","React"] },
  { icon:"🗄️", cat:"Databases",    items:["MySQL","SQLite","Firebase"] },
  { icon:"📊", cat:"Data Vizualization",items:["Matplotlib","Tableau","Data Studio","Plotly"] },
  { icon:"✨", cat:"Gen AI Tools", items:["Hugging Face","Groq API","ChatGPT","Claude"] },
  { icon:"🛠️", cat:"Dev Tools",    items:["GitHub","VS Code","Jupyter","Google Colab"] },
  { icon:"🧠", cat:"Soft Skills",  items:["Problem Solving","Communication","Teamwork","Adaptability"] },
];

export default function Skills() {
  return (
    <section id="skills" className="sec sec-alt">
      <div className="sec-inner">
        <div className="sec-head">
          <p className="sec-eyebrow">// what I work with</p>
          <h2 className="sec-title">Skills & Tools</h2>
          <div className="sec-line" />
        </div>
        <div className="skills-grid">
          {SKILLS.map(s => (
            <div className="skill-card" key={s.cat}>
              <div className="skill-card-top">
                <span className="skill-icon">{s.icon}</span>
                <span className="skill-cat">{s.cat}</span>
              </div>
              <div className="pill-wrap">
                {s.items.map(i => <span className="pill" key={i}>{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}