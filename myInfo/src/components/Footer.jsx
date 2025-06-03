import React from 'react';

const Footer  = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Left: Name and Year */}
        <div>
          <h2 className="text-lg font-semibold bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent">
            Sandip Gawali
          </h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved</p>
        </div>

        {/* Center: Social Links */}
        <div className="flex gap-5 text-xl">
          <a
            href="mailto:gawalisandip150@gmail.com"
            className="hover:text-orange-400 transition"
            title="Email"
          >
            📧
          </a>
          <a
            href="https://github.com/Gaawali150/Master"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition"
            title="GitHub"
          >
            💻
          </a>
          <a
            href="https://www.linkedin.com/in/sandip-gawali-490264291/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition"
            title="LinkedIn"
          >
            🔗
          </a>
        </div>

        {/* Right: Location or message */}
        <div>
          <p className="text-sm text-gray-500">Based in Nagpur, India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
