import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HomeSlide.css";

import img1 from "./Home_images/slideImg/slide1.webp";
import img2 from "./Home_images/slideImg/slide2.jpg";
import img3 from "./Home_images/slideImg/slide3.webp";
import img4 from "./Home_images/slideImg/slide4.webp";
import img5 from "./Home_images/slideImg/slide5.webp";
const items = [
   <img className="item" src={img1}></img>,
   <img className="item" src={img2}></img>,
   <img className="item" src={img3}></img>,
   <img className="item" src={img4}></img>,
   <img className="item" src={img5}></img>,
];

export const CarouselPart = () => (
   <div className="sliderimgdiv">
      <Carousel
         autoPlay="true"
         interval="4000"
         transitionTime="1000"
         infiniteLoop={true}
        //  stopOnHover={true}
         showArrows={false}
         showThumbs={false}
        //  showIndicators={false}
         showStatus={false}
      >
         {items.map((e) => e)}
      </Carousel>
   </div>
);
