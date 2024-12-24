// import React, { useState, useEffect } from "react";

// const Developer = () => {
//   const slides = [
//     "https://picsum.photos/800/450",
//     "https://picsum.photos/800/452",
//     "https://picsum.photos/800/453",
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   const handlePrev = () => {
//     if (activeIndex > 0) {
//       setActiveIndex(activeIndex - 1);
//     }
//   };

//   const handleNext = () => {
//     if (activeIndex < slides.length - 1) {
//       setActiveIndex(activeIndex + 1);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "ArrowLeft") handlePrev();
//     if (e.key === "ArrowRight") handleNext();
//   };

//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [activeIndex]);

//   return (
//     <div className="w-full flex flex-col mt-[20vw] lg:flex-row lg:justify-between lg:items-start p-4 lg:p-8 lg:mt-[5vw]">
//       {/* Left Side: Carousel */}
//       <div className="flex flex-col items-center lg:w-1/2 w-full max-w-7xl gap-6 bg-white rounded-lg shadow-md">
//         {/* Main Slide */}
//         <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-200">
//           <img
//             src={slides[activeIndex]}
//             alt="Active Slide"
//             className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//           />
//         </div>

//         {/* Thumbnail Navigation */}
//         <div className="flex items-center w-full gap-4 relative">
//           {/* Previous Button */}
//           <button
//             className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white disabled:opacity-50 shadow-md hover:scale-105 transition-transform"
//             onClick={handlePrev}
//             disabled={activeIndex === 0}
//             aria-label="Previous slide"
//           >
//             &#x25C0;
//           </button>

//           {/* Thumbnails */}
//           <ul
//             className="h-[10vh] items-center justify-center flex gap-4 overflow-x-auto scrollbar-hide flex-grow"
//             style={{
//               scrollSnapType: "x mandatory",
//             }}
//           >
//             {slides.map((slide, index) => (
//               <li
//                 key={index}
//                 className={`w-[20vw] sm:w-[10vw] h-[8vh] flex-shrink-0 rounded-lg overflow-hidden cursor-pointer scroll-snap-align-center border-2 transition-transform duration-300 ${
//                   activeIndex === index
//                     ? "border-blue-600 scale-105"
//                     : "border-gray-300"
//                 }`}
//                 onClick={() => setActiveIndex(index)}
//               >
//                 <img
//                   src={slide}
//                   alt={`Thumbnail ${index + 1}`}
//                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
//                 />
//               </li>
//             ))}
//           </ul>

//           {/* Next Button */}
//           <button
//             className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white disabled:opacity-50 shadow-md hover:scale-105 transition-transform"
//             onClick={handleNext}
//             disabled={activeIndex === slides.length - 1}
//             aria-label="Next slide"
//           >
//             &#x25B6;
//           </button>
//         </div>
//       </div>

//       {/* Right Side: Property Details */}
//       <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
//         <h1 className="text-2xl font-bold mb-4 text-gray-900">Home In Merrick Way</h1>
//         <p className="text-gray-800 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
//         <div className="flex justify-between text-sm text-gray-800 mb-4">
//           <div className="text-zinc-800">
//             <span className="block text-gray-800 font-semibold">Bedrooms</span>
//             5
//           </div>
//           <div className="text-zinc-800">
//             <span className="block text-gray-800 font-semibold">Bathrooms</span>
//             2
//           </div>
//           <div className="text-zinc-800">
//             <span className="block text-gray-800 font-semibold">Area</span>
//             45,000 Sq Ft
//           </div>
//         </div>
//         <div className="mt-6">
//           <span className="text-lg font-bold text-teal-500">$ 4,654,646</span>
//         </div>
//         <p className="text-gray-800 mb-6">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Developer;
// import React, { useState } from "react";

// const developers = [
//   {
//     name: "Emaar Properties",
//     logo: "https://via.placeholder.com/150", // Replace with actual logo URL
//     projects: 270,
//     description: "Emaar Properties is one of the top developers in UAE known for iconic buildings like Burj Khalifa.",
//   },
//   {
//     name: "Damac Properties",
//     logo: "https://via.placeholder.com/150",
//     projects: 212,
//     description: "Damac Properties offers luxurious properties across Dubai and beyond.",
//   },
//   {
//     name: "Binghatti Developers",
//     logo: "https://via.placeholder.com/150",
//     projects: 77,
//     description: "Binghatti Developers are known for innovative and affordable housing projects.",
//   },
//   {
//     name: "Meraas",
//     logo: "https://via.placeholder.com/150",
//     projects: 72,
//     description: "Meraas is a Dubai-based holding company creating urban living experiences.",
//   },
//   {
//     name: "Sobha Group",
//     logo: "https://via.placeholder.com/150",
//     projects: 65,
//     description: "Sobha Group develops premium residential and commercial spaces.",
//   },
//   {
//     name: "Aldar Properties",
//     logo: "https://via.placeholder.com/150",
//     projects: 60,
//     description: "Aldar Properties is a leading Abu Dhabi-based real estate developer.",
//   },
// ];

// export default function Developers() {
//   const [selectedDeveloper, setSelectedDeveloper] = useState(null);

//   return (
//     <div className="p-6 max-w-7xl mx-auto mt-[5vw]">
//       <h1 className="text-2xl lg:text-3xl font-bold mb-4">Top Developers in UAE</h1>
//       <p className="text-gray-600 mb-6">Real Estate in Popular Developers</p>

//       {/* Responsive Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {developers.map((dev, index) => (
//           <div
//             key={index}
//             className="border p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer bg-white"
//             onClick={() => setSelectedDeveloper(dev)}
//           >
//             <img src={dev.logo} alt={dev.name} className="h-20 mx-auto mb-4" />
//             <h2 className="text-lg font-semibold text-center">{dev.name}</h2>
//             <p className="text-gray-500 text-center">{dev.projects} Projects</p>
//           </div>
//         ))}
//       </div>

//       {/* Selected Developer Details */}
//       {selectedDeveloper && (
//         <div className="mt-10 p-6 border rounded-lg shadow bg-gray-50">
//           <h2 className="text-xl font-bold">{selectedDeveloper.name}</h2>
//           <p className="text-gray-700 mt-4">{selectedDeveloper.description}</p>
//           <button
//             className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             onClick={() => setSelectedDeveloper(null)}
//           >
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState } from "react";

