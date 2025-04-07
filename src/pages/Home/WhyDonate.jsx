import React from "react";
import { motion } from "framer-motion";
import { FaHandHoldingHeart, FaGlobe, FaUsers, FaHandshake } from "react-icons/fa";

const WhyDonate = () => {
  const reasons = [
    {
      icon: <FaHandHoldingHeart className="text-green-500 text-4xl" />,
      title: "Make a Difference",
      description: "Your donation helps provide food, shelter, and medical aid to those in need."
    },
    {
      icon: <FaGlobe className="text-blue-500 text-4xl" />,
      title: "Global Impact",
      description: "Support causes worldwide and be a part of meaningful change."
    },
    {
      icon: <FaUsers className="text-yellow-500 text-4xl" />,
      title: "Community Support",
      description: "Help build stronger communities by supporting local initiatives."
    },
    {
      icon: <FaHandshake className="text-red-500 text-4xl" />,
      title: "Trusted & Transparent",
      description: "We ensure every donation is used responsibly for the intended cause."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto my-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Donate?</h2>
      <p className="text-gray-600 mb-10">
        Your contribution can create lasting change. Here's why you should consider donating.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: -50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }} 
            viewport={{ once: true }}
            className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center"
          >
            {reason.icon}
            <h3 className="text-xl font-semibold mt-4">{reason.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyDonate;
