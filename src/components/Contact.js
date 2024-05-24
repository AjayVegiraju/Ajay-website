import React, { useEffect, useRef } from 'react';
import './Contact.css';

function Contact() {
  const contactRef = useRef();
  const titleRef = useRef();
  const linkRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contactRef.current.classList.add('animate');
          titleRef.current.classList.add('fadeInTitle');
          linkRefs.current.forEach((link, index) => {
            link.classList.add(`animate-${index % 2 === 0 ? 'up' : 'down'}`);
          });
        } else {
          contactRef.current.classList.remove('animate');
          titleRef.current.classList.remove('fadeInTitle');
          linkRefs.current.forEach((link, index) => {
            link.classList.remove(`animate-${index % 2 === 0 ? 'up' : 'down'}`);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <h2 className="contact-title" ref={titleRef}>GET IN TOUCH !</h2>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/ajayvegiraju/"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
          ref={(el) => (linkRefs.current[0] = el)}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/AjayVegiraju"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
          ref={(el) => (linkRefs.current[1] = el)}
        >
          GitHub
        </a>
        <a
          href="mailto:vegirajuajayvarma@gmail.com"
          className="contact-link"
          ref={(el) => (linkRefs.current[2] = el)}
        >
          Mail
        </a>
      </div>
    </section>
  );
}

export default Contact;
