import React from 'react'

const AboutUs = () => {
  return (
    <div> <div className="w-full bg-green-500 h-[50vh] relative">
    <img
      className="w-full h-full object-cover object-center"
      src="https://cdn.excelproperties.ae/static/images/excel-properties-office-inside-view-dubai.webp?width=1280&height=384&format=webp&quality=90"
      alt="Dubai skyline"
    />
    <div className="bg-black w-full h-full absolute top-0 bg-opacity-50 px-9">
      <h1 className="relative top-[80%] text-white text-5xl font-bold font-[realtxt]">
        ABOUT US
      </h1>
    </div>
  </div></div>
  )
}

export default AboutUs