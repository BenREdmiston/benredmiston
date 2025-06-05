import React from 'react';
import SidebarLayout from './components/SidebarLayout';
import CyberpunkBenAvatar from './components/images/CyberpunkBenAvatar.png';
// import Tabs from './components/Tabs';


function App() {
  return ( 
    <div className="relative flex-row bg-gray-800 text-white h-screen bg-tiled-avatar bg-repeat bg-small">

      <div className='flex items-center justify-between w-full'>   
        <h1 className="text-5xl text-start font-michroma">Ben Edmiston</h1>
        <img src={CyberpunkBenAvatar} alt="Benjamin Edmiston" 
          className=" w-32 h-32 " />
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