"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "/re.svg", level: 95 },
      { name: "Next.js", icon: "/next.svg", level: 90 },
      { name: "TypeScript", icon: "/ts.svg", level: 88 },
      { name: "Tailwind CSS", icon: "/tail.svg", level: 92 },
      { name: "Framer Motion", icon: "/framer.webp", level: 85 },
      { name: "JavaScript", icon: "/js-logo.webp", level: 80 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: "/node-js.webp", level: 80 },
      { name: "MongoDB", icon: "/mongodb.webp", level: 45 },
      { name: "Firebase", icon: "/Firebase.webp", level: 35 },
      { name: "PostgreSQL", icon: "/postger.png", level: 50 },
      { name: "Express", icon: "/express.svg", level: 55 },
      { name: "Prisma", icon: "/prisma.webp", level: 0},
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: "/github-142-svgrepo-com.svg", level: 90 },
      { name: "Vercel", icon: "/vercel.svg", level: 88 },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-20" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-center heading dark:text-white text-black-100">
          Technical <span className="text-purple font-bold">Expertise</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Constantly learning and mastering new technologies to build modern, scalable applications
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple to-cyan-500">
              {category.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-purple/10 to-cyan-500/10 dark:from-purple/20 dark:to-cyan-500/20 border border-purple/20 hover:border-purple/50 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    {/* Skill Icon and Name */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-12 h-12 rounded-lg bg-white dark:bg-gray-800 p-2 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg dark:text-white text-gray-900">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.level}% Proficiency
                        </p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.05 + 0.3 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-purple to-cyan-500 rounded-full"
                      />
                    </div>

                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple/0 via-purple/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

