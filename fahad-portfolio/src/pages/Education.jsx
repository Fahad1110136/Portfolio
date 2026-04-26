import React from 'react';
import { education } from '../data/portfolioData';
import './Education.css';

const Education = () => {
  return (
    <div className="page-wrapper">
      <div className="container section">
        <p className="section-subheading">// academic journey</p>
        <h1 className="section-heading">Education</h1>
        <div className="section-divider" />

        <div className="edu__timeline">
          {education.map((edu, i) => (
            <div key={i} className="edu__item" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="edu__line-wrapper">
                <div className="edu__dot">{edu.icon}</div>
                {i < education.length - 1 && <div className="edu__connector" />}
              </div>
              <div className="card edu__card">
                <div className="edu__header">
                  <div>
                    <p className="edu__period">{edu.period}</p>
                    <h2 className="edu__degree">{edu.degree}</h2>
                    <p className="edu__institution">{edu.institution}</p>
                  </div>
                </div>
                <p className="edu__description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
