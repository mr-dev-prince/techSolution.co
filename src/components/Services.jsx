import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "..//assets/3.jpg";
import img2 from "..//assets/5.jpg";
import img3 from "..//assets/6.jpg";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        showIndicators={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="" />
          <p className="legend">full Stack</p>
        </div>
        <div>
          <img src={img2} alt="" />
          <p className="legend">Peer-to-Peer</p>
        </div>
        <div>
          <img src={img3} alt="" />
          <p className="legend">Peer-to-Peer</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
