"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 w-full z-50 pt-12 lg:pt-24"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-[50px] text-center">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-2 px-3 border border-[#7042f88b]"
          >
            <h1 className="Welcome-text text-xs lg:text-[13px] w-full">
              Abidi Ben Hassen
            </h1>
          </motion.div>
          <motion.h2
            className="uppercase tracking-widest text-xs text-center text-blue-100 mt-4 lg:mt-0 lg:max-w-80"
            variants={slideInFromRight(0.8)}
          >
            Dynamic Web Magic With Next.js
          </motion.h2>
        </div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base md:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Future Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] bg-gradient-to-r from-purple-500 to-cyan-500"
          href="#about"        >
          <span className="flex flex-row items-center justify-center">Explore <FaLocationArrow/></span>
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 lg:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          priority
          className="w-64 h-64 md:w-96 md:h-96 lg:w-650 lg:h-650"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
