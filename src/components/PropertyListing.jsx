// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

// gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

// const PropertyListing = () => {
//   useEffect(() => {
//     // GSAP timeline and ScrollTrigger setup
//     const tl4 = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.property-filters', // The element that triggers the animation
//         start: 'top 5%', // Start when the element is in the middle of the viewport
//         end: '200% 50%', // End when the element has scrolled past the viewport
//         pin: true, // Pins the element in place while scrolling
//         scrub: 1, // Smoothly scrubs the animation with scroll
//         // markers: true, // Enable for debugging (remove for production)
//       },
//     });

//     // Animation for .c-one element
//     tl4.to('.c-one', {
//       marginTop: '-25%', // Move the element up by 25%
//       opacity: 1, // Fade in the element
//     }, 'sct-1');

//     // Clean up ScrollTrigger instances when the component unmounts
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="c-one property-container flex gap-5 w-full mx-auto my-12 p-[5vw]">
//       {/* Property Listing Section */}
//       <div className="property-listing flex-[3] mt-5 w-[70vw]">
//         <div className="flex  justify-between mb-5">
//         <h2 className="text-2xl font-semibold mb-5">Property Listing</h2>
//         <select className="border-2 rounded">
//           <option>Default Order</option>
//           <option>ORDER BY</option>
//           <option>Name</option>
//           <option>Lowest Price</option>
//           <option>Newst</option>
//         </select>
        
//         </div>
//         <div className="property-cards flex flex-wrap gap-5">
          
//               <div
                
//                 className="property-card bg-white rounded-lg shadow-md overflow-hidden w-[48%]"
//               >
//                 <img
//                   src="https://cdn.excelproperties.ae/media/property/residential-commercial/thumbnail/palm_jebel_ali_villas_frond_c_.webp?width=377&height=212&format=webp&quality=90&aspect_ratio=16:9"
//                   alt="Luxury Villa"
//                   className="w-full h-[200px] object-cover"
//                 />
//                 <div className="property-info p-4">
//                   <span className="badge inline-block bg-black text-white text-xs px-3 py-1 mb-3 rounded">
//                     FOR SALE
//                   </span>
//                   <h3 className="text-black text-lg font-semibold">AED 18,700,000</h3>
//                   <p className="text-gray-600 text-sm mt-2 mb-3">
//                     5-Bedroom Villa for Sale at Palm Jebel Ali Frond C
//                   </p>
//                   <div className="property-meta flex justify-between items-center text-gray-500 text-sm">
//                     <span>📍 Palm Jebel Ali</span>
//                     <div className="space-x-2">
//                       <span>🛏️ 5</span>
//                       <span>📐 7882 sqft</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
                
//                 className="property-card bg-white rounded-lg shadow-md overflow-hidden w-[48%]"
//               >
//                 <img
//                   src="https://cdn.excelproperties.ae/media/property/residential-commercial/thumbnail/palm_jebel_ali_villas_frond_c_.webp?width=377&height=212&format=webp&quality=90&aspect_ratio=16:9"
//                   alt="Luxury Villa"
//                   className="w-full h-[200px] object-cover"
//                 />
//                 <div className="property-info p-4">
//                   <span className="badge inline-block bg-black text-white text-xs px-3 py-1 mb-3 rounded">
//                     FOR SALE
//                   </span>
//                   <h3 className="text-black text-lg font-semibold">AED 18,700,000</h3>
//                   <p className="text-gray-600 text-sm mt-2 mb-3">
//                     5-Bedroom Villa for Sale at Palm Jebel Ali Frond C
//                   </p>
//                   <div className="property-meta flex justify-between items-center text-gray-500 text-sm">
//                     <span>📍 Palm Jebel Ali</span>
//                     <div className="space-x-2">
//                       <span>🛏️ 5</span>
//                       <span>📐 7882 sqft</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
                
