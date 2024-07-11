import React, { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    title: "Arial Parking Space Detection System",
    tech: "ReactJs, JSX, CSS, Google Maps API, Python , Flask, Roboflow",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 24 24"><path d="M12 0c-5.523 0-10 4.394-10 9.815 0 5.505 4.375 9.268 10 14.185 5.625-4.917 10-8.68 10-14.185 0-5.421-4.478-9.815-10-9.815zm0 18c-4.419 0-8-3.582-8-8s3.581-8 8-8c4.419 0 8 3.582 8 8s-3.581 8-8 8zm1.08-9.204c0 .745-.549 1.008-1.293 1.008h-.463v-1.979h.64c.705 0 1.116.256 1.116.971zm3.92-1.713v5.833c0 1.151-.933 2.084-2.083 2.084h-5.834c-1.15 0-2.083-.933-2.083-2.083v-5.834c0-1.15.933-2.083 2.083-2.083h5.833c1.151 0 2.084.933 2.084 2.083zm-2.5 1.663c0-.69-.21-1.209-.628-1.557-.42-.348-1.031-.522-1.836-.522h-2.119v6.667h1.407v-2.371h.604c.823 0 1.457-.19 1.903-.57.446-.381.669-.93.669-1.647z"/></svg>
    ),
    repo:"https://github.com/AjayVegiraju/parking-space-detection-roboflow-google-maps"
  },
  {
    title: "Spotify User Favorites Display",
    tech: "ReactJs, Spotify API",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"/></svg>
    ),
    repo:"https://github.com/AjayVegiraju/spotify-final"
  },
  {
    title: "Wildfire Tracker",
    tech: "ReactJs, JSX, CSS, Nasa EONET, Google Maps API",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path d="M19 24h-14v-2h14v2zm-10-24c.542 6.292-5 8.458-5 14 0 3.764 3.084 6.42 6.594 7.005-1.094-1.755-.073-4.286 1.406-5.693 1.531 1.469 2.344 4.156 1.281 5.688 3.868-.75 6.719-3.858 6.719-7.833 0-3.625-1.833-7.042-5.291-9.167.822 2.281-.271 4.365-1.334 5.083.063-2.921-1-7.255-4.375-9.083z"/></svg>
    ),
    repo:"https://github.com/AjayVegiraju/WeatherApp"
  },
  {
    title: "Audio Classification and Analysis System",
    tech: "Python, Librosa, Scikit-learn, Tkinter",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path d="M19.803 13.207l-.829 1.093-1.554-3.826c-.077-.189-.244-.306-.437-.306-.157 0-.356.084-.444.321l-1.356 3.664-1.872-8.759c-.062-.291-.288-.394-.462-.394-.203 0-.428.131-.473.424l-1.629 10.581-1.658-6.968c-.067-.282-.291-.382-.463-.382-.167 0-.374.092-.453.349l-1.453 4.753-1.07-2.53c-.078-.185-.245-.299-.436-.299-.154 0-.294.076-.385.209l-1.257 1.805-.087.058h-2.985c-.276 0-.5.224-.5.5s.224.5.5.5h3.284c.152 0 .296-.074.386-.206l.948-1.353 1.24 2.929c.079.187.241.299.433.299.211 0 .39-.138.455-.35l1.324-4.332 1.814 7.629c.068.283.282.384.46.384.203 0 .428-.131.473-.425l1.605-10.425 1.673 7.83c.058.272.277.395.467.395.202 0 .366-.12.441-.321l1.5-4.049 1.426 3.51c.077.189.245.306.438.306.152 0 .292-.075.382-.206l1.146-1.583.087-.046h3.026c.272 0 .492-.22.492-.492s-.22-.494-.492-.494h-3.322c-.151 0-.294.077-.383.207z"/></svg>
    ),
    repo:"https://github.com/AjayVegiraju/Audio-Classification-System-Speech-and-Music-"
  },{
    title: "Image Comparison Analysis",
    tech: "Java, Swing, AWT",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path d="M14 9l-2.519 4-2.481-1.96-5 6.96h16l-6-9zm8-5v16h-20v-16h20zm2-2h-24v20h24v-20zm-20 6c0-1.104.896-2 2-2s2 .896 2 2c0 1.105-.896 2-2 2s-2-.895-2-2z"/></svg>
    ),
    repo: "https://github.com/AjayVegiraju/Image-Comparison-Analysis-System"
  },{
    title: "Weather App",
    tech: "ReactJs, JSX, CSS",
    icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path d="M20.422 7.516c-.178-3.232-3.031-5.777-6.432-5.491-1.087-1.24-2.693-2.025-4.49-2.025-3.172 0-5.754 2.443-5.922 5.516-2.033.359-3.578 2.105-3.578 4.206 0 2.362 1.949 4.278 4.354 4.278h1.326c.771 1.198 2.124 2 3.674 2h1.381l2.078-4.5h6.328l-2.032 4.5h2.535c2.407 0 4.356-1.916 4.356-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.395 4.484h-.673c-1.297 0-2.354-1.021-2.354-2.278 0-2.118 2.104-2.597 3.488-2.513-.05-1.355.137-5.209 4.012-5.209.967 0 1.714.25 2.29.645-1.823.921-3.096 2.745-3.212 4.871-2.022.357-3.697 2.127-3.551 4.484zm9.973 5h3l-6 7 2-5h-3l2.802-6h3.042l-1.844 4z"/></svg>),
    repo:"https://github.com/AjayVegiraju/WeatherApp"
  },{
    title: "Banking App Backend",
    tech: "C++, BST",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path d="M22 4h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm-19 5.78c0-.431.349-.78.78-.78h.428v1.125h-1.208v-.345zm0 .764h1.208v.968h-1.208v-.968zm0 1.388h1.208v1.068h-.428c-.431 0-.78-.349-.78-.78v-.288zm3 5.068h-3v-1h3v1zm1-4.78c0 .431-.349.78-.78.78h-.429v-1.068h1.209v.288zm0-.708h-1.209v-.968h1.209v.968zm0-1.387h-1.629v2.875h-.743v-4h1.592c.431 0 .78.349.78.78v.345zm4 6.875h-3v-1h3v1zm1-6.5c0-1.381 1.119-2.5 2.5-2.5.484 0 .937.138 1.32.377-.531.552-.857 1.3-.857 2.123 0 .824.327 1.571.857 2.123-.383.239-.836.377-1.32.377-1.381 0-2.5-1.119-2.5-2.5zm4 6.5h-3v-1h3v1zm5 0h-3v-1h3v1zm-2.5-4c-1.38 0-2.5-1.119-2.5-2.5s1.12-2.5 2.5-2.5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5z"/></svg>)
  ,
    repo:"https://github.com/AjayVegiraju/Banking"
  },{
    title: "Game Emulator",
    tech: "Java, Swing",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-2 5c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1zm-2 2c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1zm-11 2v-2h2v-2h2v2h2v2h-2v2h-2v-2h-2zm5 10c-1.104 0-2-.895-2-2s.896-2 2-2 2 .895 2 2-.896 2-2 2zm6 0c-1.104 0-2-.895-2-2s.896-2 2-2 2 .895 2 2-.896 2-2 2zm2-8c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm2-2c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1z"/></svg>)
  ,
    repo:"https://github.com/AjayVegiraju/File-Search-Recursive-and-Iterative-"
  }
];

function Projects() {
  const projectsContainerRef = useRef(null);

  const handleClick = (link) => () => {
    window.open(link, '_blank');
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    const projectCards = projectsContainerRef.current?.querySelectorAll('.project-card');
    projectCards?.forEach((card) => observer.observe(card));
  
    return () => {
      projectCards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">PROJECTS</h2>
      <div className="projects-container" ref={projectsContainerRef}>
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={handleClick(project.repo)}
            style={{ cursor: 'pointer' }}  // Optional: to indicate it's clickable
          >
            <div className="project-image">
              {project.icon}
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="tech">{project.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
