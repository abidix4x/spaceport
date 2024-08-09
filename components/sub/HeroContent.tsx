"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../main/MagicButton";

const HeroContent = () => {
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageContainerRef.current) {
        const rect = imageContainerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setGradientPosition({ x, y });
      }
    };

    const imageContainer = imageContainerRef.current;

    if (imageContainer) {
      imageContainer.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (imageContainer) {
        imageContainer.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 w-full z-50 pt-12 lg:pt-24 space-y-10 lg:space-y-0"
    >
      {/* Left Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 mt-10 lg:mt-0">
        <motion.div
          variants={slideInFromTop}
          className="bg-black-200 px-4 py-2 rounded-full border border-purple shadow-lg"
        >
          <h1 className="text-white-100 text-xs lg:text-sm">
            Abidi Ben Hassen
          </h1>
        </motion.div>

        <motion.h2
          variants={slideInFromRight(0.8)}
          className="uppercase text-blue-100 tracking-widest text-xs lg:text-sm"
        >
          Dynamic Web Magic With Next.js
        </motion.h2>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          <span>
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-cyan-500">
              the best
            </span>{" "}
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-gray-400 text-sm sm:text-base md:text-lg max-w-md lg:max-w-lg"
        >
          I&apos;m a Future Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="#projects"
          className="inline-flex items-center text-white bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
        >
          <MagicButton
            title="Explore"
            icon={<FaLocationArrow />}
            position="right"
          />
        </motion.a>
      </div>

      {/* Right Content - Image with Effects */}
      <motion.div
        variants={slideInFromRight(0.8)}
        ref={imageContainerRef}
        className="relative w-full max-w-md lg:max-w-lg aspect-square rounded-full shadow-2xl overflow-hidden transition-transform duration-300"
        style={{
          background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, #cbacf9, #000319)`,
        }}
      >
        <div className="absolute inset-0 border-4 border-purple rounded-full opacity-80 animate-pulse"></div>
        <Image
          src="/me3.png"
          alt="Abidi Ben Hassen"
          height={650}
          width={650}
          priority
          className="relative z-10 rounded-full object-cover shadow-lg"
        />
        <div className="absolute inset-0 border-2 border-white-100 rounded-full opacity-20 animate-spin-slow"></div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
