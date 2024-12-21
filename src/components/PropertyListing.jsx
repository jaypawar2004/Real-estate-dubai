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
