import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Sandip Logo"
            className="w-[100px] object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-lg">
          <a href="#home" className="hover:text-amber-300 transition">
            Home
          </a>
          <a href="#about" className="hover:text-amber-300 transition">
            About Me
          </a>
          <a href="#projects" className="hover:text-amber-300 transition">
            Projects
          </a>
          <a href="#services" className="hover:text-amber-300 transition">
            Services
          </a>
          <a href="#contact" className="hover:text-amber-300 transition">
            Contact
          </a>
        </div>

        {/* Connect Button */}
        <Link to="/contact">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition">
            Connect with me
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
