import "./HomeBody.css"

import head1 from "./Home_images/h1.webp";
import head2 from "./Home_images/h2.webp";
import head3 from "./Home_images/h3.webp";
import head4 from "./Home_images/h4.webp";

import img1 from "./Home_images/topimg/img1.webp";
import img2 from "./Home_images/topimg/img2.webp";
import img3 from "./Home_images/topimg/img3.webp";
import img4 from "./Home_images/topimg/img4.webp";
import img5 from "./Home_images/topimg/img5.webp";
import img6 from "./Home_images/topimg/img6.webp";


import brand1 from "./Home_images/brandimg/b1.webp";
import brand2 from "./Home_images/brandimg/b2.webp";
import brand3 from "./Home_images/brandimg/b3.webp";
import brand4 from "./Home_images/brandimg/b4.webp";
import brand6 from "./Home_images/brandimg/b6.webp";
import brand7 from "./Home_images/brandimg/b7.webp";


import budget1 from "./Home_images/budgetimg/bb1.webp";
import budget2 from "./Home_images/budgetimg/bb2.webp";
import budget3 from "./Home_images/budgetimg/bb3.webp";
import budget4 from "./Home_images/budgetimg/bb4.webp";
import budget5 from "./Home_images/budgetimg/bb5.jpg";
import budget6 from "./Home_images/budgetimg/bb6.webp";
import budget7 from "./Home_images/budgetimg/bb7.webp";
import budget8 from "./Home_images/budgetimg/bb8.webp";
import budget9 from "./Home_images/budgetimg/bb9.webp";
import budget10 from "./Home_images/budgetimg/bb10.webp";
import budget11 from "./Home_images/budgetimg/bb11.webp";
import budget12 from "./Home_images/budgetimg/bb12.webp";

import shop1 from "./Home_images/shopimg/shop1.png";
import shop2 from "./Home_images/shopimg/shop2.png";
import shop3 from "./Home_images/shopimg/shop3.png";
import shop4 from "./Home_images/shopimg/shop4.png";
import shop5 from "./Home_images/shopimg/shop5.png";
import shop6 from "./Home_images/shopimg/shop6.png";
import shop7 from "./Home_images/shopimg/shop7.png";
import shop8 from "./Home_images/shopimg/shop8.png";
import shop9 from "./Home_images/shopimg/shop9.png";
import shop10 from "./Home_images/shopimg/shop10.png";
import shop11 from "./Home_images/shopimg/shop11.png";
import shop12 from "./Home_images/shopimg/shop12.png";
import shop22 from "./Home_images/shopimg/shop22.png";




const data = [
    {
      heading: [head1],
      img: [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        
      ],
    },
    {
      heading: [head2],
      img: [
        budget1,
        budget2,
        budget3,
        budget4,
        budget5,
        budget6,
        budget7,
        budget8,
        budget9,
        budget10,
        budget11,
        budget12
      ],
    },
    {
      heading: [head3],
      img: [brand1, brand2, brand3, brand4, brand6,brand7],
    },
    {
      heading: [head4],
      img: [
        shop1,
        shop2,
        shop3,
        shop4,
        shop5,
        shop6,
        shop7,
        shop8,
        shop9,
        shop10,
        shop11,
        shop12,
        shop1,
        shop2,
        shop3,
        shop4,
        shop5,
        shop6,
        shop7,
        shop8,
        shop9,
        shop22,
        shop11,
        shop12,
      ],
    },
  ];

export const HomeBody = () => {

 
  return (
    <div>
      {data.map((item, j) => (
        <div key={j}>
          <div className="bodyHeading_div">
            {item.heading.map((e,i) => (
              <img src={e} key={i}  className="bodyHeading_img"></img>
            ))}
          </div>
          <div className="bodyimg_div">
            {item.img.map((e, i) => (
              <img src={e} key={i}  className="bodyimg_img"></img>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};


