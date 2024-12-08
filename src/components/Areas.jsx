import React from 'react'

const Areas = () => {
  return (
    <div>
        <div className="w-full bg-green-500 h-[30vw] relative">
        <img
          className="w-full h-full object-cover object-center"
          src="https://cdn.excelproperties.ae/static/images/burj-al-arab.webp?width=1280&height=384&format=webp&quality=90"
          alt="Dubai skyline"
        />
        <div className="bg-black w-full h-full absolute top-0 bg-opacity-40 text-center flex items-center justify-center">
          <h1 className="relative text-white text-5xl font-bold font-[realtxt]">
            AREA GUIDES
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Areas