//                 className="property-card bg-white rounded-lg shadow-md overflow-hidden w-[48%]"
//               >
//                 <img
//                   src="https://cdn.excelproperties.ae/media/property/residential-commercial/thumbnail/palm_jebel_ali_villas_frond_c_.webp?width=377&height=212&format=webp&quality=90&aspect_ratio=16:9"
//                   alt="Luxury Villa"
//                   className="w-full h-[200px] object-cover"
//                 />
//                 <div className="property-info p-4">
//                   <span className="badge inline-block bg-black text-white text-xs px-3 py-1 mb-3 rounded">
//                     FOR SALE
//                   </span>
//                   <h3 className="text-black text-lg font-semibold">AED 18,700,000</h3>
//                   <p className="text-gray-600 text-sm mt-2 mb-3">
//                     5-Bedroom Villa for Sale at Palm Jebel Ali Frond C
//                   </p>
//                   <div className="property-meta flex justify-between items-center text-gray-500 text-sm">
//                     <span>📍 Palm Jebel Ali</span>
//                     <div className="space-x-2">
//                       <span>🛏️ 5</span>
//                       <span>📐 7882 sqft</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
                
//                 className="property-card bg-white rounded-lg shadow-md overflow-hidden w-[48%]"
//               >
//                 <img
//                   src="https://cdn.excelproperties.ae/media/property/residential-commercial/thumbnail/palm_jebel_ali_villas_frond_c_.webp?width=377&height=212&format=webp&quality=90&aspect_ratio=16:9"
//                   alt="Luxury Villa"
//                   className="w-full h-[200px] object-cover"
//                 />
//                 <div className="property-info p-4">
//                   <span className="badge inline-block bg-black text-white text-xs px-3 py-1 mb-3 rounded">
//                     FOR SALE
//                   </span>
//                   <h3 className="text-black text-lg font-semibold">AED 18,700,000</h3>
//                   <p className="text-gray-600 text-sm mt-2 mb-3">
//                     5-Bedroom Villa for Sale at Palm Jebel Ali Frond C
//                   </p>
//                   <div className="property-meta flex justify-between items-center text-gray-500 text-sm">
//                     <span>📍 Palm Jebel Ali</span>
//                     <div className="space-x-2">
//                       <span>🛏️ 5</span>
//                       <span>📐 7882 sqft</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
                
//                 className="property-card bg-white rounded-lg shadow-md overflow-hidden w-[48%]"
//               >
//                 <img
//                   src="https://cdn.excelproperties.ae/media/property/residential-commercial/thumbnail/palm_jebel_ali_villas_frond_c_.webp?width=377&height=212&format=webp&quality=90&aspect_ratio=16:9"
//                   alt="Luxury Villa"
//                   className="w-full h-[200px] object-cover"
//                 />
//                 <div className="property-info p-4">
//                   <span className="badge inline-block bg-black text-white text-xs px-3 py-1 mb-3 rounded">
//                     FOR SALE
//                   </span>
//                   <h3 className="text-black text-lg font-semibold">AED 18,700,000</h3>
//                   <p className="text-gray-600 text-sm mt-2 mb-3">
//                     5-Bedroom Villa for Sale at Palm Jebel Ali Frond C
//                   </p>
//                   <div className="property-meta flex justify-between items-center text-gray-500 text-sm">
//                     <span>📍 Palm Jebel Ali</span>
//                     <div className="space-x-2">
//                       <span>🛏️ 5</span>
//                       <span>📐 7882 sqft</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
                
//                 className="property-card bg-white rounded-lg shadow-md overflow-hidden w-[48%]"
//               >
//                 <img
//                   src="https://cdn.excelproperties.ae/media/property/residential-commercial/thumbnail/palm_jebel_ali_villas_frond_c_.webp?width=377&height=212&format=webp&quality=90&aspect_ratio=16:9"
//                   alt="Luxury Villa"
//                   className="w-full h-[200px] object-cover"
//                 />
//                 <div className="property-info p-4">
//                   <span className="badge inline-block bg-black text-white text-xs px-3 py-1 mb-3 rounded">
//                     FOR SALE
//                   </span>
//                   <h3 className="text-black text-lg font-semibold">AED 18,700,000</h3>
//                   <p className="text-gray-600 text-sm mt-2 mb-3">
//                     5-Bedroom Villa for Sale at Palm Jebel Ali Frond C
//                   </p>
//                   <div className="property-meta flex justify-between items-center text-gray-500 text-sm">
//                     <span>📍 Palm Jebel Ali</span>
//                     <div className="space-x-2">
//                       <span>🛏️ 5</span>
//                       <span>📐 7882 sqft</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
                
