import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';


const contentStyle: React.CSSProperties = {
  height: '80vh',
  color: '#fff',
  textAlign: 'center',
  background: 'transparent',
  backgroundSize: 'contain',
  position: 'relative',
};
interface CarouselImage {
  path: string;
  name: string;
}

interface ProjectCarouselProps {
  carouselImages: CarouselImage[]; // Define the prop type
}

const ProjectCarousel: React.FC <ProjectCarouselProps>= ({carouselImages}) => (
  <Carousel autoplay arrows draggable lazyLoad='ondemand' swipe className='cursor-pointer' autoplaySpeed={3000}>
    {
      carouselImages.map((image, index) => (
        <div className='mt-24' key={index}>
        <h3 style={contentStyle}>
          <Image 
           key={index}
           src={image.path}
           alt={image.name} 
           width={850} 
           height={450} 
           style={{ width: '100%',height:'100%',objectFit:'contain',borderRadius:'28px'}} />
        </h3>
      </div>
      ))
    }
  </Carousel>
);

export default ProjectCarousel;