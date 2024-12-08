import React from "react";
import { Link } from "react-router-dom";

const PropertyForm = () => {

  return (

  
    <div className="">
<div className="relative mt-[10vh] flex flex-col lg:flex-row items-center justify-between bg-cover bg-center min-h-screen" 
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1727444879868-bbd6e27b1347?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      {/* Left Section */}
      <div className="w-full lg:w-1/2 px-5 lg:pl-16 mb-8 lg:mb-0 text-center lg:text-left">
          <h1 className="text-black text-2xl lg:text-4xl font-bold mb-4">
            LOOKING TO SELL OR RENT YOUR PROPERTY?
          </h1>
          <p className=" text-lg lg:text-xl">
            LIST WITH US TODAY!
          </p>
        </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-[28vw] bg-white p-6 lg:p-8 rounded-lg shadow-lg mx-4 lg:mr-16">
          <form className="space-y-5 lg:space-y-7">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name*
              </label>
              <input
                type="text"
                id="name"
                placeholder="ex: Livia Siphron"
                className="w-full border-2 p-3 mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail*
              </label>
              <input
                type="email"
                id="email"
                placeholder="ex: john@email.com"
                className="w-full border-2 p-3 mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone number*
              </label>
              <div className="relative mt-1">
                <select className="absolute inset-y-0 left-0 pl-3 border-gray-300 bg-gray-50 text-gray-700 rounded-l-md">
                  <option>🇮🇳 +91</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+91 81234 56789"
                  className="w-full border-2 p-3 pl-20 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Property Type Field */}
            <div>
              <label
                htmlFor="propertyType"
                className="block text-sm font-medium text-gray-700"
              >
                Property Type*
              </label>
              <select
                id="propertyType"
                className="w-full border-2 p-3 mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option>Select Property Type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Commercial</option>
              </select>
            </div>

            {/* Area Field */}
            <div>
              <label
                htmlFor="area"
                className="block text-sm font-medium text-gray-700"
              >
                Area*
              </label>
              <input
                type="text"
                id="area"
                placeholder="Area"
                className="w-full border-2 p-3 mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white font-medium py-3 px-4 rounded-md hover:bg-gray-800"
            >
              Submit Listing
            </button>
          </form>
        </div>
    </div>
    <div className="search-container bg-white rounded-lg p-5 max-w-[1350px] mx-auto mt-12 shadow-md relative z-10">
  <div className="tabs flex flex-wrap justify-center gap-4 mb-5">
    {/* Responsive Links */}
    {[
      { text: "Properties for sale Dubai", to: "/home" },
      { text: "Commercial for sale in Dubai", to: "/commercial" },
      { text: "Off-Plan Project for sale in Dubai", to: "/off-plan" },
      { text: "Apartments for sale", to: "/off-plan" },
      { text: "Offplan Apartment for sale", to: "/off-plan" },
      { text: "Villas for sale", to: "/off-plan" },
      { text: "Offplan villas for sale", to: "/off-plan" },
      { text: "Townhouse for sale", to: "/off-plan" },
    ].map((link, index) => (
      <Link
        key={index}
        className="tab-btn bg-transparent border border-gray-300 py-3 px-4 text-base rounded cursor-pointer text-gray-800 transition-all hover:bg-gray-200 active:bg-black active:text-white text-center"
        to={link.to}
        style={{ flex: "1 1 calc(25% - 1rem)" }} // 4 buttons per row with gap
      >
        {link.text}
      </Link>
    ))}
  </div>
</div>

    </div>
  );
};

export default PropertyForm;
