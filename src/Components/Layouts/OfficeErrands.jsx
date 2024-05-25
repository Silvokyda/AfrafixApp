import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OfficeData from "../../Components/OfficeErrandsApis";
import "../../index.css";
import Slider from "react-slick";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import RequestForm from "../../Components/Forms/RequestForm"

function OfficeErrands() {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h4 className="text-center mt-5 ">Office Errands</h4>
      <hr className="w-25 my-3 mx-auto border-3" />
      <Container>
        <Row>
          <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
            {OfficeData.map((values, index) => (
              <Col key={index}>
                <div className="card mt-5 mx-2 mx-lg-3 border-0 card1">
                  <img
                    className="card-img-top img-fluid rounded img-thumbnail img-width"
                    src={values.imgSource}
                    alt="card image"
                  />
                  <div className="card-body">
                    <h6 className="card-title">{values.title}</h6>
                    <p className="card-text">{values.descrip}</p>
                    <RequestForm />
                  </div>
                </div>
              </Col>
            ))}
          </Slider>
        </Row>
      </Container>
    </>
  );
}

export default OfficeErrands;
