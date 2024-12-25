import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
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
        <div className=" bg-white w-full px-4 sm:px-6 lg:px-16 h-[75px] flex items-center lg:justify-evenly border-b shadow-md sm:flex justify-between">
          {/* Logo Section */}
          <div className="w-[65px] h-[65px] rounded-full">
            <Link to="/">
              <img className="object-cover object-center w-full h-full" src="/src/assets/LE ROSE LOGO.svg" alt="Logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center  ">
            <ul className="flex gap-4 lg:gap-8 text-sm lg:text-base">
              <Link to="/buy-property" className=" hover:text-gray-600 transition hover:scale-105">
                Buy
              </Link>
              <Link to="/off-plan" className="hover:text-gray-600 transition hover:scale-105">
                Off Plan
              </Link>
              <Link to="/commercial" className="hover:text-gray-600 transition hover:scale-105">
                Commercial
              </Link>
              <Link to="blogpage" className="hover:text-gray-600 transition hover:scale-105">
                Blog
              </Link>

              <li>
                <select
                  className="dropdown-nav bg-transparent rounded-md p-1 w-[5vw] text-sm"
                  onChange={handleSelectChange}
                >
                  <option value="#">More</option>
                  <option value="Developers">Developers</option>
                  {/* <option value="Areas">Areas</option> */}
                  <option value="Meet the Team">Meet the Team</option>
                  <option value="Contact Us">Contact Us</option>
                  <option value="About Us">About Us</option>
                </select>
              </li>
{/* Translate */}
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
          <div className="absolute top-[75px] left-0 w-full bg-white shadow-lg z-10 lg:hidden">
            <ul className="flex flex-col gap-4 p-4 text-sm text-gray-700">
              <Link to="/buy-property" className="hover:text-gray-900 transition">
                Buy
              </Link>
              <Link to="/off-plan" className="hover:text-gray-900 transition">
                Off Plan
              </Link>
              <Link to="/commercial" className="hover:text-gray-900 transition">
                Commercial
              </Link>
              <Link to="/blogpage" className="hover:text-gray-900 transition">
                Blog
              </Link>

              <li>
                <select
                  className="w-full border border-gray-300 rounded-md p-2"
                  onChange={handleSelectChange}
                >
                  <option value="">More</option>
                  <option value="Developers">Developers</option>
                  {/* <option value="Areas">Areas</option> */}
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

