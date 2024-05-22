import React, { useEffect, useRef } from 'react';
import './Projects.css';

function Projects() {
  const projectsRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-intro">
        <h2 className="projects-title">PROJECTS</h2>
      </div>
      <div className="projects-container" ref={projectsRef}>
        <div className="project-card">
          <div className="project-image">
            <img src="/Users/ajayvegiraju/Documents/person4/src/sp.icon.png" alt="Leaked Lights" />
          </div>
          <div className="project-info">
            <h3>Leaked Lights</h3>
            <p>Dark Gradient Wallpaper Pack</p>
            <p>Gradient, 5K, Figma</p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
            <img src="/Users/ajayvegiraju/Documents/person4/src/sp.icon.png" alt="AirPods Fit Test" />
          </div>
          <div className="project-info">
            <h3>AirPods Fit Test</h3>
            <p>Flask, Python, HTML</p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
            <img src="/Users/ajayvegiraju/Documents/person4/src/sp.icon.png" alt="Flip Clock" />
          </div>
          <div className="project-info">
            <h3>Flip Clock</h3>
            <p>JavaScript, HTML, CSS</p>
          </div>
        </div>
  
      </div>
    </section>
  );
}

export default Projects;
