import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";

import BlogPost from './BlogPost';
import blogs from "../data/Blogs";

const StartHome = ({ id, title, description, image }) => {
  const properties = [
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg",
      title: "Home In Merrick Way",
      description:
        "Enchanting three bedrooms, three bath home with spacious one bedroom, one bath... Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis explicabo illum commodi ipsa architecto, sequi quos vitae? Alias nihil placeat vero odit laudantium illo odio fugiat nobis, libero velit molestiae harum nesciunt voluptatum debitis eius expedita neque? Consectetur magni non, reiciendis perferendis, est adipisci quisquam sunt accusantium impedit nostrum aut possimus vero ut aliquam, dignissimos dolorum! Exercitationem voluptatibus porro facere atque assumenda aliquam nostrum dolorem neque repudiandae soluta, consectetur praesentium doloremque in fugit! Earum accusamus culpa dolores! Cupiditate unde eaque tempore! Molestias ex aut nobis facilis neque quae possimus minima. Voluptatum minus iure fugiat officiis quibusdam itaque fuga amet unde ducimus, maxime nulla rerum perspiciatis ullam nemo sed aut, esse voluptatibus odio a libero delectus! Saepe fuga obcaecati tenetur aut numquam minus ex quae maiores vero, nisi, porro ut! Accusamus possimus nisi blanditiis est aliquam itaque! Quas animi est pariatur eius sunt unde enim voluptatibus. Aut inventore repudiandae laboriosam necessitatibus recusandae dolorem, odio perferendis architecto. Distinctio facere odio harum sunt magni iure soluta deleniti ad ex iusto quod laudantium repellendus ut magnam, impedit ea ab quaerat totam ratione? Quis facilis consequatur deserunt maiores, ea dolorum tenetur unde sed iure ducimus neque asperiores exercitationem, libero saepe possimus sit. Mollitia itaque voluptatibus quibusdam nesciunt debitis odio quidem illum, perferendis corporis at iure a nulla voluptates? Cupiditate eius similique, harum provident amet accusamus ratione itaque voluptatem! Assumenda, facere illo aliquid ratione dolorem alias sint possimus modi, optio animi, ipsum totam! Obcaecati at eius earum laudantium, aut optio omnis error repellendus sed ullam ea explicabo magni, aliquam accusamus veniam sunt reiciendis, soluta nisi non rerum saepe ratione! Mollitia quibusdam reiciendis maxime beatae quam recusandae ipsum, doloremque deleniti. Inventore modi nam quibusdam. Praesentium reprehenderit itaque consequuntur optio recusandae rerum atque expedita sit odio modi, quibusdam blanditiis. Dolor nisi asperiores id autem quidem, saepe, sunt, neque deleniti voluptatum in mollitia doloribus quaerat totam error repudiandae maxime a aspernatur quos? Maiores eum odio esse facere, minus eius reiciendis corrupti nam nobis rem sit sequi iure voluptas tempore omnis eveniet! A, unde suscipit incidunt cumque nostrum blanditiis necessitatibus eum provident accusantium deserunt qui error neque excepturi pariatur saepe? Minus, debitis velit nihil eveniet doloribus est nemo voluptas ipsa ut corporis reiciendis dignissimos ad atque laboriosam voluptatem rem veritatis commodi ab voluptatum. Velit sit sint eligendi, soluta minima rem, eius dolorum odio unde dolores possimus, debitis provident recusandae illum et dicta quia quas accusantium exercitationem eos. Deserunt itaque accusamus amet possimus magni quia quibusdam mollitia ab sequi quae. Vel laudantium saepe totam! Non maiores quis eligendi natus sit autem, aspernatur tempore dicta tempora nulla quidem? Eos ratione voluptas doloremque saepe dolores corrupti a voluptatum, et quas! Ut eum rem magni est nemo perspiciatis! Rerum maiores maxime harum deserunt molestiae deleniti dolor consequatur tenetur! Facere dolores adipisci natus fuga harum quae rem, nesciunt ab voluptates nulla optio nam provident culpa alias error, fugit doloremque ipsa. Illum vero suscipit voluptatem ullam blanditiis corrupti quam at! Cumque non a repellat laborum eveniet impedit earum id ad eius! Corporis deserunt praesentium minus exercitationem! ",
      bedrooms: 3,
      location: "Merrick Way",
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
    {
      id: 4,
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
  const words = ["Looking to buy or Sell your Property?", "You've come to the right place."];
  const [index, setIndex] = useState(0); // To track the current word
  const [subIndex, setSubIndex] = useState(0); // To track the current character
  const [isDeleting, setIsDeleting] = useState(false); // To determine if deleting
  const [delay, setDelay] = useState(100); // Delay between typing/deleting
  const [showMore, setShowMore] = useState(false);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Calculate total pages
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  // Slice the properties to show only for the current page
  const currentProperties = properties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers for pagination
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[index];
      
      if (isDeleting) {
        setSubIndex((prev) => prev - 1);

        // If word is deleted, move to the next word
        if (subIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length); // Cycle through words
        }
      } else {
        setSubIndex((prev) => prev + 1);

        // If word is fully typed, start deleting after a short delay
        if (subIndex === currentWord.length) {
          setIsDeleting(true);
          setDelay(1000); // Pause before deleting
        }
      }
    };

    const timer = setTimeout(handleTyping, delay);

    // Adjust typing speed
    setDelay(isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [subIndex, isDeleting, index, delay]);

  return (
    <div className=''>
      
        <div className="w-full relative lg:mt-[0vw] sm:h-[100vh] mt-[20vw]">
  {/* <!-- Video Background --> */}
  
  <video
    loop
    autoPlay
    muted
    className="relative z-0 w-full h-[50vh] sm:h-full object-cover object-center"
    // src="/src/assets/excel-properties-dubai.webm"
    src='/src/assets/Website Content.webm'
    alt=""
  />
  {/* <!-- Overlay with Search Container --> */}
  <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 text-center text-white flex items-center justify-center">
<div className="w-full h-full flex justify-center absolute items-center -top-28 ">
      <h1 id="typewriter" className="text-4xl font-bold">
        {words[index].substring(0, subIndex)}
      </h1>
    </div>
    <div className="search-container mt-[10vh] h-[25vh] w-[100vw] backdrop-blur-sm bg-white/20 rounded-lg lg:w-[90%] lg:max-w-[900px] mx-auto shadow-md z-10 sm:w-[60%] sm:h-[auto] p-1 lg:p-6">
      
      {/* <!-- Tabs --> */}
      <div className="tabs space-x-3 lg:space-x-3 sm:justify-start gap-3 sm:gap-5 mb-5">
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
          className="tab-btn bg-transparent border border-gray-300 py-2 px-2 sm:px-5 text-sm sm:text-base rounded cursor-pointer text-white transition-all hover:bg-gray-200 active:bg-black active:text-white"
          to="/off-plan"
        >
          Off Plan
        </Link>
      </div>

      {/* <!-- Search Bar --> */}
      <div className="search-bar flex flex-wrap gap-1 sm:gap-4 items-center justify-center bg-transparent">
        {/* <!-- Buy/Rent Dropdown --> */}
       
  

        {/* <!-- Keyword Search --> */}
        <input
          className="srch sm:w-[40%] p-2.5 lg:text-center px-4 border bg-transparent w-[43vw] border-gray-300 rounded text-sm sm:text-base"
          type="text"
          placeholder="Search Properties"
        />

        {/* <!-- Property Type Dropdown --> */}
        <select className="dropdown bg-transparent sm:w-[20%] border p-2 rounded">
          <option>Property Type</option>
          <option className='text-zinc-800'>Apartments</option>
          <option className='text-zinc-800'>Buildings</option>
          <option className='text-zinc-800'>Duplexes</option>
          <option className='text-zinc-800'>Mansions</option>
          <option className='text-zinc-800'>Penthouses</option>
          <option className='text-zinc-800'>Plots</option>
          <option className='text-zinc-800'>Townhouses</option>
          <option className='text-zinc-800'>Villas</option>
        </select>

        {/* <!-- Bedroom Dropdown --> */}
      

        {/* <!-- Area Dropdown --> */}
       

        {/* <!-- Buttons --> */}
        <div className="w-full sm:w-auto flex items-center justify-evenly gap-2 mt-3 sm:mt-0">
          <button className="reset-btn w-[30vw] sm:w-auto bg-gray-200 text-black border border-gray-300 px-4 py-2 rounded transition hover:bg-gray-300">
            ↻
          </button>
          <button className="search-btn sm:w-auto bg-black text-white px-4 py-2 rounded transition hover:bg-gray-800">
            🔍Search
          </button>
        </div>
      </div>
    </div>
  </div>
  
</div>

<div className="py-16">
  
    <div className="max-w-7xl mx-auto px-4 text-">
      {/* <!-- Header --> */}
      <div className=" w-full  pt-12 p-4">
      <div className="grid gap-14 md:grid-cols-3 md:gap-5">
        {/* Card 1 */}
        <div className="rounded-xl border-t-2 bg-white p-6 text-center shadow-xl">
          <Link to='/pro'>
          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
            <svg
              viewBox="0 0 33 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
            >
              <path
                d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
                fill="white"
              ></path>
            </svg>
          </div>
          
          <h1 className="text-darken mb-3 capitalize flex items-center justify-center text-xl font-medium lg:px-14">
            List your property
          </h1>
          
          </Link>
        </div>


        {/* Card 2 */}
       <Link to='/developers'>
        <div
          data-aos-delay="150"
          className="rounded-xl bg-white border-t-2 p-6 text-center shadow-xl"
        >
          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
          <svg
              viewBox="0 0 33 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
            >
              <path
                d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <h1 className="text-darken capitalize mb-3 text-xl font-medium lg:px-14">
            top real estate developers in dubai
          </h1>
          
        </div>
       
       </Link>
       <Link to='/residential-properties'>
        <div
          data-aos-delay="150"
          className="rounded-xl bg-white border-t-2 p-6 text-center shadow-xl"
        >
          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-teal-400 shadow-teal-500/40">
          <svg
              viewBox="0 0 33 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
            >
              <path
                d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <h1 className="text-darken mb-3 capitalize text-xl font-medium lg:px-14">
            buy residential property in dubai
          </h1>
          
        </div>
       
       </Link>

        {/* Add Card 3 similarly */}
      </div>
    </div>
      
      <div>
        
      <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-center items-start gap-8 flex">
                        <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                            <h1 className="text-black text-3xl font-bold leading-relaxed">Why Le Rose Real Estate</h1>
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
            <h5 className="text-gray-800 text-xl font-bold font-manrope leading-normal lg:text-start text-center">
                Explore expert real estate services with personalized care tailored to your needs.
            </h5>
            <p className="text-gray-800 text-base font-normal leading-relaxed lg:text-start text-center">
                Welcome to Le Rose Real Estate, your premier real estate partner in Dubai. Founded and
                operated by a dedicated team of Australians, we specialize in both off-plan and ready-to-move-in
                properties, ensuring our clients find the perfect home or investment opportunity.
                {showMore && (
                    <>
                        {" "}
                        We guide you through every step of the buying and selling process. Whether you're seeking a luxurious
                        villa, a modern apartment, or a lucrative investment project, we are here to make your
                        real estate journey seamless and rewarding.
                        <br />
                        At Le Rose Real Estate, we pride ourselves on our personalized service and extensive network,
                        enabling us to match clients with the ideal properties that meet their needs. Our approach focuses on building open and 
                        honest relationships with our clients, ensuring they are informed and empowered at every stage of their real estate journey.
                    </>
                )}
            </p>
            <button
                className="text-blue-500 text-sm mt-2 hover:underline"
            >
            </button>
        </div>
                        </div>
                       
                    </div>
                    <button
                        className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex" 
                        onClick={() => setShowMore(!showMore)}>
                
                        
                        <span
                            className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">                {showMore ? "Read Less" : "Read More"}
</span>
                        <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" stroke-width="1.6"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="w-full lg:justify-start justify-center items-start flex">
                    <div
                        className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                        <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                            src="https://pagedone.io/asset/uploads/1717742431.png" alt="about Us image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
                                            
      </div>


    </div>
  </div>
  <div className="max-w-7xl mx-auto p-6 mt-[5vw]">
    
<div className="text-gray-700 text-lg font-medium mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
  <div>
  <div className="w-full relative">
<p className="text-lg text-gray-800 font-semibold font-manrope">
<span className="bg-gradient-to-r from-indigo-600  to-purple-600  bg-no-repeat bg-bottom p-1 text-white">Featured</span>Properties in Dubai
</p>
</div>
      <span className="text-sm text-zinc-800 font-thin">
        Enjoy our carefully curated selection of some properties as we walk you around them.
      </span>
    
  </div>
  <Link
    className="lg:border-2 text-zinc-700 lg:p-2 lg:text-lg rounded border border-gray-400 px-4 py-2 sm:px-3 sm:py-1 sm:text-sm hover:bg-gray-200 hover:text-zinc-800"
    to="/buy-property"
  >
    More properties
  </Link>
</div>

    {/* <!-- Property Listings Grid --> */}
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProperties.map((property) => (
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
                <span className="text-sm font-bold text-gray-500">For Sale</span>
                <span className="text-lg font-bold text-teal-500">{property.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-4 space-x-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-teal-500 text-white"
            }`}
          >
            Previous
          </button>
          <span className="text-sm font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-teal-500 text-white"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  </div>
  <div className="max-w-7xl mx-auto p-6 mt-[5vw]">
    {/* <!-- Header --> */}
    
<div className="text-gray-300 text-lg font-medium mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
  <div>
  <div className="w-full relative">
<p className="text-lg text-gray-800 font-semibold font-manrope">
<span className="bg-gradient-to-r from-indigo-600  to-purple-600  bg-no-repeat bg-bottom p-1 text-white">Properties</span> For Sale in Dubai
</p>
</div>
      <span className="text-sm text-zinc-800 font-thin">
        Enjoy our carefully curated selection of some properties as we walk you around them.
      </span>
    
  </div>
  <Link
    className="lg:border-2 text-zinc-800 lg:p-2 lg:text-lg rounded border border-gray-400 px-4 py-2 sm:px-3 sm:py-1 sm:text-sm hover:bg-gray-200 hover:text-zinc-800"
    to="/home"
  >
    More properties
  </Link>
</div>

    {/* <!-- Property Listings Grid --> */}
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProperties.map((property) => (
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
                <span className="text-sm font-bold text-gray-500">For Sale</span>
                <span className="text-lg font-bold text-teal-500">{property.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      
    </div>
  </div>
  <div className="max-w-7xl mx-auto p-6 mt-[5vw]">
    {/* <!-- Header --> */}

<div className="text-gray-700 text-lg font-medium mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
  <div>
  <div className="w-full relative">
<p className="text-lg text-gray-800 font-semibold font-manrope">
<span className="bg-gradient-to-r from-indigo-600  to-purple-600  bg-no-repeat bg-bottom p-1 text-white">Off-Plan</span> Properties in Dubai
</p>
</div>
      <span className="text-sm text-zinc-700 font-thin">
        Enjoy our carefully curated selection of some properties as we walk you around them.
      </span>
    
  </div>
  <Link
    className="lg:border-2 text-zinc-700 lg:p-2 lg:text-lg rounded border border-gray-400 px-4 py-2 sm:px-3 sm:py-1 sm:text-sm hover:bg-gray-200 hover:text-zinc-800"
    to="/home"
  >
    More properties
  </Link>
</div>

    {/* <!-- Property Listings Grid --> */}
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProperties.map((property) => (
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
                <span className="text-sm font-bold text-gray-500">For Sale</span>
                <span className="text-lg font-bold text-teal-500">{property.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    <div className="max-w-7xl mx-auto mt-[5vw]">
    {/* <!-- Header --> */}
    <div className="text-gray-700 text-lg font-medium mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
  <div>
  <div className="w-full relative">
<p className="text-lg text-gray-800 font-semibold font-manrope">
<span className="bg-gradient-to-r from-indigo-600  to-purple-600  bg-no-repeat bg-bottom p-1 text-white">Our</span> Blog
</p>
</div>
      <span className="text-sm text-zinc-800 font-thin">
        Enjoy our carefully curated selection of some properties as we walk you around them.
      </span>
    
  </div>
  <Link
    className="lg:border-2 text-zinc-800 lg:p-2 lg:text-lg rounded border border-gray-400 px-4 py-2 sm:px-3 sm:py-1 sm:text-sm hover:bg-gray-200 hover:text-zinc-800"
    to="/blogpage"
  >
    View All Posts
  </Link>
</div>


    {/* <!-- Property Listings Grid --> */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {/* <!-- Property Card --> */}
     
     
      {blogs.map((blog) => (
        <BlogPost
          key={blog.id}
          id={blog.id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
        />
      ))}
 

      {/* <!-- Duplicate the structure for other properties --> */}
     
    
      
    </div>
  </div>
  </div>
</div>

  )
}

export default StartHome