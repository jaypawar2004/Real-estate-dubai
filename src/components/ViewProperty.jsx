import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RequestForm from "./RequestForm";
import FeedBack from "./Map";
import Map from "./Map";

const ViewProperty = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract the property details from the state
  const property = location.state?.property;

  const slides = property?.images || [
    "https://picsum.photos/800/450",
    "https://picsum.photos/800/452",
    "https://picsum.photos/800/453",
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

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-8 text-center mt-[5vw]">
        <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-teal-500 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
    
    <div className="w-full flex flex-col mt-[20vw] lg:flex-row lg:justify-between lg:items-start p-4 lg:p-8 lg:mt-[5vw]">
      {/* Left Side: Carousel */}
      <div className="flex flex-col items-center lg:w-1/2 w-full max-w-7xl gap-6 bg-white rounded-lg shadow-md">
        {/* Main Slide */}
        <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-200">
          <img
            src={slides[activeIndex]}
            alt={`Slide ${activeIndex + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex items-center w-full gap-4 relative">
          {/* Previous Button */}
          <button
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white disabled:opacity-50 shadow-md hover:scale-105 transition-transform"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous slide"
          >
            &#x25C0;
          </button>

          {/* Thumbnails */}
          <ul
            className="h-[10vh] items-center justify-center flex gap-4 overflow-x-auto scrollbar-hide flex-grow"
            style={{
              scrollSnapType: "x mandatory",
            }}
          >
            {slides.map((slide, index) => (
              <li
                key={index}
                className={`w-[20vw] sm:w-[10vw] h-[8vh] flex-shrink-0 rounded-lg overflow-hidden cursor-pointer scroll-snap-align-center border-2 transition-transform duration-300 ${
                  activeIndex === index
                    ? "border-blue-600 scale-105"
                    : "border-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={slide}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </li>
            ))}
          </ul>

          {/* Next Button */}
          <button
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white disabled:opacity-50 shadow-md hover:scale-105 transition-transform"
            onClick={handleNext}
            disabled={activeIndex === slides.length - 1}
            aria-label="Next slide"
          >
            &#x25B6;
          </button>
        </div>
      </div>

      {/* Right Side: Property Details */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
        <button
          onClick={() => navigate("/")}
          className="bg-teal-500 text-white px-4 py-2 rounded mb-8"
        >
          Back to Listings
        </button>
        <h1 className="text-2xl font-bold mb-4 text-gray-900">{property.title}</h1>
        {/* <p className="text-gray-800 mb-6">{property.description}</p> */}
        {/* <div className="flex justify-between text-sm text-gray-800 mb-4">
          <div className="text-zinc-800">
            <span className="block text-gray-800 font-semibold">Bedrooms</span>
            {property.bedrooms}
          </div>
          <div className="text-zinc-800">
            <span className="block text-gray-800 font-semibold">Bathrooms</span>
            {property.bathrooms}
          </div>
          <div className="text-zinc-800">
            <span className="block text-gray-800 font-semibold">Area</span>
            {property.area}
          </div>
        </div> */}
        <div className="flex justify-between text-sm text-gray-800 mb-4">
                <div>
                  <span className="block font-semibold">Location</span>
                  <div className="flex items-center">
                    <i className="ri-map-pin-5-fill text-red-600 mr-2"></i>
                    {property.location}
                  </div>
                </div>
                <div>
                  <span className="block font-semibold">Bedrooms</span>
                  <div className="flex items-center">
                    <i className="fas fa-th-large text-gray-500 mr-2"></i>
                    {property.bedrooms}
                  </div>
                </div>
                <div>
                  <span className="block font-semibold">Area</span>
                  <div className="flex items-center">
                    <i className="fas fa-vector-square text-gray-500 mr-2"></i>
                    {property.area}
                  </div>
                </div>
              </div>
        <div className="mt-6">
          <span className="text-lg font-bold text-teal-500">{property.price}</span>
        </div>
        <h2 className="text-2xl font-extrabold mt-10">
          Description
        </h2>
        <p className="text-gray-800 mb-6">{property.description}</p>
        
      </div>
      
    </div>
    <Map />
    </>
  );
};

export default ViewProperty;
