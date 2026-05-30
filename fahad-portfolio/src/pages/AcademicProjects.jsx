// import React from 'react';
// import { academicProjects } from '../data/portfolioData';
// import ProjectCard from '../components/ProjectCard';
// import './Projects.css';

// const AcademicProjects = () => {
//   return (
//     <div className="page-wrapper">
//       <div className="container section">
//         <p className="section-subheading">// university work</p>
//         <h1 className="section-heading">Academic Projects</h1>
//         <div className="section-divider" />
//         <p className="projects__intro">
//           Engineered under academic rigour — each project tackles a distinct domain of computer science, 
//           from bare-metal x86 assembly programming to full-stack AI-integrated platforms.
//         </p>
//         <div className="projects__list">
//           {academicProjects.map((project, i) => (
//             <ProjectCard key={project.title} project={project} index={i} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AcademicProjects;

import React from 'react';
import { academicProjects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const AcademicProjects = () => {
  const navigate = useNavigate();

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

        <div className="projects__nav">
          <div className="projects__nav-content">
            <div className="projects__nav-text">
              <h3 className="projects__nav-heading">Curious about what I build beyond the classroom ?</h3>
              <p className="projects__nav-sub">From side hustles to passion projects — there's a lot more to explore.</p>
            </div>
            <button
            className="btn-solid projects__nav-btn"
            onClick={() => navigate('/personal-projects')}
            >
            Personal Projects
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

export default AcademicProjects;
