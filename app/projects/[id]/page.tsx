"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data";
import Image from "next/image";
import { FaArrowLeft, FaExternalLinkAlt, FaBriefcase, FaCalendar, FaCode } from "react-icons/fa";
import ProjectCarousel from "@/components/sub/ProjectCarousel";
import { motion } from "framer-motion";

const ProjectPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const project = projects.find((proj) => proj.id.toString() === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h2>
          <button
            onClick={() => router.push("/#projects")}
            className="px-6 py-3 bg-gradient-to-r from-purple to-cyan-500 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-7xl">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => router.push("/#projects")}
          className="group mb-8 inline-flex items-center gap-2 px-6 py-3 bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-purple/20 rounded-full hover:bg-purple/20 transition-all duration-300"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300 text-purple" />
          <span className="font-semibold text-gray-900 dark:text-white">Back to Projects</span>
        </motion.button>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple via-cyan-500 to-purple">
            {project.title}
          </h1>
          
          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-purple/10 dark:bg-purple/20 rounded-full border border-purple/30">
              <FaBriefcase className="text-purple" />
              <span className="text-sm font-semibold text-gray-900 dark:text-white">{project.role}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full border border-cyan-500/30">
              <FaCalendar className="text-cyan-500" />
              <span className="text-sm font-semibold text-gray-900 dark:text-white">{project.place}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple/10 to-cyan-500/10 dark:from-purple/20 dark:to-cyan-500/20 rounded-full border border-purple/30">
              <FaCode className="text-purple" />
              <span className="text-sm font-semibold text-gray-900 dark:text-white">{project.iconLists.length} Technologies</span>
            </div>
          </div>

          {/* View Live Button */}
          {project.link && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple to-cyan-500 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-purple/50 transition-all duration-300"
            >
              <FaExternalLinkAlt />
              <span>View Live Project</span>
            </motion.a>
          )}
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden mb-16 shadow-2xl"
        >
          <Image
            src={project.img}
            alt={`Preview of ${project.title}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </motion.div>

        {/* Description and Tech Stack Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-purple/5 to-cyan-500/5 dark:from-purple/10 dark:to-cyan-500/10 rounded-2xl p-8 border border-purple/20">
              <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple to-cyan-500">
                About The Project
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {project.des}
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/5 to-purple/5 dark:from-cyan-500/10 dark:to-purple/10 rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple">
                Detailed Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {project.detailedDes}
              </p>
            </div>
          </motion.div>

          {/* Technologies Used */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-purple/10 to-cyan-500/10 dark:from-purple/20 dark:to-cyan-500/20 rounded-2xl p-8 border border-purple/30 h-full">
              <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple to-cyan-500">
                Technologies Used
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {project.iconLists.map((icon, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative group"
                  >
                    <div className="aspect-square rounded-xl bg-white dark:bg-gray-900 p-4 shadow-lg hover:shadow-2xl border border-purple/20 hover:border-purple/50 transition-all duration-300 flex items-center justify-center">
                      <img
                        src={icon}
                        alt={`Technology ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple to-cyan-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Secondary Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-16 shadow-2xl"
        >
          <Image
            src={project.img2}
            alt={`Additional preview of ${project.title}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </motion.div>

        {/* Project Carousel */}
        {project.carousel && project.carousel.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple to-cyan-500">
              Project Gallery
            </h2>
            <ProjectCarousel carouselImages={project.carousel} />
          </motion.div>
        )}

        {/* Back to Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-12"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-purple/10 to-cyan-500/10 dark:from-purple/20 dark:to-cyan-500/20 rounded-3xl border border-purple/30">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Want to see more projects?
            </h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/#projects")}
              className="px-8 py-4 bg-gradient-to-r from-purple to-cyan-500 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-purple/50 transition-all duration-300"
            >
              Explore All Projects
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectPage;
