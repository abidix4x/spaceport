"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../main/MagicButton";
import { useTheme } from "next-themes";

const HeroContent = () => {
  const { theme } = useTheme();
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef(null);
  const isInView = useInView(mainRef, { once: true, margin: "-100px" });

  // Throttled mouse move handler
  useEffect(() => {
    let animationFrameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageContainerRef.current) return;

      animationFrameId = requestAnimationFrame(() => {
        const rect = imageContainerRef.current!.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setGradientPosition({ x, y });
      });
    };

    const imageContainer = imageContainerRef.current;
    if (imageContainer) imageContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (imageContainer) imageContainer.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div 
      ref={mainRef}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 w-full z-50 pt-12 lg:pt-24 space-y-10 lg:space-y-0"
    >
      {/* Left Content */}
      <motion.div
        className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 mt-12 lg:mt-0"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: { staggerChildren: 0.2, delayChildren: 0.2 }
          }
        }}
      >
        {/* Name Badge */}
        <motion.div
          variants={slideInFromTop}
          className="dark:bg-black-200 bg-transparent px-4 py-2 rounded-full border border-purple shadow-lg"
        >
          <h1 className="dark:text-white-100 text-black-100 text-[18px] sm:text-lg font-light">
            Abidi Ben Hassen
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          variants={slideInFromRight(0.8)}
          className="uppercase dark:text-blue-100 tracking-widest text-xs lg:text-sm text-black-100"
        >
          Dynamic Web Magic With Next.js
        </motion.h2>

        {/* Main Title */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-black-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white leading-tight"
        >
          <span>
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-cyan-500">
              the best
            </span>{" "}
            project experience
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="dark:text-gray-400 text-gray-600 text-sm sm:text-base md:text-lg max-w-md lg:max-w-lg"
        >
          I&apos;m a Future Software Engineer with experience in Website,
          Mobile, and Software development as I work freely as a freelancer 
          since 2022. Check out my projects and skills.
        </motion.p>

        {/* Button */}
        <motion.a
          variants={slideInFromLeft(0.6)}
          href="#projects"
          className="inline-flex items-center"
        >
          <MagicButton
            title="Explore"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="text-white"
          />
        </motion.a>
      </motion.div>

      {/* Image Container */}
      <motion.div
        variants={slideInFromRight(0.8)}
        ref={imageContainerRef}
        className="relative w-full max-w-md lg:max-w-lg aspect-square rounded-full shadow-2xl overflow-hidden"
        style={{
          background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, #cbacf9, #000319)`,
        }}
      >
        {/* Optimized Image */}
        <Image
          src={theme === "dark" ? "/me3.webp" : "/me2.webp"}
          alt="Abidi Ben Hassen"
          fill
          sizes="(max-width: 768px) 90vw, 50vw"
          priority
          className="relative z-10 object-cover hover:scale-105 transition-transform duration-300"
        />
        
        {/* Performance Optimized Borders */}
        <motion.div 
          className="absolute inset-0 border-4 border-purple rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ 
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2
          }}
        />
        
        <motion.div 
          className="absolute inset-0 border-2 border-white-100 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;