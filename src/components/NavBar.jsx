// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <div className="bg-white w-full px-6 lg:px-16 h-[70px] flex items-center justify-between fixed top-0 z-20 border-b shadow-md mt-3">
//         {/* Logo Section */}
//         <div className="w-[70px]">
//           <Link to="/">
//             <img src="/src/assets/LE ROSE LOGO.svg" alt="Logo" />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex navbar items-center">
//           <ul className="flex gap-6 lg:gap-10 text-sm lg:text-base">
//             <Link to="/home" className="hover:text-gray-700 transition">
//               Buy
//             </Link>
//             <Link to="/off-plan" className="hover:text-gray-700 transition">
//               Off Plan
//             </Link>
//             <Link to="/commercial" className="hover:text-gray-700 transition">
//               Commercial
//             </Link>
//             <Link to="/blog" className="hover:text-gray-700 transition">
//               Blog
//             </Link>

//             <li>
//               <select className="dropdown-nav bg-transparent border border-gray-300 rounded-md p-1 text-sm">
//                 <option>More</option>
//                 <option>Developers</option>
//                 <option>Areas</option>
//                 <option>Meet the Team</option>
//                 <option>Contact Us</option>
//                 <option>About Us</option>
//               </select>
//             </li>

//             <li>
//               <select className="dropdown-nav1 border border-gray-300 rounded-md p-1 text-sm">
//                 <option>EN</option>
//                 <option>AR</option>
//                 <option>RU</option>
//               </select>
//             </li>

//             <Link
//               className="bg-black text-white border p-2 rounded-md hover:bg-gray-800 transition"
//               to="/pro"
//             >
//               List your property
//             </Link>
//           </ul>
//         </div>

//         {/* Social Icons Section */}
       

          
//         {/* Mobile Menu Button */}
//         <div className="flex lg:hidden items-center">
//           <button
//             className="text-gray-800 text-xl focus:outline-none"
//             onClick={toggleMenu}
//           >
//             <i className="ri-menu-line"></i>
//           </button>
//         </div>
//       </div>
//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="absolute top-[70px] left-0 w-full bg-white shadow-lg z-10">
//           <ul className="flex flex-col gap-4 p-4 text-sm text-gray-700">
//             <Link to="/home" className="hover:text-gray-900 transition">
//               Buy
//             </Link>
//             <Link to="/off-plan" className="hover:text-gray-900 transition">
//               Off Plan
//             </Link>
//             <Link to="/commercial" className="hover:text-gray-900 transition">
//               Commercial
//             </Link>
//             <Link to="/blog" className="hover:text-gray-900 transition">
//               Blog
//             </Link>

//             <li>
//               <select className="w-full border border-gray-300 rounded-md p-2">
//                 <option>More</option>
//                 <option>Developers</option>
//                 <option>Areas</option>
//                 <option>Meet the Team</option>
//                 <option>Contact Us</option>
//                 <option>About Us</option>
//               </select>
//             </li>

//             <li>
//               <select className="w-full border border-gray-300 rounded-md p-2">
//                 <option>EN</option>
//                 <option>AR</option>
//                 <option>RU</option>
//               </select>
//             </li>

//             <Link
//               className="bg-black text-white border p-2 rounded-md hover:bg-gray-800 transition"
//               to="/pro"
//             >
//               List your property
//             </Link>

//             <div className="flex gap-4 text-gray-600 mt-4 text-lg">
//               <i className="ri-facebook-fill hover:text-gray-800 transition"></i>
//               <i className="ri-instagram-line hover:text-gray-800 transition"></i>
//               <i className="ri-linkedin-fill hover:text-gray-800 transition"></i>
//               <i className="ri-twitter-x-fill hover:text-gray-800 transition"></i>
//               <i className="ri-youtube-line hover:text-gray-800 transition"></i>
//               <i className="ri-phone-line hover:text-gray-800 transition"></i>
//               <i className="ri-whatsapp-line hover:text-gray-800 transition"></i>
//             </div>
//           </ul>
//         </div>
//       )}
//       <div className="bg-black w-full h-[40px] fixed z-20 -top-5 text-white flex items-end justify-end space-x-7 px-[5vw]">
//       <i class="ri-facebook-fill"></i>
// <i class="ri-instagram-line"></i>
// <i class="ri-linkedin-fill"></i>
// <i class="ri-twitter-x-fill"></i>
// <i class="ri-youtube-line"></i>
// <i class="ri-phone-line"></i>
// <i class="ri-whatsapp-line"></i>
//           </div>
//     </>
//   );
// };

