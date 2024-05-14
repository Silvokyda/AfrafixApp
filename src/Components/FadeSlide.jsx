import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimalProducts } from "../Components/SubpageData/PersonalDataApis"

function FadeSlide() {

  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };


  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <div className="slider-container">
      <Slider ref={slider => (sliderRef = slider)} {...settings}>
        {AnimalProducts.map((item, index) => (
          <div key={index} className="position-relative w-100 hero">
            <img
              src={item.imgSrc}
              alt="about image"
              className="img-fluid w-100 heroimg"
            />
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
              <h1>{item.Title}</h1>
              <p>{item.Descrip}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FadeSlide;