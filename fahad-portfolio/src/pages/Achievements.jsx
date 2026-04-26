import React from 'react';
import { achievements } from '../data/portfolioData';
import './Achievements.css';

const Achievements = () => {
  return (
    <div className="page-wrapper">
      <div className="container section">
        <p className="section-subheading">// milestones</p>
        <h1 className="section-heading">Achievements</h1>
        <div className="section-divider" />

        <div className="ach__grid">
          {achievements.map((ach, i) => (
            <div
              key={i}
              className="card ach__card"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="ach__icon-wrap">
                <span className="ach__icon">{ach.icon}</span>
                <div className="ach__icon-glow" />
              </div>
              <div className="ach__body">
                <h2 className="ach__title">{ach.title}</h2>
                <p className="ach__detail">{ach.detail}</p>
              </div>
              <div className="ach__accent-line" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
