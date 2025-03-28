import React from 'react';
import bannerImg from '/bannerImg.png'; 

const Banner = () => {
  return (
    <div className="flex items-center justify-between p-8 bg-gray-100">
      <div className="w-1/2">
        <img src={bannerImg} alt="Banner" className="w-full h-auto object-cover" />
      </div>

      <div className="w-1/2 pl-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Better donor engagement and conversions
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Online forms, fundraising pages, and native integrations that help you engage donors, manage giving, and increase your revenue.
        </p>
        <button className="btn bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Banner;
