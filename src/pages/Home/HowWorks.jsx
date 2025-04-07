import React from "react";
import { FaHandHoldingHeart, FaRegCreditCard, FaSmile } from "react-icons/fa";

import { motion } from "framer-motion";

const HowWorks = () => {
  return (
    <div className="max-w-5xl mx-auto text-center py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">How It Works</h2>
      <p className="text-gray-600 mb-8">
        Making a difference is easy! Follow these simple steps to contribute and help those in need.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {[{
          icon: <FaHandHoldingHeart className="text-4xl text-green-500 mx-auto mb-4" />,
          title: "Choose a Cause",
          description: "Select a fundraising campaign that resonates with you."
        }, {
          icon: <FaRegCreditCard className="text-4xl text-blue-500 mx-auto mb-4" />,
          title: "Make a Donation",
          description: "Donate securely with multiple payment options."
        }, {
          icon: <FaSmile className="text-4xl text-yellow-500 mx-auto mb-4" />,
          title: "See the Impact",
          description: "Your contribution makes a difference in someone's life."
        }].map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-6 border rounded-lg shadow-md"
          >
            {step.icon}
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default HowWorks;
