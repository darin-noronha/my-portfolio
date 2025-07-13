import React from 'react';
import Hero from './components/Hero';
//import About from './components/About';
//import Skills from './components/Skills';
import Projects from './components/Projects';
//import Contact from './components/Contact';
//import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Import global styles
import './styles/globals/variables.css';
import './styles/globals/reset.css';
import './styles/globals/animations.css';
import './App.css';

function App() {
  return (
    <div className="main-layout">
      <div className="left-column">
        <Hero/>
        <Projects />
      </div>
      <div className="right-column">
        <Footer />
      </div>
    </div>
  );
}

export default App;
