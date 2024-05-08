import React from "react";
import { HeroData, GoalCards, Features } from "../Components/AboutApi";
import { Container } from "react-bootstrap";
import HomeAbout from "../Components/Layouts/HomeAbout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
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

      <HomeAbout />

      {/* about our mission, vision and values section */}

      <Container className="mb-5">
        <Row>
          {GoalCards.map((item, index) => (
            <Col key={index}>
              <div className="card text-center">
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
            <Col lg={4}  key={index}>
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
