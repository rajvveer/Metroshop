// src/components/HeroSection.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Image1 from '../../../Assests/animations/7d08.jpeg'; 
import Image2 from '../../../Assests/eb7ec6677c9e7f769787d781d26027fe.png';
import Image3 from '../../../Assests/animations/mehengaai_mainbanner.jpg';

const HeroSection = () => {
  return (
    <div className="hero-section relative overflow-hidden h-[78vh]">
      <Carousel
        autoPlay
        showArrows={true}
        infiniteLoop
        showStatus={false}
        interval={3000} // Autoplay interval in milliseconds (e.g., 3000ms = 3 seconds)
        transitionTime={700}
        showThumbs={false}
        
      >
        <div>
          <img src={Image1} alt="Image 1" className="w-full h-[77vh] object-cover bg-center" />
        </div>
        <div>
          <img src={Image2} alt="Image 2" className="w-full h-[77vh] object-cover bg-center" />
        </div>
        <div>
          <img src={Image3} alt="Image 3" className="w-full h-[77vh] object-cover bg-center" />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;


