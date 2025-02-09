"use client";

import { projects } from "@/data";
import ProjectCard from "../ui/ProjectCard";
import { motion } from "framer-motion";

const RecentProjects = () => {
  return (
    <section className="py-20" id="projects">
      <h1 className="text-center heading dark:text-white text-black-100">
        A small selection of <span className="text-purple">recent projects</span>
      </h1>
      
      <div className="p-4 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-6 justify-items-center">
        {projects.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
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
      </div>
    </section>
  );
};

export default RecentProjects;
