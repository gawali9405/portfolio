import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";


const Contact = () => {
  return (
    <div id="contact" className="bg-black text-white py-16 px-6 md:px-20">
      <h2 className="mt-10 text-center text-4xl font-bold  bg-gradient-to-r from-white via-pink-500 to-purple-500 bg-clip-text text-transparent">
        Get in touch
      </h2>
       <img
          src={theme_pattern}
          alt="theme pattern"
          className="mx-auto mt-4 opacity-40 w-42 mb-8"
        />

      <div className="flex flex-col md:flex-row gap-10 justify-between">
        {/* Left Side - Contact Info */}
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-3xl font-semibold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
            Let’s talk
          </h3>
          <p className="text-gray-400">
            I'm currently available to take on new projects, so feel free to send me a message about
            anything that you want me to work on. You can contact anytime.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-xl">📧</span>
              <p>gawalisandip150@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <p>+91 9405989815</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">📍</span>
              <p>Nagpur, Maharashtra, India</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <form className="md:w-1/2 space-y-6">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Write your message here</label>
            <textarea
              rows={5}
              placeholder="Enter your message"
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 text-black font-semibold py-2 px-6 rounded-md hover:opacity-90 transition"
          >
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;


 