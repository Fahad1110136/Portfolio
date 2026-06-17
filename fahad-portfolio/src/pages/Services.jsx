import React, { useState } from 'react';
import './Services.css';
import { useNavigate } from 'react-router-dom';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};
const services = [
  {
    id: '01',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Frontend Engineering',
    tagline: 'Interfaces that users love to interact with.',
    description:
      'Building fast, accessible, and visually polished web interfaces using React and modern CSS. Every component is crafted with clean architecture, reusable patterns, and pixel-precise attention to detail — from design system setup to final deployment.',
    stack: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind'],
    highlight: 'Component-driven architecture',
  },
  {
    id: '02',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
      </svg>
    ),
    title: 'Backend Engineering',
    tagline: 'Robust server-side logic built to scale.',
    description:
      'Designing and implementing server-side systems with Node.js and Express, including RESTful API development, database modelling, authentication flows, and middleware pipelines. Built with security, performance, and maintainability as first-class concerns.',
    stack: ['Node.js', 'Next', 'Express', 'FAST & REST APIs', 'JWT', 'Flask', 'Python'],
    highlight: 'Secure & scalable API design',
  },
  {
    id: '03',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Full Stack Development',
    tagline: 'End-to-end web applications, delivered.',
    description:
      'Taking a product from zero to deployment using the complete MERN stack — MongoDB, Express, React, and Node. I handle the entire pipeline: database schema, API layer, frontend UI, and cloud hosting — so you get a cohesive, production-ready application without the coordination overhead.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'SQL', 'SQLite', 'Prisma', 'Streamlit'],
    highlight: 'Full pipeline ownership',
  },
  {
    id: '04',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <path d="M12 18h.01"/>
      </svg>
    ),
    title: 'Responsive UI & Motion Design',
    tagline: 'Every screen size. Every interaction.',
    description:
      'Creating layouts that adapt gracefully from large desktop displays down to the smallest mobile viewports, combined with thoughtful CSS animations and transitions that guide attention without distracting. The result is an experience that feels considered and alive.',
    stack: ['CSS Animations', 'Flexbox', 'CSS Grid', 'Media Queries', 'React'],
    highlight: 'Mobile-first by default',
  },
  {
    id: '05',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10"/>
        <path d="M12 8v4l3 3"/>
        <path d="M18 2v4h4"/>
        <path d="M22 2l-4 4"/>
      </svg>
    ),
    title: 'AI & Machine Learning',
    tagline: 'Turning data into intelligent decisions.',
    description:
      'Building and training machine learning models for classification, regression, and prediction tasks using Python\'s scientific ecosystem. From exploratory data analysis and feature engineering through to model evaluation, hyperparameter tuning, and integration into real applications.',
    stack: ['Python', 'scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'Keras'],
    highlight: 'Data-driven model pipelines',
  },
  {
    id: '06',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14 2 14 8 20 8"/>
        <path d="M8 13h2M8 17h5"/>
      </svg>
    ),
    title: 'C / C++ Systems Programming',
    tagline: 'Low-level precision. High-level thinking.',
    description:
      'Developing high-performance, memory-efficient programs and object-oriented systems in C and C++. Academic projects, data structure implementations, algorithm design, and systems-level problem solving — written with clean code standards and a firm grasp of computer science fundamentals.',
    stack: ['C', 'C++', 'OOP', 'STL', 'Data Structures', 'SFML'],
    highlight: 'Performance-critical code',
  },
  {
    id: '07',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Python Development',
    tagline: 'Scripting, automation, and beyond.',
    description:
      'Writing clean, well-structured Python for a wide range of use cases — automation scripts, data processing pipelines, REST API integrations, utility tools, and academic computing tasks. Readable, documented code that solves real problems efficiently.',
    stack: ['Python', 'Flask', 'Requests', 'File I/O', 'OOP'],
    highlight: 'Clean & well-documented code',
  },
  {
    id: '08',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: 'Technical Documentation & Presentations',
    tagline: 'Complex ideas, clearly communicated.',
    description:
      'Producing clear, well-structured technical documentation, project reports, and presentations for software projects and academic work. Whether it\'s a README, an API reference, a research writeup, or a pitch deck — the writing is precise, professional, and tailored to the audience.',
    stack: ['Markdown', 'LaTeX', 'PowerPoint', 'Notion', 'GitHub Docs', 'Prezi', 'Gamma AI', 'Sheets'],
    highlight: 'Clarity over jargon',
  },
  {
    id: '09',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v4c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
        <path d="M3 9v4c0 1.66 4.03 3 9 3s9-1.34 9-3V9"/>
        <path d="M3 13v4c0 1.66 4.03 3 9 3s9-1.34 9-3v-4"/>
      </svg>
    ),
    title: 'Database Design & Management',
    tagline: 'Structured data. Reliable queries. Clean schemas.',
    description:
      'Designing efficient database schemas, writing optimised queries, and managing data across both relational and non-relational systems. From normalising SQL tables and handling migrations to structuring MongoDB collections and integrating ORMs — data is stored cleanly, retrieved fast, and scaled sensibly.',
    stack: ['MySQL', 'MongoDB', 'ChromaDB', 'SQLite', 'PostgreSQL', 'Prisma', 'Firebase', 'JWT'],
    highlight: 'Schema design & query optimisation',
  },
  {
    id: '10',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
    title: 'Dev Tools & Miscellaneous',
    tagline: 'The glue that holds every project together.',
    description:
      'Beyond writing code, shipping good software means knowing the surrounding toolchain — version control workflows with Git and GitHub, deployment pipelines on platforms like Netlify and Vercel, environment configuration, debugging strategies, and keeping codebases clean and maintainable over time. These habits quietly make every project more professional.',
    stack: ['Git', 'GitHub', 'Netlify', 'Vercel', 'VS Code', 'Linux'],
    highlight: 'Clean workflows & solid tooling',
  },
];

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate();
  return (
    <div className="page-wrapper">
      <div className="container section">
        <p className="section-subheading">// what i offer</p>
        <h1 className="section-heading">Services</h1>
        <div className="section-divider" />

        <p className="services__intro">
          A developer who works across the full stack — from pixel-perfect frontends and scalable
          backends to trained ML models and low-level systems code. Here's what I can build for you.
        </p>

        <div className="services__grid">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`card services__card${activeCard === service.id ? ' services__card--active' : ''}`}
              style={{ animationDelay: `${i * 0.07}s` }}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="services__card-top">
                <div className="services__icon-wrap">
                  {service.icon}
                </div>
                <span className="services__number">{service.id}</span>
              </div>

              <h3 className="services__title">{service.title}</h3>
              <p className="services__tagline">{service.tagline}</p>

              <div className="services__divider" />

              <p className="services__description">{service.description}</p>

              <div className="services__highlight">
                <span className="services__highlight-dot" />
                <span>{service.highlight}</span>
              </div>

              <div className="services__stack">
                {service.stack.map(tech => (
                  <span key={tech} className="services__tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="services__cta">
          <div className="services__cta-text">
            <h2 className="services__cta-heading">Have a project in mind or Any service you want ?</h2>
            <p className="services__cta-sub">
              Whether it's a full product build or a specific feature — let's talk.
            </p>
          </div>
      
          <button
            className="btn-solid services__cta-btn"
            onClick={() => navigate('/contact')}
          >
            Get In Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Services;
