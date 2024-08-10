"use client"
import Approach from "@/components/main/Approach";
import Footer from "@/components/main/Footer";
import Grid from "@/components/main/Grid";
import Hero from "@/components/main/Hero";
import RecentProjects from "@/components/main/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip
    mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full z-40">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Approach/>
        <Footer/>
      </div>
    </main>
      );
}
