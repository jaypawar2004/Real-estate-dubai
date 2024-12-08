import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RequestForm from "./RequestForm";

const PropertyDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract the property details from the state
  const property = location.state?.property;

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
    <div className="container mx-auto px-4 py-8 mt-[5vw]">
      <button
        onClick={() => navigate("/")}
        className="bg-teal-500 text-white px-4 py-2 rounded mb-8"
      >
        Back to Listings
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-auto object-cover rounded"
        />
        <div>
          <h1 className="text-2xl font-bold mb-4 text-gray-100">{property.title}</h1>
          <p className="text-gray-300 mb-6">{property.description}</p>
          <div className="flex justify-between text-sm text-gray-800 mb-4">
            <div className="text-zinc-200">
              <span className="block text-gray-300 font-semibold">Bedrooms</span>
              {property.bedrooms}
            </div>
            <div className="text-zinc-200">
              <span className="block text-gray-300 font-semibold">Bathrooms</span>
              {property.bathrooms}
            </div>
            <div className="text-zinc-200">
              <span className="block text-gray-300 font-semibold">Area</span>
              {property.area}
            </div>
          </div>
          <div className="mt-6">
            <span className="text-lg font-bold text-teal-500">
              {property.price}
            </span>
          </div>
          <p className="text-gray-300 mb-6">{property.description}</p>

        </div>
      </div>
      <RequestForm />
    </div>
  );
};

export default PropertyDetails;