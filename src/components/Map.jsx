// import React, { useEffect, useState } from 'react';

// const Map = () => {
//   const [location, setLocation] = useState({
//     latitude: 0,
//     longitude: 0,
//   });

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setLocation({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           });
//         },
//         (error) => {
//           console.error("Error fetching location:", error);
//         }
//       );
//     } else {
//       console.error("Geolocation not supported by this browser.");
//     }
//   }, []);

//   const API_KEY = "YOUR_API_KEY"; // Replace with your actual API key
//   const mapSrc = `https://www.google.com/maps/embed/v1/view?key=${API_KEY}&center=${location.latitude},${location.longitude}&zoom=15&maptype=roadmap`;

//   return (
//     <div className="relative w-full h-96">
//       <iframe
//         className="absolute top-0 left-0 w-full h-full"
//         src={mapSrc}
//         frameBorder="0"
//         style={{ border: 0 }}
//         allowFullScreen=""
//         aria-hidden="false"
//         tabIndex="0"
//       ></iframe>
//     </div>
//   );
// };

// export default Map;

import React from 'react';

const Map = () => {
  return (
    <div className="relative w-full h-96">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31536000!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
}

export default Map;
