import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./HomeSlide.css"

import img1 from "./Home_images/slideImg/slide1.webp";
import img2 from "./Home_images/slideImg/slide2.jpg";
import img3 from "./Home_images/slideImg/slide3.webp";
import img4 from "./Home_images/slideImg/slide4.webp";
import img5 from "./Home_images/slideImg/slide5.webp";
const items = [
    
    <img className="item" src={img1} data-value="1"></img>,
    <img className="item" src={img2} data-value="2"></img>,
    <img className="item" src={img3} data-value="3"></img>,
    <img className="item" src={img4} data-value="4"></img>,
    <img className="item" src={img5} data-value="5"></img>,
];

export const Carousel = () => (
    <div className='sliderimgdiv'>
      <AliceCarousel 
        autoPlay
       
        autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
    />
    </div>
);