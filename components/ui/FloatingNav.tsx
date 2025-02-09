"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";
import ThemeToggler from "../main/ThemeToggler";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const navItems = [
  { name: "Home", link: "#hero", icon: <FaHome /> },
  { name: "About", link: "#about", icon: <FaUser /> },
  { name: "Projects", link: "#projects", icon: <FaProjectDiagram /> },
  { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
];

export const FloatingNav = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        role="navigation"
        aria-label="Main Navigation"
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-6 inset-x-0 mx-auto px-10 py-2 rounded-full border border-black/10 shadow-lg items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          background: "radial-gradient(circle, #a472ed 0%, #000319 100%)",
          border: "2px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={idx}
            href={navItem.link}
            className="relative text-neutral-50 items-center flex space-x-1 dark:text-white hover:text-neutral-300 dark:hover:text-neutral-500"
            aria-label={navItem.name}
            
          >
            <span className="icon sm:hidden px-2 text-xl" aria-hidden="true">
              {navItem.icon}
            </span>
            <span className="nav-item-text text-sm cursor-pointer font-bold">
              {navItem.name}
            </span>
          </Link>
        ))}
        <ThemeToggler />
      </motion.nav>
    </AnimatePresence>
  );
};
