import React from 'react';
import { personal, skills } from '../data/portfolioData';
import './About.css';

const About = () => {
  return (
    <div className="page-wrapper">
      <div className="container section">
        <p className="section-subheading">// who I am</p>
        <h1 className="section-heading">About Me</h1>
        <div className="section-divider" />

        <div className="about__grid">
          {/* Bio */}
          <div className="about__bio card">
            <div className="about__bio-header">
              <div className="about__avatar">
                <span>MFI</span>
              </div>
              <div>
                <h2 className="about__name">{personal.name}</h2>
                <p className="about__title">{personal.title}</p>
              </div>
            </div>
            <p className="about__text">{personal.about}</p>

            <div className="about__interests">
              <p className="about__interests-label">// Interests</p>
              <div className="about__interests-list">
                {['Competitive Programming', 'Outdoor Adventures & Trips', 'Cricket & Football'].map(i => (
                  <span key={i} className="tag">{i}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="about__skills">
            {Object.entries(skills).map(([category, items], ci) => (
              <div key={category} className="card about__skill-card" style={{ animationDelay: `${ci * 0.1}s` }}>
                <p className="about__skill-category">{category}</p>
                <div className="about__skill-tags">
                  {items.map(skill => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
