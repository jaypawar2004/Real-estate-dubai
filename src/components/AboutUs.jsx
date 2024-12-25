import React, { useState } from 'react';

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container mx-auto grid grid-cols-1 mt-[10vh] lg:grid-cols-2 gap-16 py-8 lg:mt-[5vw] p-10">
      {/* Left Content */}
      <div className="contentLeft">
        <div className="grid grid-cols-2 lg:h-[65vh] md:grid-cols-4 gap-4">
          <div className="imgWrapper relative overflow-hidden rounded-lg shadow-lg hover:translate-y-[-5px] transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1687579521048-217e24217d53?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcxNzl8&ixlib=rb-4.0.3&q=85"
              alt=""
              className="w-full h-full object-cover transform hover:scale-150 transition duration-300"
            />
          </div>
          <div className="imgWrapper relative overflow-hidden rounded-lg shadow-lg hover:translate-y-5 transition duration-300 lg:mt-[5vw]">
            <img
              src="https://images.unsplash.com/photo-1686580546412-80e80519abd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85"
              alt=""
              className="w-full h-full object-cover transform hover:scale-150 transition duration-300"
            />
          </div>
          <div className="imgWrapper relative overflow-hidden rounded-lg shadow-lg hover:translate-y-[-5px] transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1688133338995-a394ce7314e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85"
              alt=""
              className="w-full h-full object-cover transform hover:scale-150 transition duration-300"
            />
          </div>
          <div className="imgWrapper relative overflow-hidden rounded-lg shadow-lg hover:translate-y-5 transition duration-300 lg:mt-[5vw]">
            <img
              src="https://images.unsplash.com/photo-1686354715732-7e4685269a25?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyNzN8&ixlib=rb-4.0.3&q=85"
              alt=""
              className="w-full h-full object-cover transform hover:scale-150 transition duration-300"
            />
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="contentRight">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">About Us</h2>
          <p className="text-base text-gray-800 leading-7">
          Expecting outstanding bespoke service and support from your real estate partner when looking for a home highlights the importance of listening to your needs.

Excel Properties elevates the experience of its clients across all levels, from ordinary to ultra-premium, by making you our priority.

As the ideal starting point, with continued dedication to serving and marketing the unique properties in Dubai since its founding in 2001, we strive to set the benchmark for contemporary luxury real estate with integrated trusted knowledge and local market intelligence.

With our clients, we keep an open and sincere interaction. Until the time of sale or purchase, we strive to our fullest to keep you informed by affirming a straightforward process throughout.

Our Mission
We attribute our success to devising effective strong relationships with clients. By understanding its true value, we’ll shine a light on your real estate investment potential. Packed with market intelligence, an unparalleled track record, and uncanny intuition, we’ll navigate through your real estate venture like our own and help you find your dream future residence or living space that brings you ultimate joy and fulfillment.
            {showMore && (
              <>
                {' '}
                Core Values and Culture
At Le Rose we do it differently. We’ve mastered the nuances of the local markets aligning our business objectives by strongly following these fundamental values:

We serve with an impressive know-how and experience: We lead by passion. Delivering innovative marketing techniques, we ensure reaching our goals with combined efforts and experience

We lead with unrelenting commitment and intergity: We envisage commitment beyond expectation. This way we believe trust is earned in its purest form enriching the lives of our discerning clientele.

We embrace taste, grace, and finesse: We show up with class, by pushing conventional boundaries and shaping our pursuit for creative excellence.

We care about relationships and building them: We aspire to become the biggest advocates to our clients through constant training, professionalism, and unique partner positioning.              </>
            )}
          </p>
          <button
            onClick={handleReadMore}
            className="inline-block text-black p-5 bg-orange-600 lg:w-[10vw] lg:px-6 py-3 rounded-md text-base font-medium hover:bg-orange-700 transition"
          >
            {showMore ? 'Read Less' : 'Read More...'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
