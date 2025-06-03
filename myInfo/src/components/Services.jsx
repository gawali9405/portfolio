import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Build scalable and responsive web applications using the MERN stack (MongoDB, Express, React, Node.js).",
    icon: "🖥️",
  },
  {
    title: "Authentication & Security",
    description:
      "Implement secure user authentication with JWT, Bcrypt, Helmet.js, and CORS.",
    icon: "🔐",
  },
  {
    title: "RESTful API Development",
    description:
      "Create clean and efficient REST APIs for seamless data interaction and integration.",
    icon: "🔗",
  },
  {
    title: "Frontend UI with React",
    description:
      "Design dynamic and responsive interfaces using React.js, Tailwind CSS, and JavaScript.",
    icon: "🎨",
  },
  {
    title: "Admin Dashboards",
    description:
      "Develop feature-rich admin dashboards with authentication and role-based access control.",
    icon: "📊",
  },
  {
    title: "Portfolio & Landing Pages",
    description:
      "Build elegant personal portfolios or landing pages to showcase your or your client’s work.",
    icon: "🌐",
  },
];

const Services = () => {
  return (
    <div className="p-6 md:p-12 bg-black text-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          My Services
        </h1>

        <img
          src={theme_pattern}
          alt="theme pattern"
          className="mx-auto mt-4 opacity-20 w-42"
        />
        <p className="text-gray-400 mt-2">
          Solutions I build for web products & businesses
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-xl transition duration-300 hover:scale-"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-[26px] font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
