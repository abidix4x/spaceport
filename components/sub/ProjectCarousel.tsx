import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const contentStyle: React.CSSProperties = {
  height: "80vh",
  color: "#fff",
  textAlign: "center",
  background: "transparent",
  backgroundSize: "contain",
  position: "relative",
};
interface CarouselImage {
  path: string;
  name: string;
}

interface ProjectCarouselProps {
  carouselImages: CarouselImage[]; // Define the prop type
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  carouselImages,
}) => (
  <>
  <div className="flex flex-col">
  <h1 className=" mt-6 text-center font-bold text-black-100 dark:text-white text-3xl">Project Highlights
  </h1>
    <span className="text-center">A glimpse of the key features and designs from the project.</span>
  </div>
  <Carousel
  autoplay
    arrows
    draggable
    lazyLoad="ondemand"
    swipe
    className="cursor-pointer"
    autoplaySpeed={3000}
    >
    {carouselImages.map((image, index) => (
      <>
      <div className="mt-14" key={index}>
        <h3 style={contentStyle}>
          <Image
            key={index}
            src={image.path}
            alt={image.name}
            width={850}
            height={450}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "28px",
            }}
          />
        </h3>
      </div>
      </>
    ))}
  </Carousel>
    </>
);

export default ProjectCarousel;
