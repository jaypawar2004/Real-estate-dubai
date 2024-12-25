import React, { useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [selectedType, setSelectedType] = useState("All");

  const properties = [
    {
      id: 1,
      type: "Apartments", // Property type
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
      type: "Townhouses", // Property type
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
      type: "Villas", // Property type
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
    {
      id: 4,
      type: "Apartments", // Property type
      image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
      title: "Modern Apartment",
      description: "A beautiful apartment with modern amenities and a great view...",
      bedrooms: 2,
      bathrooms: 2,
      area: "1200 Sq Ft",
      price: "$300,000",
      featured: false,
    },
    {
      id: 5,
      type: "Penthouses", // Property type
      image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
      title: "Modern Penthouse",
      description: "A beautiful apartment with modern amenities and a great view...",
      bedrooms: 2,
      bathrooms: 2,
      area: "1200 Sq Ft",
      price: "$300,000",
      featured: false,
    },
  ];

  // Calculate dynamic counts of each property type
  const propertyCounts = properties.reduce((acc, property) => {
    acc[property.type] = (acc[property.type] || 0) + 1;
    return acc;
  }, {});

  // Convert counts to filter format
  const propertyFilters = Object.entries(propertyCounts).map(([type, count]) => [
    type,
    count,
  ]);

  // Add "All Properties" to the beginning of the filters
  propertyFilters.unshift(["All", properties.length]);

  // Filter properties based on selected type
  const filteredProperties =
    selectedType === "All"
      ? properties
      : properties.filter((property) => property.type === selectedType);

  return (
    <div>
      {/* Hero Section */}
      <div>
      <div className="w-full relative lg:h-[60vh] lg:mt-[0vw] sm:h-[100vh] mt-[20vw]">
      {/* Video Background */}
      <video
        loop
        autoPlay
        muted
        className="relative z-0 w-full h-[50vh] sm:h-full object-cover object-center"
        src="/src/assets/excel-properties-dubai.webm"
        alt=""
      />
      {/* Overlay with Search Container */}
      <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 text-center text-white flex items-center justify-center">
        <div className="w-full absolute items-center top-0 lg:top-28">
          <h1 id="typewriter" className=" text-xl lg:text-3xl font-bold">
            Discover Luxurious Properties for Sale in Dubai
          </h1>
          {/* Dynamic Property Count */}
          <h4>{properties.length} properties available</h4>
        </div>
        <div className="search-container mt-[10vh] h-[25vh] backdrop-blur-sm bg-white/20 rounded-lg w-[90%] max-w-[900px] mx-auto shadow-md z-10 sm:w-[60%] sm:h-[auto] p-1 lg:p-6">
          {/* Tabs */}
          <div className="tabs space-x-2 sm:justify-start gap-3 sm:gap-5 mb-5">
            <Link
              className="tab-btn text-white bg-transparent border border-gray-300 py-2 px-3 sm:px-3 text-sm sm:text-base rounded cursor-pointer transition-all hover:bg-gray-200 active:bg-black active:text-white"
              to="/residential-properties"
            >
              Residential
            </Link>
            <Link
              className="tab-btn bg-transparent border border-gray-300 py-2 px-4 sm:px-5 text-sm sm:text-base rounded cursor-pointer text-white transition-all hover:bg-gray-200 active:bg-black active:text-white"
              to="/commercial"
            >
              Commercial
            </Link>
            <Link
              className="tab-btn bg-transparent border border-gray-300 py-2 px-4 sm:px-5 text-sm sm:text-base rounded cursor-pointer text-white transition-all hover:bg-gray-200 active:bg-black active:text-white"
              to="/off-plan"
            >
              Off Plan
            </Link>
          </div>

          {/* Search Bar */}
          <div className="search-bar flex flex-wrap gap-3 sm:gap-4 items-center justify-center bg-transparent">
            {/* Buy/Rent Dropdown */}
           

            {/* Keyword Search */}
            <input
              className="srch w-[40vw] lg:text-center sm:w-[40%] p-2 border bg-transparent border-gray-300 rounded text-sm sm:text-base"
              type="text"
              placeholder="Search Residential Properties"
            />

            {/* Property Type Dropdown */}
            <select className="dropdown bg-transparent sm:w-[20%] border p-2 rounded">
              <option className="text-zinc-900">Property Type</option>
              <option  className="text-zinc-900">Apartments</option>
              <option className="text-zinc-900">Buildings</option>
              <option className="text-zinc-900">Duplexes</option>
              <option className="text-zinc-900">Mansions</option>
              <option className="text-zinc-900">Penthouses</option>
              <option className="text-zinc-900">Plots</option>
              <option className="text-zinc-900">Townhouses</option>
              <option className="text-zinc-900">Villas</option>
            </select>

            {/* Bedroom Dropdown */}
            <select className="dropdown bg-transparent sm:w-[20%] border p-2 rounded">
              <option className="text-zinc-900" >Bedroom</option>
              <option className="text-zinc-900" >Studio</option>
              <option className="text-zinc-900" >1 Bedroom</option>
              <option className="text-zinc-900" >2 Bedrooms</option>
              <option className="text-zinc-900" >3 Bedrooms</option>
              <option className="text-zinc-900" >4 Bedrooms</option>
              <option className="text-zinc-900" >5 Bedrooms</option>
              <option className="text-zinc-900" >6 Bedrooms</option>
              <option className="text-zinc-900" >7+ Bedrooms</option>
            </select>

            {/* Area Dropdown */}
            <select className="dropdown bg-transparent sm:w-[15%] border p-2 rounded">
              <option>Area</option>
            </select>

            {/* Buttons */}
            <div className="w-full sm:w-auto flex items-center justify-evenly gap-2 mt-3 sm:mt-0">
              <button className="reset-btn w-[30vw] sm:w-auto bg-gray-200 text-black border border-gray-300 px-4 py-2 rounded transition hover:bg-gray-300">
                ↻
              </button>
              <button className="search-btn sm:w-auto bg-black text-white px-4 py-2 rounded transition hover:bg-gray-800">
                🔍 Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>

      {/* Filters Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-zinc-800 ">Filter by Property Types</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {propertyFilters.map(([type, count]) => (
            <button
              key={type}
              className={`px-4 py-2 rounded-lg border ${
                selectedType === type
                  ? "bg-teal-500 text-white"
                  : "bg-white text-gray-700"
              } hover:bg-teal-500 hover:text-white transition`}
              onClick={() => setSelectedType(type)}
            >
              {type === "All" ? "🏠 All Properties" : type} ({count})
            </button>
          ))}
        </div>
      </section>

      {/* Filtered Properties Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-zinc-800 mb-4">Available Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
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
                <div className="absolute inset-0 bg-teal-600 opacity-0 group-hover:opacity-50 transition duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <Link
                    to={`/property/${property.id}`}
                    state={{ property }}
                    className="mt-4 inline-block bg-teal-500 text-white px-4 py-2 rounded text-sm"
                  >
                    View Property
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
                {/* <p className="text-sm text-gray-600 mb-4">
                  {property.description}
                </p> */}
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
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-gray-500">
                    For Sale
                  </span>
                  <span className="text-lg font-bold text-teal-500">
                    {property.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
