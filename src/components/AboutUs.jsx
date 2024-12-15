import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 mt-[10vh] lg:grid-cols-2 gap-16 py-8 lg:mt-[5vw] p-10">
      {/* Left Content */}
      <div className="contentLeft">
        <div className="grid grid-cols-2 lg:h-[65vh] md:grid-cols-4 gap-4">
          <div className="imgWrapper relative overflow-hidden rounded-lg shadow-lg hover:translate-y-[-5px] transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1687579521048-217e24217d53?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcxNzl8&ixlib=rb-4.0.3&q=85"
              alt=""
              className="w-full h-full object-cover transform hover:scale-150 transition duration-300"
            />
          </div>
          <div className="imgWrapper relative overflow-hidden rounded-lg shadow-lg hover:translate-y-5 transition duration-300 lg:mt-[5vw]">
            <img
              src="https://images.unsplash.com/photo-1686580546412-80e80519abd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85"
              alt=""
              className="w-full h-full object-cover transform hover:scale-150 transition duration-300"
            />
          </div>
          <div className="imgWrapper relative overflow-hidden rounded-lg shadow-lg hover:translate-y-[-5px] transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1688133338995-a394ce7314e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85"
              alt=""
              className="w-full h-full object-cover transform hover:scale-150 transition duration-300"
            />
          </div>
          <div className="imgWrapper relative overflow-hidden rounded-lg shadow-lg hover:translate-y-5 transition duration-300 lg:mt-[5vw]">
            <img
              src="https://images.unsplash.com/photo-1686354715732-7e4685269a25?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyNzN8&ixlib=rb-4.0.3&q=85"
              alt=""
              className="w-full h-full object-cover transform hover:scale-150 transition duration-300"
            />
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="contentRight">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">About Us</h2>
          <p className="text-base text-gray-800 leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex ullam saepe, totam dicta fuga provident. Fuga, labore porro? Dolorem unde, explicabo atque voluptatum laborum harum, quas velit voluptates sit rerum non ullam laboriosam iusto ad sequi hic soluta consequatur quaerat! 
          </p>
          <a
            href="#"
            className="inline-block text-black p-5 bg-orange-600 lg:w-[10vw] lg:px-6 py-3 rounded-md text-base font-medium hover:bg-orange-700 transition"
          >
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
