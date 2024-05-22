import React, { useState } from "react";
import { HeroData, GoalCards, Features, AboutUs } from "../Components/AboutApi";
import { Container } from "react-bootstrap";
import SliderAbout from "../Components/SliderAbout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Collapse from "react-bootstrap/Collapse";

function About() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/*hero */}
      <div className="position-relative w-100 hero">
        {HeroData.map((item, index) => (
          <div key={index}>
            <img
              src={item.imgSource}
              alt="about image"
              className="img-fluid w-100 heroimg"
            />
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
              <h1>{item.title}</h1>
            </div>
          </div>
        ))}
      </div>

      {/*introduction about about us section */}

      <Container className="mb-3 mb-lg-5 mx-auto">
        <Row>
          {AboutUs.map((item, index) => (
            <Col key={index}>
              <h4 className="mt-3 mt-lg-5">{item.title1}</h4>
              <p>{item.descrip1}</p>
              <ul>
                {item.List1.map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
              </ul>
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="read-more-btn"
                aria-expanded={open}
              >
                Read More
              </Button>
              <Collapse in={open}>
                <div id="read-more-btn">
                  <h5>{item.title2}</h5>
                  <p>{item.descrip2}</p>
                  <ul>
                    {item.List2.map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                  </ul>
                </div>
              </Collapse>
            </Col>
          ))}
          <Col lg={4} className="my-3 my-lg-5 ">
            <SliderAbout />
          </Col>
        </Row>
      </Container>

      {/* about our mission, vision and values section */}

      <Container className="mb-5">
        <Row>
          {GoalCards.map((item, index) => (
            <Col lg={4} key={index}>
              <div className="card text-center mb-3">
                <div className="Icons">{item.imgIcon}</div>
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* why choose us section */}

      <Container>
        <h4 className="text-center mt-3 mt-lg-5">Why Choose Us</h4>
        <hr className="w-25 mt-3 mb-5 mx-auto border-3" />
        <Row>
          {Features.map((item, index) => (
            <Col md={6} lg={4} key={index}>
              <div className="card text-center mb-3">
                <div className="Icons">{item.imgIcon}</div>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default About;