// export default NavBar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       {/* Top Black Bar for Social Icons */}
//       <div className="bg-black w-full h-[40px] fixed z-20 top-0 text-white flex items-center justify-end space-x-5 px-5 lg:px-[5vw]">
//         <i className="ri-facebook-fill hover:text-gray-400 cursor-pointer"></i>
//         <i className="ri-instagram-line hover:text-gray-400 cursor-pointer"></i>
//         <i className="ri-linkedin-fill hover:text-gray-400 cursor-pointer"></i>
//         <i className="ri-twitter-x-fill hover:text-gray-400 cursor-pointer"></i>
//         <i className="ri-youtube-line hover:text-gray-400 cursor-pointer"></i>
//         <i className="ri-phone-line hover:text-gray-400 cursor-pointer"></i>
//         <i className="ri-whatsapp-line hover:text-gray-400 cursor-pointer"></i>
//       </div>

//       {/* Navigation Bar */}
//       <div className="bg-white w-full px-4 sm:px-6 lg:px-16 h-[70px] flex items-center justify-between fixed top-[40px] z-20 border-b shadow-md">
//         {/* Logo Section */}
//         <div className="w-[70px]">
//           <Link to="/">
//             <img src="/src/assets/LE ROSE LOGO.svg" alt="Logo" />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex navbar items-center">
//           <ul className="flex gap-4 lg:gap-8 text-sm lg:text-base">
//             <Link to="/home" className="hover:text-gray-700 transition">
//               Buy
//             </Link>
//             <Link to="/off-plan" className="hover:text-gray-700 transition">
//               Off Plan
//             </Link>
//             <Link to="/commercial" className="hover:text-gray-700 transition">
//               Commercial
//             </Link>
//             <Link to="/blog" className="hover:text-gray-700 transition">
//               Blog
//             </Link>

//             <li>
//               <select className="dropdown-nav bg-transparent border border-gray-300 rounded-md p-1 text-sm">
//                 <option>More</option>
//                 <option>Developers</option>
//                 <Link to="/area-guides-in-dubai">
//                 <option> Areas</option>
//                 </Link>
                
//                 <option>Meet the Team</option>
//                 <option>Contact Us</option>
//                 <option>About Us</option>
//               </select>
//             </li>

//             <li>
//               <select className="dropdown-nav1 border border-gray-300 rounded-md p-1 text-sm">
//                 <option>EN</option>
//                 <option>AR</option>
//                 <option>RU</option>
//               </select>
//             </li>

//             <Link
//               className="bg-black text-white border p-2 rounded-md hover:bg-gray-800 transition"
//               to="/pro"
//             >
//               List your property
//             </Link>
//           </ul>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="flex lg:hidden items-center">
//           <button
//             className="text-gray-800 text-2xl focus:outline-none"
//             onClick={toggleMenu}
//           >
//             <i className="ri-menu-line"></i>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="absolute top-[110px] left-0 w-full bg-white shadow-lg z-10 lg:hidden">
//           <ul className="flex flex-col gap-4 p-4 text-sm text-gray-700">
//             <Link to="/home" className="hover:text-gray-900 transition">
//               Buy
//             </Link>
//             <Link to="/off-plan" className="hover:text-gray-900 transition">
//               Off Plan
//             </Link>
//             <Link to="/commercial" className="hover:text-gray-900 transition">
//               Commercial
//             </Link>
//             <Link to="/blog" className="hover:text-gray-900 transition">
//               Blog
//             </Link>

//             <li>
//               <select className="w-full border border-gray-300 rounded-md p-2">
//                 <option>More</option>
//                 <option>Developers</option>
//                 <Link className="text-red-500" to="/area-guides-in-dubai">Areas</Link>
//                 <option>Meet the Team</option>
//                 <option>Contact Us</option>
//                 <option>About Us</option>
//               </select>
//             </li>

//             <li>
//               <select className="w-full border border-gray-300 rounded-md p-2">
//                 <option>EN</option>
//                 <option>AR</option>
//                 <option>RU</option>
//               </select>
//             </li>

