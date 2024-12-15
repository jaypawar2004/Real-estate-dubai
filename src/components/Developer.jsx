import React, { useState, useEffect } from "react";

const Carousel = () => {
  const slides = [
    "https://picsum.photos/800/450",
    "https://picsum.photos/800/452",
    "https://picsum.photos/800/453",
    "https://picsum.photos/800/454",
    "https://picsum.photos/800/455",
    "https://picsum.photos/800/456",
    "https://picsum.photos/800/457",
    "https://picsum.photos/800/458",
    "https://picsum.photos/800/459",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < slides.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <div className="flex flex-col mt-[10vh] items-center p-4 w-full max-w-7xl gap-4 bg-gray-200 rounded-lg shadow-lg">
      <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-300">
        <img
          src={slides[activeIndex]}
          alt="Active Slide"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center w-full gap-2 relative">
        <button
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-white disabled:opacity-50"
          onClick={handlePrev}
          disabled={activeIndex === 0}
          aria-label="Previous slide"
        >
          &#x25C0;
        </button>

        <ul
          className="flex gap-2 overflow-x-auto scrollbar-hide flex-grow"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {slides.map((slide, index) => (
            <li
              key={index}
              className={`w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer scroll-snap-align-center border-2 transition-transform duration-300 ${
                activeIndex === index
                  ? "border-blue-500 scale-105"
                  : "border-transparent"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={slide}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </li>
          ))}
        </ul>

        <button
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-white disabled:opacity-50"
          onClick={handleNext}
          disabled={activeIndex === slides.length - 1}
          aria-label="Next slide"
        >
          &#x25B6;
        </button>
      </div>
    </div>
  );
};

export default Carousel;