import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (e) => {
    e.preventDefault();
    const { name, email, number, message } = formData;

    if (name.length < 3) {
      setError("Your name should be at least 3 characters long.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (message.length < 15) {
      setError("Please write a longer message.");
      return;
    }
    if (number.length < 10) {
      setError("Please write a complete number");
      return;
    }

    setError("");
    setSuccess("Thank you! I will get back to you as soon as possible.");
    setTimeout(() => {
      setSuccess("");
      setFormData({ name: "", email: "", number: "", message: "" });
    }, 6000);
  };

  return (
    <div>
      <div className="flex flex-col mt-[20vw] lg:flex-row w-full h-auto lg:mt-[5vw]">
        {/* Left Column */}
        <div
          className="lg:w-2/5 h-64 lg:h-auto bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg')",
          }}
        >
          <img
            className="w-32 lg:w-40 p-4"
            src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/logo.png"
            alt="Logo"
          />
        </div>

        {/* Right Column */}
        <div className="lg:w-3/5 p-6 lg:p-12 bg-white text-gray-800">
          <h1 className="text-2xl lg:text-4xl font-light uppercase tracking-wide mb-4">
            Contact Us
          </h1>
          <p className="text-sm lg:text-base mb-6">
            Planning to visit Indonesia soon? Get insider tips on where to go, things to do and find best deals for your next adventure.
          </p>

          {/* Form */}
          <form onSubmit={validate} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm uppercase mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                required
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent outline-none focus:border-gray-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm uppercase mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Address"
                required
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent outline-none focus:border-gray-500"
              />
            </div>
            <div>
              <label
                htmlFor="number"
                className="block text-sm uppercase mb-2"
              >
                Phone number
              </label>
              <input
                type="number"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Your Phone Number"
                required
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent outline-none focus:border-gray-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm uppercase mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                required
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent outline-none focus:border-gray-500"
              ></textarea>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}

            <button
              type="submit"
              className="w-32 lg:w-40 bg-gray-800 text-white py-2 uppercase text-sm tracking-wide"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
