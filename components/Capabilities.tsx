// components/PortfolioGrid.tsx
"use client";
import { PortfolioCard } from "./ui/BrandCard";
import { IoCopyOutline } from "react-icons/io5";
import { EmailCopyCard } from "./ui/EmailCard";

export default function PortfolioGrid() {
  return (
    <main className="min-h-screen bg-[#030014] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {/* Column 1 - Staggered Down */}
        <div className="lg:mt-40">
          <PortfolioCard
            category="Collaboration"
            title="Focusing on people first"
            description="I believe the best results come from open conversations and clear goals."
            bgClass="bg-gradient-to-br from-gray-800 to-gray-950"
          />
        </div>

        {/* Column 2 - Standard Start */}
        <div className="space-y-8">
          <PortfolioCard
            category="Communication"
            title="Always in sync, everywhere"
            description="Distance isn't a barrier. I'm flexible with time zones to keep projects moving."
            bgClass="bg-gradient-to-br from-blue-600/20 to-indigo-950"
          />
          <PortfolioCard
            category="Creativity"
            title="Passion for the craft"
            description="I don't just build, I find joy in the process of creating something new."
            bgClass="bg-gradient-to-br from-purple-900/40 to-black"
          />
        </div>

        {/* Column 3 - Slight Offset */}
        <div className="space-y-8 lg:mt-20">
          <PortfolioCard
            category="Innovation"
            title="Building smarter systems with AI"
            description="Currently teaching machines and exploring new technologies to push the boundaries of what's possible along with AI"
            bgClass="bg-gradient-to-br from-blue-500/20 via-blue-900/20 to-black"
          />
          <EmailCopyCard />
        </div>
      </div>
    </main>
  );
}
