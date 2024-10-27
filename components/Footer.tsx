"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  const linktoproject = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="w-full py-20" id="contact">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">
            "In the ever-evolving tech landscape, Sahan strives to
            <span className="text-green-400">
              {" "}
              create seamless user experiences
            </span>{" "}
            that empower individuals and businesses alike."
          </h1>
          <p className="text-gray-600">
            Your success is just an email away.reach out to discuss!
          </p>
        </div>
        <a href="mailto:sahanpasindu700@gmail.com" className="mb-10">
          {/* <MagicButton
            title="Connect with me"
            icon={<FaLocationArrow />}
            position="right"
          /> */}
          <button className="relative flex items-center gap-2 px-12 py-3 text-white font-semibold rounded-md bg-gradient-to-r from-green-400 to-green-600 shadow-lg hover:shadow-green-500/60 transition duration-300 ease-in-out">
            Connect with me!
            <FaLocationArrow className="text-white" />
            <span className="absolute inset-0 rounded-full bg-green-400 opacity-20 blur-md animate-pulse"></span>
          </button>
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:max-w-2xl">
          <div className="flex justify-center">
            <p className="text-gray-600 font-light text-sm md:text-base">
              © 2024 Sahan Nawarathne. All rights reserved.
            </p>
          </div>

          <div className="flex justify-center md:justify-end gap-6">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 flex justify-center items-center rounded-full border border-gray-300 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                onClick={() => linktoproject(info.link)}
              >
                <img
                  src={info.img}
                  alt="icons"
                  width={20}
                  height={20}
                  className="transition-transform duration-200 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
