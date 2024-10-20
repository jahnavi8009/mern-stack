// src/components/CarouselSlider.jsx
import React from 'react';
//import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styling
import './components/Carousel.css';


const Carousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        transitionTime={1000}
        showStatus={false}
      >
        <div>
          <img src="https://via.placeholder.com/800x300?text=Slide+1" alt="Slide 1" />
          <p className="legend">Welcome to our Event Management Service</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/800x300?text=Slide+2" alt="Slide 2" />
          <p className="legend">We Plan Unforgettable Moments</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/800x300?text=Slide+3" alt="Slide 3" />
          <p className="legend">Book Your Events with Us</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/800x300?text=Slide+4" alt="Slide 4" />
          <p className="legend">Making Memories Extraordinary</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousel;
