import React from 'react';

export default function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <div className="nav-brand">&lt;<span></span> /&gt;</div>
        <ul className="nav-links">
          {["About","Skills","Experience","Projects","Education","Contact"].map(n => (
            <li key={n}><a href={`#${n.toLowerCase()}`}>{n}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}