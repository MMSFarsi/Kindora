import React from 'react';
import bannerImg from '/bannerImg.png';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={bannerImg}
          alt="Banner"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>


      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Better donor engagement and conversions
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          Online forms, fundraising pages, and native integrations that help you engage donors, 
          manage giving, and increase your revenue.
        </p>
        <Link to={'/event'} className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition duration-300">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Banner;
