import React, { useEffect, useState } from 'react';
import { personal } from '../data/portfolioData';
import './Home.css';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

const TypewriterText = ({ texts }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else {
          setCharIndex(c => c + 1);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex(i => (i + 1) % texts.length);
          setCharIndex(0);
        } else {
          setCharIndex(c => c - 1);
        }
      }
    }, isDeleting ? 45 : 75);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span className="typewriter">
      {displayText}
      <span className="typewriter__cursor">|</span>
    </span>
  );
};

const Home = () => {
  const roles = [
    'Full Stack Developer',
    'Python Enthusiast',
    'AI/ML Engineer',
    'C/C++ Programmer',
    'Problem Solver',
    'CS @ FAST-NUCES',
  ];

  return (
    <div className="home">
      <div className="home__hero">
        <div className="container">
          <div className="home__grid">
            {/* Left: Info */}
            <div className="home__info">
              <div className="home__badge animate-in" style={{ animationDelay: '0.1s' }}>
                <span className="home__badge-dot" />
                <span>Available for Opportunities</span>
              </div>

              <h1 className="home__name animate-in" style={{ animationDelay: '0.2s' }}>
                Muhammad<br />
                <span className="home__name-accent">Fahad Idrees</span>
              </h1>

              <div className="home__role animate-in" style={{ animationDelay: '0.35s' }}>
                <TypewriterText texts={roles} />
              </div>

              <p className="home__tagline animate-in" style={{ animationDelay: '0.5s' }}>
                {personal.tagline}
              </p>

              <div className="home__actions animate-in" style={{ animationDelay: '0.65s' }}>
                <button className="btn-solid" onClick={() => scrollTo('academic-projects')}>Explore My Work</button>
                <button className="btn-glow"  onClick={() => scrollTo('contact')}>Get In Touch</button>
                <button className="btn-solid" onClick={() => window.open('/Muhammad_Fahad_Idrees.pdf', '_blank')}>Download Resume</button>
              </div>

              <div className="home__stats animate-in" style={{ animationDelay: '0.8s' }}>
                <div className="home__stat">
                  <span className="home__stat-num">11+</span>
                  <span className="home__stat-label">Projects</span>
                </div>
                <div className="home__stat-divider" />
                <div className="home__stat">
                  <span className="home__stat-num">13+</span>
                  <span className="home__stat-label">Technologies</span>
                </div>
                <div className="home__stat-divider" />
                <div className="home__stat">
                  <span className="home__stat-num">2+</span>
                  <span className="home__stat-label">Internships</span>
                </div>
              </div>
            </div>

            <div className="home__photo-section animate-in" style={{ animationDelay: '0.4s' }}>
              <div className="home__photo-frame">
                <img
                  src="/fahad-photo.jpg"
                  alt="Muhammad Fahad Idrees"
                  className="home__photo-img"
                />
                <div className="home__photo-ring home__photo-ring--1" />
                <div className="home__photo-ring home__photo-ring--2" />
                <div className="home__photo-corner home__photo-corner--tl" />
                <div className="home__photo-corner home__photo-corner--tr" />
                <div className="home__photo-corner home__photo-corner--bl" />
                <div className="home__photo-corner home__photo-corner--br" />
              </div>

              <div className="home__float-tag home__float-tag--1">
                <span>⚙️</span> C++ / C / Python
              </div>
              <div className="home__float-tag home__float-tag--2">
                <span>🤖</span> AI / ML
              </div>
              <div className="home__float-tag home__float-tag--3">
                <span>🌐</span> Full Stack Dev
              </div>
              <div className="home__float-tag home__float-tag--4">
                <span>🧩</span> Problem Solver
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home__contact-strip" id="contact-strip">
        <div className="container">
          <p className="home__contact-strip-title">
            <span className="home__contact-strip-label"> // Connect with me</span>
          </p>
          <div className="home__contact-links">

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="home__contact-link"
            >
              <div className="home__contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <span className="home__contact-platform">LinkedIn</span>
                <span className="home__contact-handle">fahadi-idrees</span>
              </div>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="home__contact-link"
            >
              <div className="home__contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <div>
                <span className="home__contact-platform">GitHub</span>
                <span className="home__contact-handle">Fahad1110136</span>
              </div>
            </a>

            <a
              href= {`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`}
              className="home__contact-link"
            >
              <div className="home__contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div>
                <span className="home__contact-platform">Email</span>
                <span className="home__contact-handle">fahadidrees1110136@gmail.com</span>
              </div>
            </a>

            <a
              href={`https://api.whatsapp.com/send?phone=923201480611`}
              className="home__contact-link"
            >
              <div className="home__contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.6 4.38 2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <span className="home__contact-platform">Phone</span>
                <span className="home__contact-handle">+92 320 1480611</span>
              </div>
            </a>
              <a
              href="https://www.google.com/maps?q=31.535916,74.303854"
              target="_blank"
              rel="noopener noreferrer"
              className="home__contact-link"
              >
              <div className="home__contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <span className="home__contact-platform">Location</span>
                <span className="home__contact-handle">Samanabad, Lahore, Pakistan</span>
              </div>
              </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;