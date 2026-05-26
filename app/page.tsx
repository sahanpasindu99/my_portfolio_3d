"use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import SkillsComponent from "@/components/Skills";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const BrandGrid = dynamic(() => import("@/components/Capabilities"), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <BrandGrid />
        <RecentProjects />
        <SkillsComponent />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
