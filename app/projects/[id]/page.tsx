"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import ProjectCarousel from "@/components/sub/ProjectCarousel";



const ProjectPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const project = projects.find((proj) => proj.id.toString() === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6 dark:text-white text-black-100 text-center">
        {project.title}
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
        <div className="w-full md:w-1/2 h-80 shadow-drop rounded-2xl relative mb-6 md:mb-0 flex justify-center items-center">
          <Image
            src={project.img}
            alt={project.title}
            layout="fill"
            objectFit="contain"
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 md:pl-10">
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2 dark:text-white text-black-100">
              Technologies Used:
            </h2>
            <ul className="flex flex-wrap ">
              {project.iconLists.map((icon, index) => (
                <li key={index} className="mr-4 mb-2 shadow-drop rounded-full h-11 w-11 flex justify-center items-center bg-[#28252a] dark:bg-black-100">
                  <img src={icon} alt={`icon${index}`} className="w-8 h-8" />
                </li>
              ))}
            </ul>
            <p className="dark:text-gray-300 text-black-100 text-lg mt-4">
              {project.des}
            </p>
          </div>

          <a
            href={project.link}
            target="_blank"
            className="z-50 inline-flex items-center px-2 py-2 text-sm font-normal text-black-100 text-nowrap dark:bg-white hover:bg-gray-100 rounded-[27px] shadow-drop transition-shadow duration-400 cursor-pointer dark:shadow-dropDarkin"
          >
            View Project Live<FaExternalLinkAlt className="ml-2" />
          </a>
        </div>
      </div>




      <div className="flex flex-col mt-20 md:flex-row items-center md:items-start justify-center md:justify-start">
        

        <div className="w-full md:w-1/2 pl-0 ">
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2 dark:text-white text-black-100">
              Detailed Description
            </h2>
            <p className="dark:text-gray-300 text-black-100 text-lg mt-4">
              {project.detailedDes}
            </p>
            
          </div>

          
          
        </div>
        <div className="w-full md:w-1/2 h-80 shadow-drop rounded-2xl relative mb-6 md:mb-0 flex justify-center items-center">
          <Image
            src={project.img2}
            alt={project.title}
            layout="fill"
            objectFit="contain"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>



              <ProjectCarousel carouselImages={project.carousel}/>

      {/* Back Button */}
      <div className="mt-10 text-center">
        <button
          onClick={() => router.push("/#projects")}
          className="text-black-100 bg-white dark:bg-white px-6 py-2 rounded-full shadow-drop dark:shadow-dropDarkin dark:hover:bg-gray-300 hover:bg-gray-100 transition-colors duration-300"
        >
          Back to Projects
        </button>
      </div>

      
    </div>
  );
};

export default ProjectPage;
