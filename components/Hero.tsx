"use client";

import { useLayoutEffect, useRef } from "react";
import { FaLocationArrow, FaDownload } from "react-icons/fa6";
import * as THREE from "three"; // Import Three.js
import { motion, useAnimate } from "framer-motion";
import { Button } from "./ui/MovingBorders";

const Hero: React.FC = () => {
  const [scope, animate] = useAnimate();
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // Type definition for canvasRef

  // Ensure scope is passed correctly to animate
  useLayoutEffect(() => {
    animate(scope.current?.querySelectorAll("p"), { duration: 1, delay: 0.5 });
  }, [scope, animate]);

  // Function to create the star field
  const createStarField = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current!,
      alpha: true,
    }); // Enable alpha for transparency
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Set clear color to transparent

    // Create stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });

    const starsCount = 1000;
    const positions = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000; // z
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    camera.position.z = 5;

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.001; // Rotate the stars
      renderer.render(scene, camera);
    };

    animate();
  };

  useLayoutEffect(() => {
    if (canvasRef.current) {
      createStarField(); // Create stars only if the canvas is available
    }
  }, []);

  return (
    <div className="relative pb-20 pt-36 overflow-hidden" ref={scope}>
      {/* Canvas for Three.js with transparent background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>

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

          {/* Subtitle */}
          <p className="text-center tracking-wider mb-4 mt-2 text-sm md:text-lg lg:text-4xl">
            Hi! I&apos;m{" "}
            <span className="text-green-400 font-semibold">SAHAN</span>, a
            Software Engineer with 2 Years of experience based in SriLanka.
          </p>

          {/* Call-to-Action Button */}
          <div className="flex gap-4 items-center">
            <a href="#contact" className="mt-6">
              <button className="relative flex items-center gap-2 px-6 py-2 text-sm sm:px-8 sm:py-3 sm:text-base lg:px-12 lg:py-3 lg:text-lg text-white font-semibold rounded-md bg-gradient-to-r from-green-400 to-green-600 shadow-lg hover:shadow-green-500/60 transition duration-300 ease-in-out">
                Hire Me
                <FaLocationArrow className="text-white" />
                <span className="absolute inset-0 rounded-full bg-green-400 opacity-20 blur-md animate-pulse"></span>
              </button>
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1zBwYy61sgTwXUJs1kE4E1LpI5WpinWcI"
              download="Sahan_Nawarathne_CV"
              className="mt-6"
            >
              <button className="relative flex items-center gap-2 px-6 py-2 text-sm sm:px-8 sm:py-3 sm:text-base lg:px-12 lg:py-3 lg:text-lg text-white font-semibold rounded-md border-2 border-green-400 hover:border-green-600 transition duration-300 ease-in-out bg-transparent">
                Download CV
                <FaDownload className="text-green-400" />
                <span className="absolute inset-0 rounded-md border-green-400 opacity-30 blur-sm animate-pulse"></span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
