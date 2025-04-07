import React from 'react';
import aboutImage from '/aboutUs.jpg';

const AboutUs = () => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row items-center justify-between p-0 lg:p-6 ">
 
      <div className="w-full md:w-1/2">
        <img
          src={aboutImage}
          alt="About Us"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Our Mission to Help
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-4">
          At Kindora, we believe in empowering individuals and communities through charitable donations. 
          Our platform offers a seamless experience for donors to contribute to meaningful causes that bring about positive change.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          Join us in making a difference. Every donation counts, and together we can create a lasting impact on 
          the lives of those who need it the most.
        </p>
       
      </div>
    </div>
  );
};

export default AboutUs;
