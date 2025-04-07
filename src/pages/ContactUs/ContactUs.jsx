import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-4xl min-h-screen mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <p className="text-gray-600 mb-6">
        Have any questions? Feel free to reach out to us.
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
          required
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-[#46D89F] text-white px-6 py-2 rounded-lg hover:bg-[#3bcf8d] transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;