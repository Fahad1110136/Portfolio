import React from 'react';
import { personalProjects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const PersonalProjects = () => {
  const navigate = useNavigate();
  return (
    <div className="page-wrapper">
      <div className="container section">
        <p className="section-subheading">// personal builds</p>
        <h1 className="section-heading">Personal Projects</h1>
        <div className="section-divider" />
        <p className="projects__intro">
          Built out of curiosity, passion, and the relentless urge to solve real problems — 
          these projects represent my drive to build beyond the classroom.
        </p>
        <div className="projects__list">
          {personalProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <div className="projects__nav">
          <div className="projects__nav-content">
            <div className="projects__nav-text">
              <h3 className="projects__nav-heading">Want to see what I built inside the classroom limits ?</h3>
              <p className="projects__nav-sub">Rigorous coursework, real engineering — explore my academic jouney.</p>
            </div>
            <button
            className="btn-solid projects__nav-btn"
            onClick={() => navigate('/academic-projects')}
            >
            Academic Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PersonalProjects;
