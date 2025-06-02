import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import profile_img from "../assets/profile.jpg";

const About = () => {
  return (
    <div className="p-6 md:p-12 bg-black text-white min-h-screen">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white">About Me</h1>
        <img
          src={theme_pattern}
          alt="theme pattern"
          className="mx-auto mt-4 opacity-40"
        />
      </div>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profile_img}
            alt="Sandip Gawali"
            className="rounded-2xl shadow-lg w-64 h-auto"
          />
        </div>

        {/* Bio & Skills */}
        <div>
          <p className="text-lg mb-4 text-gray-200">
            Hi, I'm <strong>Sandip Gawali</strong> — a passionate MERN Stack
            Developer currently pursuing MCA. I specialize in building scalable
            web applications with <strong>React.js</strong>,{" "}
            <strong>Node.js</strong>, and <strong>MongoDB</strong>. I enjoy
            solving real-world problems with elegant, secure, and maintainable
            code.
          </p>
          <p className="text-md text-gray-400 mb-4">
            Currently interning at{" "}
            <strong>Babhale Infotech Solutions LLP</strong>, working on
            responsive UI development with React.js.
          </p>

          {/* Skills */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "HTML",
              "CSS",
              "Tailwind",
              "JavaScript",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "SQL",
              "Redux",
              "Supabase",
              "JWT",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-zinc-900 p-3 rounded-lg shadow text-center text-sm font-semibold text-gray-100 hover:scale-105 hover:text-amber-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="about-achievement bg-zinc-800 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Certifications
          </h2>

          <ul className="list-disc list-inside text-gray-300">
            <li>MERN Stack Development – NGPIT (2024–2025)</li>
            <li>6G Networks – NPTEL, IIT (2025)</li>
          </ul>
        </div>

        <div className="about-achievement bg-zinc-800 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Key Projects
          </h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>E-Commerce Platform with Admin Dashboard</li>
            <li>Secure Authentication System (JWT + Bcrypt)</li>
            <li>Personal Portfolio Website</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