const developers = [
  {
    name: "Emaar Properties",
    logo: "https://cdn.excelproperties.ae/media/developer/logo/emaar.webp?width=137&height=82&format=webp&quality=90", // Replace with actual logo URL
    projects: 270,
    description: "Emaar Properties is one of the top developers in UAE known for iconic buildings like Burj Khalifa.",
    image: "/src/assets/webimg1.webp", // Replace with actual developer's image URL
  },
  {
    name: "Damac Properties",
    logo: "https://cdn.excelproperties.ae/media/developer/logo/damac.webp?width=137&height=82&format=webp&quality=90",
    projects: 212,
    description: "Damac Properties offers luxurious properties across Dubai and beyond.",
    image: "https://via.placeholder.com/600x400",
  },
  {
    name: "Binghatti Developers",
    logo: "https://cdn.excelproperties.ae/media/developer/logo/arada.webp?width=137&height=82&format=webp&quality=90",
    projects: 77,
    description: "Binghatti Developers are known for innovative and affordable housing projects.",
    image: "https://via.placeholder.com/600x400",
  },
  {
    name: "Meraas",
    logo: "https://cdn.excelproperties.ae/media/developer/logo/meraas.webp?width=137&height=82&format=webp&quality=90",
    projects: 72,
    description: "Meraas is a Dubai-based holding company creating urban living experiences.",
    image: "https://via.placeholder.com/600x400",
  },
  {
    name: "Sobha Group",
    logo: "https://cdn.excelproperties.ae/media/developer/logo/arada.webp?width=137&height=82&format=webp&quality=90",
    projects: 65,
    description: "Sobha Group develops premium residential and commercial spaces.",
    image: "https://via.placeholder.com/600x400",
  },
  {
    name: "Aldar Properties",
    logo: "https://cdn.excelproperties.ae/media/developer/logo/arada.webp?width=137&height=82&format=webp&quality=90",
    projects: 60,
    description: "Aldar Properties is a leading Abu Dhabi-based real estate developer.",
    image: "https://via.placeholder.com/600x400",
  },
];

export default function Developers() {
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);

  return (
    <div className="p-6 max-w-7xl mx-auto mt-[15vw] lg:mt-[5vw]">
      <h1 className="text-2xl lg:text-3xl font-bold mb-4">Top Developers in UAE</h1>
      <p className="text-gray-600 mb-6">Real Estate in Popular Developers</p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer bg-white"
            onClick={() => setSelectedDeveloper(dev)}
          >
            <img src={dev.logo} alt={dev.name} className="h-20 mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-center">{dev.name}</h2>
            <p className="text-gray-500 text-center">{dev.projects} Projects</p>
          </div>
        ))}
      </div>

      {/* Selected Developer Details */}
      {selectedDeveloper && (
        <div className="mt-10 p-6 border rounded-lg shadow bg-gray-50">
          {/* Dynamic Logo */}
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={selectedDeveloper.logo}
              alt={`${selectedDeveloper.name} Logo`}
              className="h-16 w-16 object-contain rounded-full border"
            />
            <h2 className="text-xl font-bold">{selectedDeveloper.name}</h2>
          </div>

          {/* Dynamic Image */}
          <img
            src={selectedDeveloper.image}
            alt={selectedDeveloper.name}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          {/* Description */}
          <p className="text-gray-700 mt-4">{selectedDeveloper.description}</p>

          {/* Close Button */}
          {/* <button
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={() => setSelectedDeveloper(null)}
          >
            Close
          </button> */}
          <button
class="px-5 py-2 relative rounded-md group overflow-hidden font-medium bg-transparent border-2 text-black mt-5" >
<span
class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-zinc-900 group-hover:h-full opacity-90"></span>
<span class="relative group-hover:text-white text-sm font-semibold" onClick={() => setSelectedDeveloper(null)}>Close</span>
</button>
        </div>
      )}
    </div>
  );
}
