"use client";

import React, { ReactElement, ReactNode, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  iconLists: string[]; // New prop to accept an array of icon URLs
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  projectUrl,
  iconLists,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const handleRouting =()=>{
    router.push(`/projects/${id}`)
  }
  return (
    <motion.div
      className="cursor-pointer relative max-w-sm rounded-[22px] aspect-card w-[320px] overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105"
      style={{
        background: isHovered
          ? `linear-gradient(135deg, #cbacf9 0%, #000319 100%)`
          : `linear-gradient(135deg, #000319 0%, #cbacf9 100%)`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleRouting}
    >
      {/* Project Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 transform hover:scale-110"
        />
      </div>

      {/* Card Content */}
      <div className="p-6 text-white">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-sm text-gray-300 mb-5">{description}</p>

        <div className="flex items-center justify-between">
          {/* Icons List */}
          <div className="flex items-center cursor-pointer">
            {iconLists.map((icon, index) =>
              index < 3 ? (
                <div
                  key={index}
                  className="border border-white/[.2] rounded-full bg-black cursor-pointer  lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * index + 2}px)`,
                  }}
                >
                  <img
                    src={icon}
                    alt={`icon${index}`}
                    className="p-2 !hover:scale-110"
                  />
                </div>
              ) : (
                []
              )
            )}
            <div
                  
                  className="border border-white/[.2] rounded-full bg-black cursor-pointer  lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 3}px)`,
                  }}
                >
                  <span>+{iconLists.length-3}</span>
                </div>
          </div>
          <a
            href={projectUrl}
            target="_blank"
            
            className="z-50 inline-flex items-center px-2 py-2 text-sm font-normal text-nowrap bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[27px] shadow-lg transition-shadow duration-400 hover:filter:drop-shadow(2px_4px_3px_black) hover:scale-105 cursor-pointer border"
          > 
            View Project <FaExternalLinkAlt className="ml-2" />
          </a>
        </div>
      </div>

      {/* Glowing Shadow */}
      <div
        className="absolute inset-0 rounded-lg shadow-lg transition-all duration-500"
        style={{
          boxShadow: isHovered
            ? `0 0 20px rgba(203, 172, 249, 0.7), 0 0 30px rgba(0, 3, 25, 0.5)`
            : `0 0 10px rgba(203, 172, 249, 0.3), 0 0 20px rgba(0, 3, 25, 0.2)`,
        }}
      ></div>
    </motion.div>
  );
};

export default ProjectCard;
