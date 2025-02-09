// "use client";

import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  iconLists: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  projectUrl,
  iconLists,
}) => {
  const router = useRouter();

  return (
    <div
      className="cursor-pointer relative max-w-sm rounded-[22px] aspect-card w-[320px] overflow-hidden shadow-lg transition-transform duration-200 hover:scale-105"
      style={{
        background: `linear-gradient(135deg, #000319 0%, #cbacf9 100%)`,
      }}
      onClick={() => router.push(`/projects/${id}`)}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6 text-white">
        <h3 className="text-xl font-bold mb-3 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-5 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {iconLists.slice(0, 3).map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt={`icon${index}`}
                className="w-10 h-10 rounded-full border border-white/[.2] bg-black p-2"
              />
            ))}
            {iconLists.length > 3 && (
              <div className="w-10 h-10 flex items-center justify-center text-sm bg-black border border-white/[.2] rounded-full">
                +{iconLists.length - 3}
              </div>
            )}
          </div>

          <a
            href={projectUrl}
            target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-normal bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[27px] shadow-lg transition-shadow hover:shadow-xl"
          >
            View <FaExternalLinkAlt className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
