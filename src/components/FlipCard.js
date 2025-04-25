import React, { useState } from 'react';

const FlipCard = ({ frontContent, backContent }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className="w-[300px] h-[250px] perspective-[1000px] m-2 bg-transparent cursor-pointer"
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-gray-200 flex items-center justify-center border border-gray-300 rounded-lg backface-hidden">
          {frontContent}
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-gray-400 flex items-center justify-center border border-gray-300 rounded-lg backface-hidden rotate-y-180">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
