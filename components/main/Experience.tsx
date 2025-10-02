"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Freelance Frontend Developer",
    company: "Upwork & Fiverr",
    period: "Feb 2022 - Present",
    description: "Delivered 50+ successful projects for international clients, specializing in React, Next.js, and modern web technologies. Maintained a 100% satisfaction rate.",
    highlights: [
      "Built responsive websites for clients in Chile, UK, and USA",
      "Specialized in React, Next.js, and TypeScript development",
      "Managed full project lifecycle from design to deployment",
    ],
    icon: <FaBriefcase className="w-5 h-5" />,
  },
  {
    id: 2,
    type: "work",
    title: "Frontend Developer",
    company: "Red Movilidad (Chile)",
    period: "Aug 2023",
    description: "Developed and optimized the public transport management website serving millions of users in Santiago, Chile.",
    highlights: [
      "Implemented responsive UI for real-time transport tracking",
      "Optimized performance for high-traffic public service",
      "Collaborated with backend team for seamless integration",
    ],
    icon: <FaBriefcase className="w-5 h-5" />,
  },
  {
    id: 3,
    type: "work",
    title: "Frontend Developer",
    company: "BleepBleeps (UK)",
    period: "Feb - Apr 2023",
    description: "Developed an e-commerce platform for smart family gadgets with focus on user experience and modern design.",
    highlights: [
      "Created interactive product showcases",
      "Implemented shopping cart and checkout flow",
      "Ensured cross-browser compatibility",
    ],
    icon: <FaBriefcase className="w-5 h-5" />,
  },
  {
    id: 4,
    type: "education",
    title: "Software Engineering Student",
    company: "Higher Institute of Mathematics and Informatics of Monastir",
    period: "2021 - Present",
    description: "Pursuing degree in Software Engineering with focus on web development, algorithms, and software architecture.",
    highlights: [
      "Specialized in web technologies and software development",
      "Active participant in coding competitions",
      "Strong foundation in computer science fundamentals",
    ],
    icon: <FaGraduationCap className="w-5 h-5" />,
  },
];

const Experience = () => {
  return (
    <section className="py-20" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-center heading dark:text-white text-black-100">
          Professional <span className="text-purple font-bold">Journey</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
          Building digital experiences and growing as a developer
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto px-4">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple via-purple/50 to-cyan-500" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              <div className="flex items-start gap-4 md:gap-0">
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-purple to-cyan-500 shadow-lg"
                  />
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`ml-20 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-purple/10 to-cyan-500/10 dark:from-purple/20 dark:to-cyan-500/20 border border-purple/20 hover:border-purple/50 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    {/* Type badge */}
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple to-cyan-500 text-white text-sm font-semibold mb-3 ${
                        index % 2 === 0 ? "md:float-right" : "md:float-left"
                      }`}
                    >
                      {exp.icon}
                      {exp.type === "work" ? "Work" : "Education"}
                    </div>

                    <div className="clear-both">
                      {/* Period */}
                      <p className="text-sm text-purple font-semibold mb-2">
                        {exp.period}
                      </p>

                      {/* Title */}
                      <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-1">
                        {exp.title}
                      </h3>

                      {/* Company */}
                      <p className="text-md text-gray-600 dark:text-gray-400 font-medium mb-3">
                        {exp.company}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span className="text-purple mt-1">▪</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple/0 via-purple/5 to-cyan-500/0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

