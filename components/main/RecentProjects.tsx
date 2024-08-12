"use client";


import { projects } from "@/data";
import ProjectCard from "../ui/ProjectCard";

const RecentProjects = () => {
  return (
    <div className="py-20 flex-wrap justify-center" id="projects">
      <h1 className=" text-center heading dark:text-white text-black-100">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="p-4 mt-10 flex flex-wrap justify-center">
        {projects.map((item) => (
          <div
            className="p-2"
            key={item.id}
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
    </div>
  );
};

export default RecentProjects;