//                 className="property-card bg-white rounded-lg shadow-md overflow-hidden w-[48%]"
//               >
//                 <img
//                   src="https://cdn.excelproperties.ae/media/property/residential-commercial/thumbnail/palm_jebel_ali_villas_frond_c_.webp?width=377&height=212&format=webp&quality=90&aspect_ratio=16:9"
//                   alt="Luxury Villa"
//                   className="w-full h-[200px] object-cover"
//                 />
//                 <div className="property-info p-4">
//                   <span className="badge inline-block bg-black text-white text-xs px-3 py-1 mb-3 rounded">
//                     FOR SALE
//                   </span>
//                   <h3 className="text-black text-lg font-semibold">AED 18,700,000</h3>
//                   <p className="text-gray-600 text-sm mt-2 mb-3">
//                     5-Bedroom Villa for Sale at Palm Jebel Ali Frond C
//                   </p>
//                   <div className="property-meta flex justify-between items-center text-gray-500 text-sm">
//                     <span>📍 Palm Jebel Ali</span>
//                     <div className="space-x-2">
//                       <span>🛏️ 5</span>
//                       <span>📐 7882 sqft</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
                
//                 className="property-card bg-white rounded-lg shadow-md overflow-hidden w-[48%]"
//               >
//                 <img
//                   src="https://cdn.excelproperties.ae/media/property/residential-commercial/thumbnail/palm_jebel_ali_villas_frond_c_.webp?width=377&height=212&format=webp&quality=90&aspect_ratio=16:9"
//                   alt="Luxury Villa"
//                   className="w-full h-[200px] object-cover"
//                 />
//                 <div className="property-info p-4">
//                   <span className="badge inline-block bg-black text-white text-xs px-3 py-1 mb-3 rounded">
//                     FOR SALE
//                   </span>
//                   <h3 className="text-black text-lg font-semibold">AED 18,700,000</h3>
//                   <p className="text-gray-600 text-sm mt-2 mb-3">
//                     5-Bedroom Villa for Sale at Palm Jebel Ali Frond C
//                   </p>
//                   <div className="property-meta flex justify-between items-center text-gray-500 text-sm">
//                     <span>📍 Palm Jebel Ali</span>
//                     <div className="space-x-2">
//                       <span>🛏️ 5</span>
//                       <span>📐 7882 sqft</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
                
//                 className="property-card bg-white rounded-lg shadow-md overflow-hidden w-[48%]"
//               >
//                 <img
//                   src="https://cdn.excelproperties.ae/media/property/residential-commercial/thumbnail/palm_jebel_ali_villas_frond_c_.webp?width=377&height=212&format=webp&quality=90&aspect_ratio=16:9"
//                   alt="Luxury Villa"
//                   className="w-full h-[200px] object-cover"
//                 />
//                 <div className="property-info p-4">
//                   <span className="badge inline-block bg-black text-white text-xs px-3 py-1 mb-3 rounded">
//                     FOR SALE
//                   </span>
//                   <h3 className="text-black text-lg font-semibold">AED 18,700,000</h3>
//                   <p className="text-gray-600 text-sm mt-2 mb-3">
//                     5-Bedroom Villa for Sale at Palm Jebel Ali Frond C
//                   </p>
//                   <div className="property-meta flex justify-between items-center text-gray-500 text-sm">
//                     <span>📍 Palm Jebel Ali</span>
//                     <div className="space-x-2">
//                       <span>🛏️ 5</span>
//                       <span>📐 7882 sqft</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
                
