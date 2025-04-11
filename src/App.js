import React from 'react';
import Header from './components/Header';
import FlipCard from './components/FlipCard';
import About from './components/sections/About';
import Contact from './components/sections/Contact.js';
import Intro from './components/sections/Intro';
import SkillsPortfolio from './components/sections/SkillsPortfolio';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <FlipCard frontContent="About Me" backContent={<About />} />
        <FlipCard frontContent="Contact" backContent={<Contact />} />
        <FlipCard frontContent="Introduction" backContent={<Intro />} />
        <FlipCard frontContent="Skills/Portfolio" backContent={<SkillsPortfolio />} />
      </div>
    </div>
  );
}

export default App;