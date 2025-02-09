"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/utils/cn";
import animationData from "@/data/confetti.json";
import MagicButton from "../main/MagicButton";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 md:grid-row-7 gap-4 lg:gap-6 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}) => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("abidi.benhassen.a@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:scale-105 transition duration-300 dark:shadow-input shadow-none flex flex-col space-y-4",
        className
      )}
      style={{
        background: "radial-gradient(circle, #CBACF9 1%, #000319 100%)",
      }}
    >
      <div className={cn(titleClassName, "relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 z-10")}>
        <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3]">
          {description}
        </div>
        <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold">
          {title}
        </div>
        {id === 6 && (
          <div className="mt-5 relative">
            <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}>
              <Lottie options={defaultOptions} height={200} width={400} />
            </div>
            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="dark:bg-[#161A31] bg-transparent sm:text-lg text-xs"
            />
          </div>
        )}
      </div>
    </div>
  );
};
