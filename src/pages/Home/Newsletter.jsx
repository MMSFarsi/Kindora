import React from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const handleSubscription = (e) => {
    e.preventDefault();
    toast.success("Thank you for subscribing to our newsletter!");
    e.target.reset();
  };

  return (
    <div className="border border-gray-300 py-6 px-4 lg:px-8 text-center w-full max-w-[360px] lg:max-w-xl mx-auto my-12 shadow-md rounded-lg ">
      <h2 className="text-lg lg:text-2xl font-bold mb-3">Subscribe to Our Fundraising Newsletter</h2>
      <p className="text-sm text-gray-600 mb-4">
        Stay updated with the latest donation campaigns, success stories, and exclusive fundraising tips.
      </p>
      <form onSubmit={handleSubscription} className="flex flex-col md:flex-row gap-3 items-center">
        <input
          type="email"
          required
          placeholder="Enter your email address"
          className="w-full md:w-2/3 border border-gray-400 rounded-lg px-4 py-2 focus:ring focus:ring-green-300"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
