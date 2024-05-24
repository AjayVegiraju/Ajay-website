import React,{useEffect} from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const cursorBox = document.querySelector('.cursor-box');
      const x = event.clientX;
      const y = event.clientY;

      if (cursorBox) {
        cursorBox.style.left = `${x}px`;
        cursorBox.style.top = `${y}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
