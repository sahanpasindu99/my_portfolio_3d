"use client";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Button } from "./ui/MovingBorders";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="relative pb-20 pt-36 overflow-hidden">
      {/* Spotlights */}
      <div className="absolute inset-0 pointer-events-none z-0">
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

      {/* Grid Background */}
      <div className="absolute inset-0 z-0 dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]">
        <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex justify-center mt-8 mb-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* Image */}
          <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="overflow-hidden flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-[1px] border rounded-[1.9rem]">
              <div className="relative w-36 md:w-40">
                <img
                  src="/dp/wapp-dp.jpeg"
                  alt="Sahan Nawarathne"
                  className="w-full h-auto object-cover rounded-[1.58rem]"
                  draggable={false}
                />
              </div>
            </div>
          </Button>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-widest py-2 text-xs text-center text-blue-100"
          >
            Sahan Nawarathne
          </motion.p>

          {/* Main Title */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          {/* Subtitle */}
          <p className="text-center tracking-wider mb-4 mt-2 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m{" "}
            <span className="text-purple font-semibold">SAHAN</span>, a Software
            Engineer based in Sri Lanka.
          </p>

          {/* Call-to-Action Button */}
          <a href="#about">
            <MagicButton
              position="right"
              title="Show my work"
              icon={<FaLocationArrow />}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
