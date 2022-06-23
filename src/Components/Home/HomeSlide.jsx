import "./HomeSlide.css";

import img1 from "./Home_images/slideImg/slide1.webp";
import img2 from "./Home_images/slideImg/slide2.jpg";
import img3 from "./Home_images/slideImg/slide3.webp";
import img4 from "./Home_images/slideImg/slide4.webp";
import img5 from "./Home_images/slideImg/slide5.webp";
import { Carousel } from "react-bootstrap";

export const Carousel1 = () => {
   return (
      <div className="sliderimgdiv">
         <Carousel>
            <Carousel.Item>
               <img className="d-block w-100" src={img1} alt="First slide" />
            </Carousel.Item>

            <Carousel.Item>
               <img className="d-block w-100" src={img2} alt="Second slide" />
            </Carousel.Item>

            <Carousel.Item>
               <img className="d-block w-100" src={img3} alt="Third slide" />
            </Carousel.Item>

            <Carousel.Item>
               <img className="d-block w-100" src={img4} alt="forth slide" />
            </Carousel.Item>

            <Carousel.Item>
               <img className="d-block w-100" src={img5} alt="fifth slide" />
            </Carousel.Item>
         </Carousel>
      </div>
   );
};
