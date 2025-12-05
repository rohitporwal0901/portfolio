import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import './index.css'; // Ensure styles are loaded

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
