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

export const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-6 inset-x-0 mx-auto px-10 py-2 !rounded-full border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          background: "radial-gradient(circle, #CBACF9 0%, #000319 100%)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          border: "2px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-white dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="icon sm:hidden px-2 text-xl">{navItem.icon}</span>
            <span className="nav-item-text text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
        <ThemeToggler />
      </motion.div>
    </AnimatePresence>
  );
};
