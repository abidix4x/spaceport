"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data";
import Image from "next/image";
import { FaArrowAltCircleLeft, FaExternalLinkAlt } from "react-icons/fa";
import ProjectCarousel from "@/components/sub/ProjectCarousel";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

const ProjectPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const project = projects.find((proj) => proj.id.toString() === id);

  if (!project) {
    return <p className="text-lg text-gray-700 dark:text-gray-300">Project not found</p>;
  }

  return (
    <div className="container mx-auto py-20 px-4">
     
      {/* Project Title */}
      <button
          onClick={() => router.push("/#projects")}
          className="bg-transparent left-5 absolute top-5"
          aria-label="Back to projects list"
          >
          <FaArrowAltCircleLeft className="text-black text-[40px]  font-bold z-10"/> 
        </button>
      
      <h1 className="text-4xl font-bold mb-6 dark:text-gray-200 text-gray-900 text-center">
        {project.title}
      </h1>
     

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
        {/* Project Image */}
        <div className="w-full md:w-1/2 h-80 shadow-drop rounded-2xl relative mb-6 md:mb-0 flex justify-center items-center">
          <Image
            src={project.img}
            alt={`Preview of ${project.title}`}
            layout="fill"
            objectFit="contain"
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 md:pl-10">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2 dark:text-gray-200 text-gray-900">
              Technologies Used
            </h2>
            <ul className="flex flex-wrap">
              {project.iconLists.map((icon, index) => (
                <li
                  key={index}
                  className="mr-4 mb-2 shadow-drop rounded-full h-11 w-11 flex justify-center items-center bg-gray-800 dark:bg-gray-100"
                >
                  <img
                    src={icon}
                    alt={`Technology icon ${index + 1}`}
                    className="w-8 h-8"
                  />
                </li>
              ))}
            </ul>
            <p className="dark:text-gray-300 text-gray-800 text-lg mt-4">
              {project.des}
            </p>
          </div>

          {/* Role and Platform */}
          <div>
            <h3 className="text-xl py-3 font-semibold">Role: {project.role}</h3>
            <h4 className="text-lg pb-3 font-medium">
              <span className="font-semibold">Platform & Date: </span>
              {project.place}
            </h4>
          </div>

          {/* View Project Link */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="z-50 inline-flex items-center px-4 py-2 text-md font-medium text-gray-900 dark:text-black bg-white dark:bg-gray-200 hover:bg-gray-100 rounded-[27px] shadow-drop transition-shadow duration-300 cursor-pointer dark:shadow-dropDarkin"
            aria-label={`View ${project.title} live project`}
          >
            View Project Live
            <FaExternalLinkAlt className="ml-2" />
          </a>
        </div>
      </div>

      {/* Detailed Description Section */}
      <div className="flex flex-col mt-20 md:flex-row items-center md:items-start justify-center md:justify-start">
        <div className="w-full md:w-1/2 pl-0">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2 dark:text-gray-200 text-gray-900">
              Detailed Description
            </h2>
            <p className="dark:text-gray-300 text-gray-800 text-lg mt-4">
              {project.detailedDes}
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-80 shadow-drop rounded-2xl relative mb-6 md:mb-0 flex justify-center items-center">
          <Image
            src={project.img2}
            alt={`Additional preview of ${project.title}`}
            layout="fill"
            objectFit="contain"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Project Carousel */}
      <ProjectCarousel carouselImages={project.carousel} />

      {/* Back to Projects Button */}
      <div className="mt-10 text-center">
        <button
          onClick={() => router.push("/#projects")}
          className="text-gray-900 dark:text-black bg-white dark:bg-gray-200 px-6 py-2 rounded-full shadow-drop dark:shadow-dropDarkin dark:hover:bg-gray-300 hover:bg-gray-100 transition-colors duration-300"
          aria-label="Back to projects list"
        >
          Back to Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectPage;
