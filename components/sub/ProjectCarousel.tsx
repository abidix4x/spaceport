import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import { carouselImages } from '@/data';

const contentStyle: React.CSSProperties = {
  height: '80vh',
  color: '#fff',
  textAlign: 'center',
  background: 'transparent',
  backgroundSize: 'contain',
  position: 'relative',
  

};

const ProjectCarousel: React.FC = () => (
  <Carousel autoplay arrows autoplaySpeed={3000}>
    {
      carouselImages.map((image, index) => (
        <div className='mt-24'>
        <h3 style={contentStyle}>
          <Image 
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