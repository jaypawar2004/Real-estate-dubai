import React from 'react'

const RequestForm = () => {
  return (
    <div>
 <div className=" text-white min-h-screen flex items-center justify-center py-12 px-6 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            Guidance From Experts: Finding Your Ideal Property
          </h1>
          <p className="text-gray-300 text-lg">
            Our experienced team is here to assist you in making the best real
            estate investment decisions. We provide expert advice and insights
            to help you find the perfect property.
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg mt-8 md:mt-0 md:w-1/3">
          <h2 className="text-xl font-semibold mb-6">
            Our Experts Will Assist You In Purchasing The Best Real Estate.
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full px-4 py-2 text-black rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                className="w-full px-4 py-2 text-black rounded-md"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <div className="flex">
                <span className="bg-gray-200 px-3 py-2 rounded-l-md text-black flex items-center">
                  +91
                </span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="81234 56789"
                  className="w-full px-4 py-2 text-black rounded-r-md"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md"
            >
              Request a free call back
            </button>
          </form>
        </div>
      </div>
    </div>

    </div>
  )
}

export default RequestForm