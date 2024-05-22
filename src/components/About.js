import React, { useEffect, useRef } from 'react';
import './About.css';

function About() {
  const aboutRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current.classList.add('animate');
        } else {
          aboutRef.current.classList.remove('animate');
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
      <h2 className="about-title">ABOUT</h2>
      <div className="about-desc">
      <p>HEY I'M AJAY VEGIRAJU</p>
      <p>I'M A COMPUTER SCIENCE STUDENT AT THE UNIVERSITY OF WASHINGTON WITH A STRONG INTEREST IN SOFTWARE ENGINEERING AND TECHNOLOGY.</p>
      <p>I HAVE EXPERIENCE WORKING WITH VARIOUS PROGRAMMING LANGUAGES AND FRAMEWORKS, INCLUDING JAVA, PYTHON, REACT.JS, AND MORE. I AM ALSO AN AWS CERTIFIED CLOUD PRACTITIONER.</p>
      <p>I'M ALSO A CONTENT CREATOR AND HAVE BEEN CREATING CONTENT SINCE 2017, ALL THE WAY FROM INSTAGRAM PAGES TO YOUTUBE CHANNELS.</p>
      </div>
    </section>
  );
}

export default About;
