"use client";

import { projects } from "@/data";
import ProjectCard from "../ui/ProjectCard";
import { motion } from "framer-motion";

const RecentProjects = () => {
  return (
    <motion.div
      className="py-20 flex-wrap justify-center"
      id="projects"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-center heading dark:text-white text-black-100">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <motion.div
        className="p-4 mt-10 flex flex-wrap justify-center"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {projects.map((item, i) => (
          <motion.div
            className="p-2"
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
          >
            <ProjectCard
              id={item.id}
              title={item.title}
              description={item.des}
              imageUrl={item.img}
              projectUrl={item.link}
              iconLists={item.iconLists}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default RecentProjects;
