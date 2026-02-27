import React, { useState } from "react";

const tabs = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const tabContent = {
  home: (
    <div> 
      <h1 className="text-2xl font-bold ">Home</h1>
      <p className=" max-w-2xl">Our website is currently undergoing an exciting transformation! We're busy behind the scenes, building a new and improved online experience for you. Please bear with us as we work to bring you updated content, enhanced features, and a more user-friendly design. We appreciate your patience and look forward to unveiling our new site very soon!
      <br />
      <br />
      Please check back later!
      </p>
    </div>
    ),
  about: (
    <div> 
      <h1 className="text-2xl font-bold font-sarpanch">About</h1>
      <p className=" max-w-2xl font-sarpanch ">I'm Ben, an aspiring web designer. This site is my portfolio, showcasing my journey and projects in web design. My focus is on clean design, intuitive user interfaces, and effective online presence. I'm eager to apply my skills and grow within the web design industry.</p>
    </div>
    ),
  portfolio: (
  <div>
    <h1 className="text-2xl font-bold font-sarpanch">Portfolio</h1>
    <p className=" max-w-2xl font-sarpanch"><a href="https://www.shopfront.benredmiston.com">Storefront - Store/Showcase Website</a></p>
    <p className=" max-w-2xl font-sarpanch">NewGen3DPrint - Store/Showcase Website</p>
  </div>
  ),
  contact: (
    <div>
      <a href="https://x.com/ben_edmiston" target="_blank" rel="noopener noreferrer" classname="font-sarpanch">X</a>
      <br />
      <a href="mailto:ben.r.edmiston@gmail.com" target="_blank" rel="noopener noreferrer" classname="font-sarpanch">Email</a>
    </div>
  ),
};

const SidebarLayout = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="flex flex-col md:py-10">
      {/* Sidebar */}
      <aside className="flex bg-gray-800 text-white w-full overflow-x-auto "> 
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-4 py-3 text-center hover:bg-gray-700 transition font-sarpanch ${
              activeTab === tab.id ? "bg-gray-700 font-semibold" : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </aside>

      {/* Main content */}
      <main className="flex p-12 bg-gray-800 bg-opacity-75 overflow-auto font-sarpanch text-center justify-center size-full h-3/4">
        <div className="text-xl font-medium ">{tabContent[activeTab]}</div>
      </main>
    </div>
  );
};

export default SidebarLayout;
