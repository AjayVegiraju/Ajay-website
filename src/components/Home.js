import React, { useEffect } from 'react';
import './Home.css';

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const backgroundText = document.querySelector('.background-text');
      if (backgroundText) {
        backgroundText.style.transform = `translateX(${scrollTop * -2}px) translateY(-50%)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="home">
      <div className="background-text">AJAY</div>
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-text">Developer</span>
            <span className="hero-text hero-outline">Technologist</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Home;
