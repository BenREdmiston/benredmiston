import React from 'react';

function Header() {
  return (
    <header className="relative top-0 left-0 h-screen w-60 flex flex-col m-0 bg-gray-800 text-white shadow-lg p-4">
      <button title="About" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">About</button>
      <button title="Contact" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Contact</button>
      <button title="Skills/Portfolio" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Skills/Portfolio</button>
      <button title="Introduction" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Introduction</button>
    </header>
  );
}

export default Header;