import React from 'react';
import theme_pattern from "../assets/theme_pattern.svg";

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack online store built using MERN Stack with cart, checkout, and admin dashboard. Includes secure authentication using JWT and role-based access.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Redux', 'JWT'],
    link: 'https://forever-3nqg.vercel.app',
  },
  {
    title: 'Authentication System',
    description:
      'Built with Node.js, Express, JWT, and MongoDB, this project implements secure login, registration, and protected routes.',
    tech: ['Node.js', 'Express.js', 'JWT', 'Bcrypt.js', 'Helmet.js'],
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio built with HTML, CSS, and JavaScript, React.js to showcase technical skills and projects.',
    tech: ['HTML', 'CSS', 'JavaScript','React.js'],
    link: 'https://portfolio-nu-rust-34.vercel.app',
  },
];

const MyWork= () => {
  return (
    <div className="p-6 md:p-12 bg-black text-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          My Work
        </h1>
         <img
                  src={theme_pattern}
                  alt="theme pattern"
                  className="mx-auto mt-4 opacity-20 w-42"
                />
        <p className="text-gray-400 mt-2">Projects I've built using modern web technologies</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-800 text-xs px-2 py-1 rounded-full text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-orange-400 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
