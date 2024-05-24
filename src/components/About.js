import React, { useEffect, useRef } from 'react';
import './About.css';

function About() {
  const aboutRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current.classList.add('animate-in');
          titleRef.current.classList.remove('animate-out');
        } else {
          titleRef.current.classList.add('animate-out');
          titleRef.current.classList.remove('animate-in');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="about-title-container">
        <h2 className="about-title" ref={titleRef}>
          <span>A</span>
          <span>B</span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
        </h2>
      </div>
      <div className="about-desc">
        <h1><b>HEY I'M AJAY VEGIRAJU</b></h1>
        <p>I'M A COMPUTER SCIENCE STUDENT AT THE UNIVERSITY OF WASHINGTON WITH A STRONG INTEREST IN SOFTWARE ENGINEERING AND TECHNOLOGY.</p>
        <p>I HAVE EXPERIENCE WORKING WITH VARIOUS PROGRAMMING LANGUAGES AND FRAMEWORKS, INCLUDING JAVA, PYTHON, REACT.JS, AND MORE. I AM ALSO AN AWS CERTIFIED CLOUD PRACTITIONER.</p>
       
      </div>
    </section>
  );
}

export default About;
