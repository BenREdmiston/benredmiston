import React from 'react';
import Header from './components/Header';
import FlipCard from './components/FlipCard';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className='main-layout'>
        <Header />
          <div className="container">
            <FlipCard 
              frontContent={<h3 className='cardTitle'>Introduction</h3>} 
              backContent={<p>This is the Introduction section content.</p>} 
            />
            <FlipCard 
              frontContent={<h3 className='cardTitle'>About Me</h3>} 
              backContent={<p>This is the About Me section content.</p>} 
            />
            <FlipCard 
              frontContent={<h3 className='cardTitle'>Contact</h3>} 
              backContent={<p>This is the Contact section content.</p>} 
            />
            <FlipCard 
              frontContent={<h3 className='cardTitle'>Skills/Portfolio</h3>} 
              backContent={<p>This is the Skills/Portfolio section content.</p>} 
            />
          </div>
        </div>
      </div>
  );
}

export default App;