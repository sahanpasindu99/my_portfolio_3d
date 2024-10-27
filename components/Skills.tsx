"use client";
import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaGithub,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaJava,
} from "react-icons/fa";
import {
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiNestjs,
  SiPostman,
  SiSpringboot,
  SiMysql,
  SiTailwindcss,
  SiCsharp,
  SiPython,
} from "react-icons/si";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React JS", icon: <FaReact className="text-blue-300" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-400" /> },
  { name: "Node JS", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400" /> },
  { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
  { name: "C#", icon: <SiCsharp className="text-purple-500" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "Python", icon: <SiPython className="text-yellow-400" /> },
];

const SkillsComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [skillsPerPage, setSkillsPerPage] = useState(10); // Default value

  useEffect(() => {
    // Determine the number of skills per page based on screen size
    const handleResize = () => {
      setSkillsPerPage(window.innerWidth < 768 ? 6 : 10);
    };

    // Set initial skills per page
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate the skills to display for the current page
  const currentSkills = skills.slice(
    currentPage * skillsPerPage,
    (currentPage + 1) * skillsPerPage
  );

  // Function to scroll up
  const scrollUp = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to scroll down
  const scrollDown = () => {
    if ((currentPage + 1) * skillsPerPage < skills.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="text-center mb-8" id="skills">
        <h1 className="heading">
          My technical <span className="text-green-400">Skills</span>
        </h1>
      </div>
      <div className="bg-none text-white py-12 px-4 md:px-12 relative">
        {/* Skills Section */}
        <div className="relative">
          <div className="grid grid-cols-3 grid-rows-2 md:grid-cols-5 gap-4 mb-8">
            {currentSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-[#04071d] rounded-lg shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out border border-neutral-200 dark:border-slate-800"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="text-center text-sm font-semibold">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-center">
            {/* Scroll Up Button */}
            <button
              onClick={scrollUp}
              disabled={currentPage === 0}
              className={`mb-2 p-2 rounded-full bg-gray-700 text-white shadow-lg hover:bg-gray-600 transition duration-300 ${
                currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <MdKeyboardArrowUp size={24} />
            </button>

            {/* Scroll Down Button */}
            <button
              onClick={scrollDown}
              disabled={(currentPage + 1) * skillsPerPage >= skills.length}
              className={`p-2 rounded-full bg-gray-700 text-white shadow-lg hover:bg-gray-600 transition duration-300 ${
                (currentPage + 1) * skillsPerPage >= skills.length
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <MdKeyboardArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsComponent;
