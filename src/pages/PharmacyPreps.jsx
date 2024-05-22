import React from "react";
import RelatedServices from "../Components/SubpageData/RelatedServices";
import {
  HeroPreps,
  AboutPrescription,
} from "../Components/SubpageData/PersonalDataApis";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PharmacyPreps() {
  return (
    <>
      {/*hero */}
      <div className="position-relative w-100 hero">
        {HeroPreps.map((item, index) => (
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
          {AboutPrescription.map((item, index) => (
            <Col lg={6} className="me-5 mt-lg-5" key={index}>
              <p>{item.Descrip1}</p>
              <p>{item.Descrip2}</p>
            </Col>
          ))}
          {AboutPrescription.map((item, index) => (
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

      {/*related services*/}
      <RelatedServices />
    </>
  );
}
export default PharmacyPreps;
