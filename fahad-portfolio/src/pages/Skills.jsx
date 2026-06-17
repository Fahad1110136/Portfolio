import React, { useState } from 'react';
import { skills } from '../data/portfolioData';
import './Skills.css';

const categoryMeta = {
  'Languages':        { icon: '⌨️', color: '#22c55e' },
  'Web Development':  { icon: '🌐', color: '#2dd4bf' },
  'Technical':     { icon: '⚙️', color: '#f59e0b' },
  'Data & AI':        { icon: '🤖', color: '#6366f1' },
  'Tools & Platforms':{ icon: '🛠️', color: '#ef4444' },
};

const Skills = () => {
  const categories = Object.keys(skills);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const activeSkills = skills[activeCategory];
  const meta = categoryMeta[activeCategory] || { icon: '💡', color: '#22c55e' };

  return (
    <div className="page-wrapper">
      <div className="container section">
        <p className="section-subheading">// technical arsenal</p>
        <h1 className="section-heading">Skills</h1>
        <div className="section-divider" />

        <div className="skills__tabs">
          {categories.map((cat) => {
            const m = categoryMeta[cat] || { icon: '💡', color: '#22c55e' };
            return (
              <button
                key={cat}
                className={`skills__tab ${activeCategory === cat ? 'skills__tab--active' : ''}`}
                style={activeCategory === cat ? { '--tab-color': m.color } : {}}
                onClick={() => setActiveCategory(cat)}
              >
                <span className="skills__tab-icon">{m.icon}</span>
                <span className="skills__tab-label">{cat}</span>
              </button>
            );
          })}
        </div>

        <div className="skills__panel card">
          {/* Panel header */}
          <div className="skills__panel-header">
            <span className="skills__panel-icon" style={{ '--panel-color': meta.color }}>
              {meta.icon}
            </span>
            <div>
              <p className="skills__panel-subtext">// category</p>
              <h2 className="skills__panel-title" style={{ color: meta.color }}>
                {activeCategory}
              </h2>
            </div>
            <span className="skills__panel-count">
              {activeSkills.length} <span>skills</span>
            </span>
          </div>

          <div className="skills__chips">
            {activeSkills.map((skill, i) => (
              <div
                key={skill}
                className="skills__chip"
                style={{
                  '--chip-color': meta.color,
                  animationDelay: `${i * 0.05}s`,
                }}
              >
                <span className="skills__chip-dot" />
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="skills__summary">
          {categories.map((cat) => {
            const m = categoryMeta[cat] || { icon: '💡', color: '#22c55e' };
            return (
              <div
                key={cat}
                className="skills__summary-item"
                onClick={() => setActiveCategory(cat)}
                style={{ '--sum-color': m.color }}
              >
                <span className="skills__summary-num" style={{ color: m.color }}>
                  {skills[cat].length}
                </span>
                <span className="skills__summary-label">{cat}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
