import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Services from './pages/Services';
import AcademicProjects from './pages/AcademicProjects';
import PersonalProjects from './pages/PersonalProjects';
import Skills from './pages/Skills';          
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import './styles/global.css';


function App() {
  return (
    <Router>
      <div className="app">
        {/* Background effects */}
        <div className="grid-bg" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />

        <Navbar />

        {/*
         * ── UPDATED: Single-page continuous scroll layout ──────────────────
         * All sections are rendered stacked vertically on one page.
         * Each section has an `id` that matches Navbar anchor links,
         * so clicking a nav link smoothly scrolls to that section.
         * The old multi-route approach is preserved as a fallback via Routes
         * but the primary experience is this scroll layout on "/".
         * ──────────────────────────────────────────────────────────────────
         */}
        <Routes>
          {/* Single-page scroll — all sections on root */}
          <Route path="/" element={
            <div className="scroll-page">
              <section id="home">    <Home />          </section>
              <section id="about">   <About />         </section>
              <section id="education"><Education />    </section>
              <section id="experience"><Experience />  </section>
              <section id="services"><Services />      </section>
              <section id="academic-projects"><AcademicProjects /></section>
              <section id="personal-projects"><PersonalProjects /></section>
              {/* ── ADDED: Skills section in scroll flow ── */}
              <section id="skills">  <Skills />        </section>
              <section id="achievements"><Achievements /></section>
              <section id="contact"> <Contact />       </section>
            </div>
          } />

          {/* Keep individual routes so direct URLs still work */}
          <Route path="/about"             element={<About />} />
          <Route path="/education"         element={<Education />} />
          <Route path="/experience"        element={<Experience />} />
          <Route path="/services"          element={<Services />} />
          <Route path="/academic-projects" element={<AcademicProjects />} />
          <Route path="/personal-projects" element={<PersonalProjects />} />
          <Route path="/skills"            element={<Skills />} />
          <Route path="/achievements"      element={<Achievements />} />
          <Route path="/contact"           element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
