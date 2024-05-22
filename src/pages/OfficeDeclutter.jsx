import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  DeclutterHero,
  DeclutterServices,
} from "../Components/SubpageData/OfficeErrandData";

function OfficeDeclutter() {
  return (
    <>
      {/*hero */}
      <div className="position-relative w-100 hero">
        {DeclutterHero.map((item, index) => (
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

      {/*about pharmacy prescription*/}
      <h4 className="text-center mt-3 mt-lg-5">Why choose us?</h4>
      <hr className="w-25 my-3 mx-auto border-3" />
      <Container>
        <Row>
          {DeclutterServices.map((item, index) => (
            <Col lg={6} className="me-5 mt-lg-5" key={index}>
              <h4>Officer Decluttering Services</h4>
              <p>{item.descrip1}</p>
              <p>{item.descrip2}</p>
            </Col>
          ))}
          {DeclutterServices.map((item, index) => (
            <Col lg={4} className="my-3 my-lg-5" key={index}>
              <img
                src={item.imgSrc}
                alt="about image"
                className="img-fluid h-100 w-100"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default OfficeDeclutter;
