"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";

const RecentProjects = () => {
  const linkToProject = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Split your projects into 3 groups for the staggered columns
  const col1 = projects.filter((_, i) => i % 3 === 0);
  const col2 = projects.filter((_, i) => i % 3 === 1);
  const col3 = projects.filter((_, i) => i % 3 === 2);

  return (
    <section id="projects" className="py-20 bg-[#030014]">
      <div className="container mx-auto px-6">
        <h1 className="heading text-center">
          My <span className="text-green-400">recent projects</span>
        </h1>

        {/* The Staggered Grid structure */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10 items-start">
          {/* Column 1 - Pushed down the most */}
          <div className="flex flex-col gap-16 lg:mt-32">
            {col1.map((item) => (
              <ProjectItem key={item.id} item={item} onLink={linkToProject} />
            ))}
          </div>

          {/* Column 2 - Standard height */}
          <div className="flex flex-col gap-16">
            {col2.map((item) => (
              <ProjectItem key={item.id} item={item} onLink={linkToProject} />
            ))}
          </div>

          {/* Column 3 - Pushed down slightly */}
          <div className="flex flex-col gap-16 lg:mt-16">
            {col3.map((item) => (
              <ProjectItem key={item.id} item={item} onLink={linkToProject} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Internal component for the Pin Layout to keep the code clean
const ProjectItem = ({
  item,
  onLink,
}: {
  item: any;
  onLink: (url: string) => void;
}) => (
  <div
    className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
    onClick={() => onLink(item.link)}
  >
    <PinContainer
      title="/github.com/sahanpasindu99"
      href="https://github.com/sahanpasindu99"
    >
      <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
        <div
          className="relative w-full h-full overflow-hidden rounded-3xl"
          style={{ backgroundColor: "#13162D" }}
        >
          <Image src="/bg.png" alt="bg" width={100} height={100} />
        </div>
        <Image
          src={item.img}
          alt="cover"
          layout="fill"
          objectFit="cover"
          className="absolute z-10 transform rotate-1 bottom-0"
        />
      </div>

      <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
        {item.title}
      </h1>

      <p
        className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2 mt-2"
        style={{ color: "#BEC1DD" }}
      >
        {item.des}
      </p>

      <div className="flex items-center justify-between mt-7 mb-3">
        <div className="flex items-center">
          {item.iconLists.map((icon: string, index: number) => (
            <div
              key={index}
              className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center shadow-md"
              style={{ transform: `translateX(-${5 * index + 2}px)` }}
            >
              <Image
                src={icon}
                alt="icon"
                className="p-2"
                width={40}
                height={40}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <p className="flex lg:text-md md:text-xs text-sm text-purple-400 font-medium">
            See more
          </p>
          <FaLocationArrow className="ms-3" color="#CBACF9" />
        </div>
      </div>
    </PinContainer>
  </div>
);

export default RecentProjects;
