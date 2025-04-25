import React, { useState } from "react";

const tabs = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

const tabContent = {
  home: (
    <div> 
      <h1 className="text-2xl font-bold">Home</h1>
      <p className="mt-4">This website is currently under construction.
      <br />
      Please check back later!
      </p>
    </div>
    ),
  about: (
    <div> 
      <h1 className="text-2xl font-bold">About</h1>
    </div>
    ),
  services: (
  <div>
    <h1 className="text-2xl font-bold">Services</h1>
    <p className="mt-4">We offer a variety of services to help you succeed.</p>
  </div>
  ),
  contact: (
    <div>
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="mt-4">Feel free to reach out to us for any inquiries.</p>
    </div>
  ),
};

const SidebarLayout = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white w-full md:w-64 flex md:flex-col md:h-full overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 md:flex-none px-4 py-3 text-center hover:bg-gray-700 transition ${
              activeTab === tab.id ? "bg-gray-700 font-semibold" : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-800 overflow-auto">
        <div className="text-xl font-medium">{tabContent[activeTab]}</div>
      </main>
    </div>
  );
};

export default SidebarLayout;
// This code creates a sidebar layout with tabs using React. The sidebar contains buttons for different tabs, and clicking on a button updates the main content area to display the corresponding content. The layout is responsive, adjusting to different screen sizes using Tailwind CSS classes.
// The sidebar is styled with a dark background, and the active tab is highlighted. The main content area has a light background and displays the content based on the selected tab. The layout is designed to be user-friendly and visually appealing, making it suitable for various applications.