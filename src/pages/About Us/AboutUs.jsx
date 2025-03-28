import React from 'react';
import aboutImage from '/aboutUs.jpg';

const AboutUs = () => {
  return (
    <div className="flex items-center justify-between p-12 ">
      <div className="w-1/2">
        <img src={aboutImage} alt="About Us" className="w-full h-auto object-cover rounded-lg shadow-lg" />
      </div>

      <div className="w-1/2 pl-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Our Mission to Help
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          At Kindora, we believe in empowering individuals and communities through charitable donations. Our platform
          offers a seamless experience for donors to contribute to meaningful causes that bring about positive change.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Join us in making a difference. Every donation counts, and together we can create a lasting impact on the lives
          of those who need it the most.
        </p>
        <button className="btn bg-[#46D89F] text-[#343839] py-2 px-6 rounded-md hover:bg-[#3b9f7e]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
