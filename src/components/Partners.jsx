import React from 'react'
import ContactPage from './ContactPage'
import FeedBack from './FeedBack'

const Partners = () => {
  return (
//    
<div>
  {/* <!-- Partners Section --> */}
  <div className="py-16 relative top-8 ">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Partners</h2>
      <p className="text-gray-800 mb-8">
        To locate the ideal property investment for you in Dubai, we engage in <br /> joint ventures with well-reputable local partners.
      </p>
      <div className="overflow-hidden flex items-center justify-center relative w-full h-[10vh] ">
        {/* <!-- Scrolling Wrapper --> */}
        <div className="flex animate-scroll gap-8">
          <img src="https://cdn.excelproperties.ae/media/developer/logo/emaar.webp?width=137&height=82&format=webp&quality=90" alt="Partner Logo" className="h-10" />
          <img src="https://cdn.excelproperties.ae/media/developer/logo/arada.webp?width=137&height=82&format=webp&quality=90" alt="Partner Logo" className="h-10" />
          <img src="https://cdn.excelproperties.ae/media/developer/logo/damac.webp?width=137&height=82&format=webp&quality=90" alt="Partner Logo" className="h-10" />
          <img src="https://cdn.excelproperties.ae/media/developer/logo/arada.webp?width=137&height=82&format=webp&quality=90" alt="Partner Logo" className="h-10" />
          <img src="https://cdn.excelproperties.ae/media/developer/logo/meraas.webp?width=137&height=82&format=webp&quality=90" alt="Partner Logo" className="h-10" />
          {/* <!-- Duplicate logos for seamless scrolling --> */}
          <img src="https://cdn.excelproperties.ae/media/developer/logo/emaar.webp?width=137&height=82&format=webp&quality=90" alt="Partner Logo" className="h-10" />
          <img src="https://cdn.excelproperties.ae/media/developer/logo/arada.webp?width=137&height=82&format=webp&quality=90" alt="Partner Logo" className="h-10" />
          <img src="https://cdn.excelproperties.ae/media/developer/logo/damac.webp?width=137&height=82&format=webp&quality=90" alt="Partner Logo" className="h-10" />
          <img src="https://cdn.excelproperties.ae/media/developer/logo/arada.webp?width=137&height=82&format=webp&quality=90" alt="Partner Logo" className="h-10" />
          <img src="https://cdn.excelproperties.ae/media/developer/logo/meraas.webp?width=137&height=82&format=webp&quality=90" alt="Partner Logo" className="h-10" />
          <img src="https://cdn.excelproperties.ae/media/developer/logo/emaar.webp?width=137&height=82&format=webp&quality=90" alt="Partner Logo" className="h-10" />
          <img src="https://cdn.excelproperties.ae/media/developer/logo/arada.webp?width=137&height=82&format=webp&quality=90" alt="Partner Logo" className="h-10" />
          <img src="https://cdn.excelproperties.ae/media/developer/logo/damac.webp?width=137&height=82&format=webp&quality=90" alt="Partner Logo" className="h-10" />
          <img src="https://cdn.excelproperties.ae/media/developer/logo/arada.webp?width=137&height=82&format=webp&quality=90" alt="Partner Logo" className="h-10" />
          <img src="https://cdn.excelproperties.ae/media/developer/logo/meraas.webp?width=137&height=82&format=webp&quality=90" alt="Partner Logo" className="h-10" />
        </div>
      </div>
    </div>
  </div>
  <FeedBack />
  {/* <!-- Join Our Newsletter Section --> */}
  <section className="py-16 border-b-2 relative z-20 border-t-2">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Our Newsletter</h2>
      <p className="text-gray-800 mb-8">
        Join our newsletter for weekly updates on the latest news and exclusive deals.
      </p>
      <div>
      <div className="cir1 absolute border-orange-300 border-[1vw] w-[7vw] h-[7vw] top-0 left-[5vw] rounded-full"></div>
      <div className="cir1 absolute border-orange-300 border-[1vw] w-[5vw] h-[5vw] top-[24vh] left-[62vw] rounded-full"></div>
      <div className="cir1 absolute border-orange-300 border-[1.3vh] w-[3.5vw] h-[3.5vw] top-[19vh] left-[24vw] rounded-full"></div>
                    
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <input
          type="email"
          placeholder="Enter email address"
          className=" backdrop-blur-sm bg-white/30 relative z0 w-full md:w-2/3 px-4 py-3 text-gray-800 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 outline-none mb-4 md:mb-0 md:mr-4"
        />
        <button className="bg-black backdrop-blur-sm bg-black/30 relative z0 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800">
          Subscribe
        </button>
      </div>
      <p className=" text-gray-800 text-sm mt-4">
        <i className="fas fa-lock"></i> We don't spam at all, our promise!
      </p>
    </div>
  </section>
</div>

  )
}

export default Partners