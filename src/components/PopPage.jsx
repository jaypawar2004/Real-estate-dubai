import React, { useState, useEffect } from "react";

const PopPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md mx-4 p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-3 right-3 text-white bg-red-500 hover:bg-red-600 rounded-full p-2 px-[0.9vw] focus:outline-none"
              onClick={handleClose}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Submit Your Details
            </h2>
            <form>
              {/* Name Field */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full border p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Phone Field */}
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number*
                </label>
                <div className="relative">
                  <select className="absolute inset-y-0 left-0 pl-3 pr-6 bg-gray-50 text-gray-700 border-r border-gray-300 rounded-l-md">
                    <option>🇮🇳 +91</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="w-full border p-3 pl-20 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Property Type Field */}
              <div className="mb-4">
                <label
                  htmlFor="propertyType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Property Type*
                </label>
                <select
                  id="propertyType"
                  className="w-full border p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option>Select Property Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Commercial</option>
                </select>
              </div>

              {/* Area Field */}
              <div className="mb-4">
                <label
                  htmlFor="area"
                  className="block text-sm font-medium text-gray-700"
                >
                  Area*
                </label>
                <input
                  type="text"
                  id="area"
                  placeholder="Enter area"
                  className="w-full border p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-all duration-300"
              >
                Submit Listing
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopPage;