//             <Link
//               className="bg-black text-white border p-2 rounded-md hover:bg-gray-800 transition"
//               to="/pro"
//             >
//               List your property
//             </Link>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default NavBar;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    if (value === "Areas") {
      navigate("/area-guides-in-dubai");
    } else if (value === "Developers") {
      navigate("/developers");
    } else if (value === "Meet the Team") {
      navigate("/meet-the-team");
    } else if (value === "Contact Us") {
      navigate("/contact-us");
    } else if (value === "About Us") {
      navigate("/about-us");
    }
  };

  return (
    <>
      {/* Wrapper for Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-30 ">
  
      {/* Main Navbar */}
        <div className="backdrop-blur-sm bg-white/30 w-full px-4 sm:px-6 lg:px-16 h-[75px] flex items-center lg:justify-evenly border-b shadow-md sm:flex justify-between">
          {/* Logo Section */}
          <div className="w-[65px] h-[65px] rounded-full">
            <Link to="/">
              <img className="object-cover object-center w-full h-full" src="/src/assets/LE ROSE LOGO.svg" alt="Logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center  ">
            <ul className="flex gap-4 lg:gap-8 text-sm lg:text-base">
              <Link to="/home" className=" hover:text-gray-100 transition hover:scale-105">
                Buy
              </Link>
              <Link to="/off-plan" className="hover:text-white transition hover:scale-105">
                Off Plan
              </Link>
              <Link to="/commercial" className="hover:text-gray-100 transition hover:scale-105">
                Commercial
              </Link>
              <Link to="blogpage" className="hover:text-gray-100 transition hover:scale-105">
                Blog
              </Link>

              <li>
                <select
                  className="dropdown-nav bg-transparent rounded-md p-1 w-[5vw] text-sm"
                  onChange={handleSelectChange}
                >
                  <option value="">More</option>
                  <option value="Developers">Developers</option>
                  <option value="Areas">Areas</option>
                  <option value="Meet the Team">Meet the Team</option>
                  <option value="Contact Us">Contact Us</option>
                  <option value="About Us">About Us</option>
                </select>
              </li>

              <li>
                <select className="dropdown-nav1 rounded-md p-1 text-sm bg-transparent">
                  <option>EN</option>
                  <option>AR</option>
                  <option>RU</option>
                </select>
              </li>

            </ul>
          </div>
            <div className="hidden lg:flex items-center">

              <button
class="px-5 py-2 relative rounded-md group overflow-hidden font-medium bg-transparent border-2 text-black">
<span
class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-zinc-900 group-hover:h-full opacity-90"></span>
<Link to='/pro'><span class="relative group-hover:text-white text-sm font-semibold">List your property</span></Link>
</button>
            </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              className="text-gray-800 text-2xl focus:outline-none"
              onClick={toggleMenu}
            >
              <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[110px] left-0 w-full bg-white shadow-lg z-10 lg:hidden">
            <ul className="flex flex-col gap-4 p-4 text-sm text-gray-700">
              <Link to="/home" className="hover:text-gray-900 transition">
                Buy
              </Link>
              <Link to="/off-plan" className="hover:text-gray-900 transition">
                Off Plan
              </Link>
              <Link to="/commercial" className="hover:text-gray-900 transition">
                Commercial
              </Link>
              <Link to="/blog" className="hover:text-gray-900 transition">
                Blog
              </Link>

              <li>
                <select
                  className="w-full border border-gray-300 rounded-md p-2"
                  onChange={handleSelectChange}
                >
                  <option value="">More</option>
                  <option value="Developers">Developers</option>
                  <option value="Areas">Areas</option>
                  <option value="Meet the Team">Meet the Team</option>
                  <option value="Contact Us">Contact Us</option>
                  <option value="About Us">About Us</option>
                </select>
              </li>

              <li>
                <select className="w-full border border-gray-300 rounded-md p-2">
                  <option>EN</option>
                  <option>AR</option>
                  <option>RU</option>
                </select>
              </li>

              <Link
                className="bg-black text-white border p-2 rounded-md hover:bg-gray-800 transition"
                to="/pro"
              >
                List your property
              </Link>
            </ul>
          </div>
        )}
      </div>

      {/* Main Content Wrapper */}
      {/* <div className="pt-[110px] overflow-y-auto">
        Replace with actual page content
        <p>Your main content goes here...</p>
      </div> */}
    </>
  );
};

export default NavBar;

