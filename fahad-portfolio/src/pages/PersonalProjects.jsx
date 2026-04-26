import React from 'react';
import { personalProjects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const PersonalProjects = () => {
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
      </div>
    </div>
  );
};

export default PersonalProjects;
