import React from 'react';
import profile_img from "../assets/profile.jpg";

const Hero = () => {
  return (
    <div id='home' className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-4">
      <img
        src={profile_img}
        alt="profile image"
        className="w-40 h-40 md:w-70 md:h-70 rounded-full object-cover mb-6 border-4 border-gray-700"
      />
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        I'm <span className="text-purple-500">Sandip</span> <span className="text-orange-400">Gawali</span>,<br />
        <span className="text-white">MERN Stack developer based in India.</span>
      </h1>
      <p className="text-gray-400 text-lg mb-8">
        I am a frontend developer with hands-on experience building responsive web applications.
      </p>
      <div className="flex gap-4">
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition cursor-pointer">
          Connect with me
        </button>
        <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition cursor-pointer">
          My Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
