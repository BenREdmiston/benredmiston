import React from 'react';
import SidebarLayout from './components/SidebarLayout';
import CyberpunkBenAvatar from './components/images/CyberpunkBenAvatar.png';
// import Tabs from './components/Tabs';


function App() {
  return ( 
    <div className="relative flex-row bg-gray-800 text-white h-screen bg-tiled-avatar bg-repeat">

      <div className='inline-flex space-x-10'>   
        <h1 className="relative top-0 text-5xl text-start">Ben Edmiston</h1>
        <img src={CyberpunkBenAvatar} alt="Benjamin Edmiston" 
          className=" size-12 " />
      </div>
      <div className="space-x-10">
        <SidebarLayout />
      </div>
    </div>
  );
}

export default App;

// <Header />

/*          */