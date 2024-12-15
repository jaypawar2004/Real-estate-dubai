// import React from 'react'

// const Footer = () => {
//   return (
//     <div className='w-full h-[60vh] p-[5vw]'>

//         <div className='flex items-center justify-between relative top-1/2 -translate-y-1/2'>
//             <div className=' w-[30vw] h-full'>
//                 <img className='w-[7vw]' src="/src/assets/LE ROSE LOGO.svg" alt="" />
//                 <p className='text-zinc-400 font-[realtxt] text-sm mt-4'>Located at 1804, Burj Al Salam, 6 Sheikh Zayed Road - Trade Centre 1 - Dubai, Excel Properties is a corporation registered in Dubai, United Arab Emirates.
//                 Post Office Box 211516.</p>
//             </div>
//             <div className=' w-[25vw] h-full text-start ml-10'>
// <h2 className='font-bold text-lg mb-5 '>Properties For Buy</h2>
// <h2 className='text-zinc-400 leading-10'><a href="#">Apartments for Sale</a></h2>
// <h2 className='text-zinc-400 leading-10'>Villas for Sale</h2>
// <h2 className='text-zinc-400 leading-10'>Townhouses for Sale</h2>
// <h2 className='text-zinc-400 leading-10'>Commercial for Sale</h2>
//             </div>
//             <div className=' w-[25vw] h-full text-start'>
// <h2 className='font-bold text-lg mb-5 '>Areas Guides</h2>
// <h2 className='text-zinc-400 leading-10'><a href="#">Palm Jebel Ali</a></h2>
// <h2 className='text-zinc-400 leading-10'>Dubai Harbour</h2>
// <h2 className='text-zinc-400 leading-10'>Jumeirah</h2>
// <h2 className='text-zinc-400 leading-10'>Emaar BeachFront</h2>
//             </div>
//             <div className=' w-[25vw] h-full text-start mb-[2.5vw]'>
// <h2 className='font-bold text-lg mb-5 '>Company</h2>
// <h2 className='text-zinc-400 leading-10'><a href="#">About Us</a></h2>
// <h2 className='text-zinc-400 leading-10'>Meet the Team</h2>
// <h2 className='text-zinc-400 leading-10'>Blog</h2>
//             </div>
            
//         </div>
//         <div className=" text-zinc-400 flex justify-between relative top-[16vh]">
//         <h1 className='text-lg'>2001 - 2024, Excel Real estate broker llc. All right reserved.</h1>
//         <div className='space-x-4 text-sm  text-zinc-400'>
//             <a href="#">Privacy Policy</a>
//             <a href="#">terms & Conditions</a>
//             <a href="#">Contact Us</a>
//         </div>
//         <div className='space-x-4 text-zinc-400'>
//             <a href="#">f</a>
//             <a href="#">in</a>
//             <a href="#">twuteer</a>
//             <a href="#">indeed</a>
//             <a href="#">youtube</a>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Footer
// 

import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-4 md:space-y-0">
        {/* Contact Section */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p className="text-sm">+971 5 0505 1755</p>
          <p className="text-sm">info@leroserealestate.ae</p>
        </div>

        {/* Address Section */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-2">Address</h4>
          <p className="text-sm">
            628 Tamani Arts Building
            <br />
            Business Bay, Dubai, UAE
          </p>
        </div>

        {/* Working Hours Section */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-2">Working hours</h4>
          <p className="text-sm">Monday - Saturday</p>
          <p className="text-sm">09:00 AM - 06:00 PM</p>
          <p className="text-sm">Sunday - Closed</p>
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-2">Follow us</h4>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com/share/X5fGKzq57KhFNpsi/?mibextid=JRoKGi" className="text-amber-500 hover:text-amber-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/lerose.realestate/profilecard/?igsh=b3Zrcmp6cTRvMjg4" className="text-amber-500 hover:text-amber-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/lerose-realestate/" className="text-amber-500 hover:text-amber-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-amber-500 hover:text-amber-400">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
};

export default Footer;

