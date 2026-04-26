import React from 'react';
import { academicProjects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const AcademicProjects = () => {
  return (
    <div className="page-wrapper">
      <div className="container section">
        <p className="section-subheading">// university work</p>
        <h1 className="section-heading">Academic Projects</h1>
        <div className="section-divider" />
        <p className="projects__intro">
          Engineered under academic rigour — each project tackles a distinct domain of computer science, 
          from bare-metal x86 assembly programming to full-stack AI-integrated platforms.
        </p>
        <div className="projects__list">
          {academicProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicProjects;
