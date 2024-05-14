import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImg1 from '../assets/SliderImg1.jpg';
import SliderImg2 from '../assets/SliderImg2.jpg';
import SliderImg3 from '../assets/SliderImg3.jpg';
import SliderImg4 from '../assets/SliderImg4.jpg';
import SliderImg5 from '../assets/SliderImg5.jpg';
import SliderImg6 from '../assets/SliderImg6.jpg';



function SliderAbout() {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <div className="slider-container">
      <Slider ref={slider => (sliderRef = slider)} {...settings}>
        <div>
          <img src={SliderImg1} alt="sliderimg1" className="img-fluid sliderimg"/>
        </div>
        <div>
          <img src={SliderImg2} alt="sliderimg2" className="img-fluid sliderimg"/>
        </div>
        <div>
          <img src={SliderImg3} alt="sliderimg3" className="img-fluid sliderimg"/>
        </div>
        <div>
          <img src={SliderImg4} alt="sliderimg4" className="img-fluid sliderimg"/>
        </div>
        <div>
          <img src={SliderImg5} alt="sliderimg5" className="img-fluid sliderimg"/>
        </div>
        <div>
          <img src={SliderImg6} alt="sliderimg6" className="img-fluid sliderimg"/>
        </div>
      </Slider>
    </div>
  );
}
export default SliderAbout;










