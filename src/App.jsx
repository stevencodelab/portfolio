// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Layanan from './components/Layanan';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <AnimatedHexagonBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Layanan /> 
        <Contact />
      </main>
    </div>
  );
}

export default App;