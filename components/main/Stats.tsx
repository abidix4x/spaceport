"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaCode, FaProjectDiagram, FaUsers, FaClock } from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaProjectDiagram className="w-8 h-8" />,
    value: 10,
    suffix: "+",
    label: "Projects ",
    description: "Successful deliveries",
  },
  {
    id: 2,
    icon: <FaUsers className="w-8 h-8" />,
    value: 8,
    suffix: "+",
    label: "Happy Clients",
    description: "Worldwide",
  },
  {
    id: 3,
    icon: <FaClock className="w-8 h-8" />,
    value: 3,
    suffix: "+",
    label: "Years Experience",
    description: "Since 2022",
  },
  {
    id: 4,
    icon: <FaCode className="w-8 h-8" />,
    value: 15,
    suffix: "+",
    label: "Technologies",
    description: "Mastered",
  },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold">
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-20" id="stats">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-center heading dark:text-white text-black-100">
          Achievements in <span className="text-purple font-bold">Numbers</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
          Delivering quality and excellence with every project
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-purple/10 to-cyan-500/10 dark:from-purple/20 dark:to-cyan-500/20 border border-purple/20 hover:border-purple/50 transition-all duration-300 shadow-lg hover:shadow-2xl">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-purple to-cyan-500 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
              </div>

              {/* Counter */}
              <div className="text-center mb-2">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-cyan-500">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
              </div>

              {/* Label */}
              <h3 className="text-xl font-bold text-center mb-1 dark:text-white text-gray-900">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                {stat.description}
              </p>

              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple/0 via-purple/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