//                 className="property-card bg-white rounded-lg shadow-md overflow-hidden w-[48%]"
//               >
//                 <img
//                   src="https://cdn.excelproperties.ae/media/property/residential-commercial/thumbnail/palm_jebel_ali_villas_frond_c_.webp?width=377&height=212&format=webp&quality=90&aspect_ratio=16:9"
//                   alt="Luxury Villa"
//                   className="w-full h-[200px] object-cover"
//                 />
//                 <div className="property-info p-4">
//                   <span className="badge inline-block bg-black text-white text-xs px-3 py-1 mb-3 rounded">
//                     FOR SALE
//                   </span>
//                   <h3 className="text-black text-lg font-semibold">AED 18,700,000</h3>
//                   <p className="text-gray-600 text-sm mt-2 mb-3">
//                     5-Bedroom Villa for Sale at Palm Jebel Ali Frond C
//                   </p>
//                   <div className="property-meta flex justify-between items-center text-gray-500 text-sm">
//                     <span>📍 Palm Jebel Ali</span>
//                     <div className="space-x-2">
//                       <span>🛏️ 5</span>
//                       <span>📐 7882 sqft</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
           
//         </div>
//       </div>

//       {/* Types Filter Section */}
//       <div className="property-filters flex-col mt-5 border-l-2 space-x-2 w-[25vw] h-screen">
//         <h2 className="text-2xl font-semibold mb-5">Types</h2>
//         <ul className="space-y-3 text-black cursor-pointer">
//           {[
//             ["🏢 Apartments", 183],
//             ["🏘️ Townhouses", 22],
//             ["🏡 Villas", 19],
//             ["🏙️ Penthouses", 7],
//             ["🛤️ Plots", 4],
//             ["🏠 Duplexes", 3],
//             ["🏗️ Buildings", 3],
//           ].map(([type, count], index) => (
//             <li
//               key={index}
//               className="flex justify-between items-center text-sm"
//             >
//               <span>{type}</span>
//               <span>{count}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default PropertyListing;

// import React from 'react'

// const PropertyListing = () => {
//   return (
//     <div>PropertyListing</div>
//   )
// }

// export default PropertyListing
import React from "react";
import { Link } from "react-router-dom";

const PropertyListing = () => {
  const properties = [
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg",
      title: "Home In Merrick Way",
      description:
        "Enchanting three bedrooms, three bath home with spacious one bedroom, one bath...",
      bedrooms: 3,
      bathrooms: 3,
      area: "4300 Sq Ft",
      price: "$540,000",
      featured: true,
    },
    {
      id: 2,
      image: "https://cdn.pixabay.com/photo/2014/07/31/00/30/vw-beetle-405876__340.jpg",
      title: "Villa In Alexandria",
      description: "Enjoy serenity of Deering Bay whole day from this spectacular North and...",
      bedrooms: 3,
      bathrooms: 3.5,
      area: "3500 Sq Ft",
      price: "$825,000",
      featured: false,
    },
    {
      id: 3,
      image: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg",
      title: "Villa In Cairo",
      description:
        "The very best waterfront location in Tahrir square and beside many cool places",
      bedrooms: 3,
      bathrooms: 2,
      area: "1800 Sq Ft",
      price: "$410,000",
      featured: false,
    },
  ];

  return (
    <div className="container mt-[20vw] mx-auto px-4 py-8 lg:mt-[5vw]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white shadow-md rounded-lg overflow-hidden relative group"
          >
            {property.featured && (
              <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold py-1 px-3 rounded-full z-10">
                Featured
              </span>
            )}
            <div className="relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{property.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-gray-500">For Sale</span>
                <span className="text-lg font-bold text-teal-500">
                  {property.price}
                </span>
              </div>
              <Link
                to={`/property/${property.id}`}
                state={{ property }}
                className="mt-4 inline-block bg-teal-500 text-white px-4 py-2 rounded text-sm"
              >
                View Property
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyListing;
