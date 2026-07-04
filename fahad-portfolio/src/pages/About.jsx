import React from 'react';
import { personal } from '../data/portfolioData';
import './About.css';

const About = () => {
  return (
    <div className="page-wrapper">
      <div className="container section">
        <p className="section-subheading">// who I am</p>
        <h1 className="section-heading">About Me</h1>
        <div className="section-divider" />

        <div className="about__container">
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
        </div>
      </div>
    </div>
  );
};

export default About;










