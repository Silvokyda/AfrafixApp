import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  EventHero,
  EventServices,
} from "../Components/SubpageData/OfficeErrandData";

function EventPlan() {
  return (
    <>
      {/*hero */}
      <div className="position-relative w-100 hero">
        {EventHero.map((item, index) => (
          <div key={index}>
            <img
              src={item.imgSrc}
              alt="about image"
              className="img-fluid w-100 heroimg"
            />
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
              <h1>{item.Title}</h1>
            </div>
          </div>
        ))}
      </div>
      <h4 className="text-center mt-3 mt-lg-5">Our Event Planning Services</h4>
      <Container className="mt-3 mt-lg-5">
        <Row>
          {EventServices.map((item, index) => (
            <Col md={6} lg={3} key={index}>
              <div className="position-relative hero">
                <img
                  className="card-img-top p-1 img-fluid rounded img-width heroimg"
                  src={item.imgSrc}
                  alt="card image"
                />
                <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                  <h6>{item.Title}</h6>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default EventPlan;
