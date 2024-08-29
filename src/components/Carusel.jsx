import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/600x400?text=Image+1',
  'https://via.placeholder.com/600x400?text=Image+2',
  'https://via.placeholder.com/600x400?text=Image+3',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="overflow-hidden relative">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-auto"
        />
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full focus:outline-none"
        >
          &#9664;
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full focus:outline-none"
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
