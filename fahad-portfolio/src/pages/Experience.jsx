import React from 'react';
import { experience } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  return (
    <div className="page-wrapper">
      <div className="container section">
        <p className="section-subheading">// professional work</p>
        <h1 className="section-heading">Experience</h1>
        <div className="section-divider" />

        <div className="exp__list">
          {experience.map((exp, i) => (
            <div key={i} className="card exp__card animate-in" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="exp__header">
                <div className="exp__icon">{exp.icon}</div>
                <div className="exp__meta">
                  <p className="exp__type">{exp.type} · {exp.period}</p>
                  <h2 className="exp__role">{exp.role}</h2>
                  <p className="exp__company">{exp.company}</p>
                </div>
              </div>
              <p className="exp__description">{exp.description}</p>
              <div className="exp__tech">
                {exp.tech.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
