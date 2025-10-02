"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
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
    if (imageContainer)
      imageContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (imageContainer)
        imageContainer.removeEventListener("mousemove", handleMouseMove);
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
            transition: { staggerChildren: 0.2, delayChildren: 0.2 },
          },
        }}
      >
        {/* Name Badge */}
        <motion.div
          variants={slideInFromTop}
          className="dark:bg-gray-800 bg-gray-100 px-4 py-2 rounded-full border border-purple shadow-lg"
        >
          <p className="dark:text-white text-black text-[18px] sm:text-lg font-medium">
            Abidi Ben Hassen
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          variants={slideInFromRight(0.8)}
          className="uppercase dark:text-blue-200 tracking-widest text-sm lg:text-base text-gray-800 dark:text-gray-300"
        >
          Frontend Developer • React & Next.js Expert
        </motion.h2>

        {/* Main Title */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold dark:text-white leading-tight"
        >
          Crafting{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-cyan-500">
            exceptional
          </span>{" "}
          digital experiences
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="dark:text-gray-300 text-gray-700 text-base sm:text-lg md:text-xl max-w-md lg:max-w-lg"
        >
          Software Engineer specializing in modern web development with 3+ years of experience. 
          Delivered 50+ successful projects for international clients. 
          Passionate about building scalable, user-centric applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={slideInFromLeft(0.6)}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#projects"
            role="button"
            aria-label="Explore Projects"
            className="inline-flex items-center"
          >
            <MagicButton
              title="View My Work"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="text-white"
            />
          </a>
         
        </motion.div>
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
          alt="Portrait of Abidi Ben Hassen"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="relative z-10 object-cover object-center md:object-top hover:scale-105 transition-transform duration-300"
        />

        {/* Performance Optimized Borders */}
        <motion.div
          className="absolute inset-0 border-4 border-purple rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
          }}
          aria-hidden="true"
        />

        <motion.div
          className="absolute inset-0 border-2 border-white rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          aria-hidden="true"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
