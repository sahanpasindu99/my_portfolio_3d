"use client";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Button } from "./ui/MovingBorders";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // change the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative mt-8 mb-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Sahan Nawarathne
          </p> */}

          {/* Image with border and shadow effect */}
          {/* <div className="relative mt-6 w-[6rem] md:w-[9rem] lg:w-[11rem]">
            <div className="p-1 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              <img
                src="/dp/wapp-dp.jpeg" // Replace with the correct image path
                alt="Sahan Nawarathne"
                className="rounded-xl w-full h-auto object-cover border-2 border-white shadow-lg shadow-purple-500/50"
              />
            </div>
          </div> */}
          <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="overflow-hidden flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-[1px] border rounded-[1.9rem]">
              {/* Gradient border around image */}
              <div className="relative w-36 md:w-40">
                <img
                  src="/dp/wapp-dp.jpeg"
                  alt="dp"
                  className=" w-full h-auto object-cover"
                  style={{ borderRadius: "1.58rem" }}
                  draggable={false}
                />
              </div>
            </div>
          </Button>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="uppercase tracking-widest !py-2 text-xs text-center text-blue-100 max-w-80"
          >
            Sahan Nawarathne
          </motion.p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider mb-4 mt-2 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m{" "}
            <span className="text-purple font-semibold">SAHAN</span>, a Software
            Engineer based in Sri Lanka.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
