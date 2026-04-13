// components/ui/EmailCopyCard.tsx
"use client";
import { useState } from "react";
import Lottie from "react-lottie";
import { IoCopyOutline } from "react-icons/io5";
import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import { cn } from "@/lib/utils";

export const EmailCopyCard = ({ className }: { className?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "spasindu700@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    // Optional: reset after a few seconds
    setTimeout(() => setCopied(false), 3000);
  };

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2.5rem] p-8 min-h-[240px] flex flex-col justify-between border border-white/10 shadow-2xl",
        className,
      )}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <BackgroundGradientAnimation containerClassName="h-full w-full" />
      </div>

      {/* Content Layer */}
      {/* <div className="relative z-20">
        <span className="bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
          Get in Touch
        </span>
      </div> */}

      <div className="relative z-20 space-y-4">
        <h3 className="text-white text-2xl lg:text-3xl font-bold leading-tight">
          Let&apos;s build something together
        </h3>

        <div className="relative">
          {/* Confetti Animation */}
          <div
            className={`absolute -bottom-5 right-0 ${copied ? "block" : "hidden"}`}
          >
            <Lottie
              options={{ ...defaultOptions, autoplay: copied }}
              height={200}
              width={400}
            />
          </div>

          <MagicButton
            title={copied ? "Email is Copied!" : "Copy my email address"}
            icon={<IoCopyOutline />}
            position="left"
            handleClick={handleCopy}
            otherClasses="!bg-[#161A31] w-full"
          />
        </div>
      </div>
    </div>
  );
};
