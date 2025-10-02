"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  iconLists: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  projectUrl,
  iconLists,
}) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer relative w-full max-w-[380px] h-[520px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl group bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-[#0a0a1f] dark:via-[#1a1a3e] dark:to-[#2a1a4e]"
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple via-cyan-500 to-purple bg-[length:200%_100%] animate-gradient-x p-[2px]">
        <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-[#0a0a1f] dark:via-[#1a1a3e] dark:to-[#2a1a4e]" />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Image Section - Fixed Height */}
        <div className="relative w-full h-[220px] overflow-hidden rounded-t-3xl flex-shrink-0">
          <Image 
            src={imageUrl} 
            alt={`Preview of ${title}`} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
            priority={false}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          {/* Quick Action Button - Only External Link */}
          {projectUrl && (
            <motion.a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute top-4 right-4 p-3 bg-white/95 hover:bg-white rounded-full shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="View live project"
            >
              <FaExternalLinkAlt className="w-4 h-4 text-purple" />
            </motion.a>
          )}

          {/* Project Category Badge */}
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-md border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white text-xs font-semibold shadow-lg">
              {iconLists.length} Technologies
            </span>
          </div>
        </div>

        {/* Content Section - Fixed Heights with flex-grow */}
        <div className="flex-1 flex flex-col p-6 text-gray-900 dark:text-white">
          {/* Title - Fixed height with clamp */}
          <h3 className="text-xl font-bold mb-3 h-[56px] line-clamp-2 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple transition-all duration-300">
            {title}
          </h3>
          
          {/* Description - Fixed height with clamp */}
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 h-[60px] line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* Tech Stack Icons - Fixed height */}
          <div className="mb-4 h-[40px]">
            <div className="flex items-center gap-2 flex-wrap">
              {iconLists.slice(0, 5).map((icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative w-8 h-8 rounded-lg bg-gray-200 dark:bg-white/10 border border-gray-300 dark:border-white/20 p-1.5 hover:bg-gray-300 dark:hover:bg-white/20 hover:scale-110 transition-all duration-300"
                >
                  <img
                    src={icon}
                    alt={`Technology ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))}
              {iconLists.length > 5 && (
                <div className="w-8 h-8 flex items-center justify-center text-[10px] bg-gray-200 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg font-bold text-cyan-600 dark:text-cyan-400">
                  +{iconLists.length - 5}
                </div>
              )}
            </div>
          </div>

          {/* Spacer to push button to bottom */}
          <div className="flex-1" />

          {/* Action Button - Always at bottom */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push(`/projects/${id}`)}
            className="w-full py-3.5 px-4 bg-gradient-to-r from-purple to-cyan-500 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:shadow-purple/50 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
          >
            <span>View Details</span>
            <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>

      {/* Floating particles effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
