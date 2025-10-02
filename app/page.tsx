"use client"

import Footer from "@/components/main/Footer";
import Grid from "@/components/main/Grid";
import Hero from "@/components/main/Hero";
import RecentProjects from "@/components/main/RecentProjects";
import Stats from "@/components/main/Stats";
import Skills from "@/components/main/Skills";
import Experience from "@/components/main/Experience";
import CTA from "@/components/main/CTA";
import ScrollProgress from "@/components/main/ScrollProgress";
import { FloatingNav } from "@/components/ui/FloatingNav";


export default function Home() {
  return (
    <main className="relative dark:bg-black-100 flex justify-center items-center flex-col overflow-clip
    mx-auto sm:px-10 px-5 bg-white scroll-smooth">
      <ScrollProgress />
      <div className="max-w-7xl w-full z-40">
        <FloatingNav />
        <Hero/>
        <Stats/>
        <Grid/>
        <Skills/>
        <Experience/>
        <RecentProjects/>
        <CTA/>
        <Footer/>
      </div>
    </main>
      );
}
