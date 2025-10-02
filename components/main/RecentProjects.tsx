"use client";

import { projects } from "@/data";
import ProjectCard from "../ui/ProjectCard";
import { motion } from "framer-motion";

const RecentProjects = () => {
  return (
    <section className="py-20" id="projects" aria-labelledby="recent-projects-heading">
      {/* Accessible Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 id="recent-projects-heading" className="text-center heading dark:text-white text-black-100">
          A small selection of <span className="text-purple font-bold">recent projects</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Explore my portfolio of successful projects delivered for clients worldwide
        </p>
      </motion.div>

      {/* Project Cards Grid */}
      <div
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto px-4"
        role="list"
      >
        {projects.map((item, index) => (
          <div
            key={item.id}
            role="listitem"
            aria-label={`Project: ${item.title}`}
            className="flex justify-center"
          >
            <ProjectCard
              id={item.id}
              title={item.title}
              description={item.des}
              imageUrl={item.img}
              projectUrl={item.link}
              iconLists={item.iconLists}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
