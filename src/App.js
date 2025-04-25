import React from 'react';
import SidebarLayout from './components/SidebarLayout';
// import Tabs from './components/Tabs';


function App() {
  return ( 
    <div className="relative flex-row bg-gray-800 text-white h-screen">

      <div className='inline-flex'>   
        <h1 className="relative top-0 text-5xl text-start">Ben Edmiston</h1>
        <img src="https://avatars.githubusercontent.com/u/77869567?s=400&u=000e963c53758701e07014fa9bb810146f5887c7&v=4" alt="Benjamin Edmiston" 
          className=" size-12 " />
      </div>
      <div className="">
        <SidebarLayout />
      </div>
    </div>
  );
}

export default App;

// <Header />

/*          */