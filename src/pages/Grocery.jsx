import React from "react";
import {
  GroceryData,
  WhyUs,
  OurProducts,
} from "../Components/SubpageData/PersonalDataApis";
import RelatedServices from "../Components/SubpageData/RelatedServices";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Grocery() {
  return (
    <>
      {/*hero */}
      <div className="position-relative w-100 hero">
        {GroceryData.map((item, index) => (
          <div key={index}>
            <img
              src={item.Imagesrc}
              alt="about image"
              className="img-fluid w-100 heroimg"
            />
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
              <h1>{item.Title}</h1>
            </div>
          </div>
        ))}
      </div>

      {/*why choose us*/}
      <h4 className="text-center mt-3 mt-lg-5">Why Choose Us?</h4>
      <hr className="w-25 my-3 mx-auto border-3" />

      <Container>
        <Row>
          {OurProducts.map((item, index) => (
            <Col key={index}>
              <div className="card mt-5 mx-2 mx-lg-3 border-0 card1">
                <img
                  className="card-img-top p-1 img-fluid rounded img-width"
                  src={item.Imagesrc}
                  alt="card image"
                />
                <div className="card-body">
                  <h6 className="card-title">{item.Title}</h6>
                  <p className="card-text">{item.Descrip}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/*why our products*/}
      <h4 className="text-center mt-3 mt-lg-5">Why Choose Our Products?</h4>
      <hr className="w-25 my-3 mx-auto border-3" />

      <Container>
        <Row>
          {WhyUs.map((item, index) => (
            <Col key={index}>
              <div className="card mt-5 mx-2 mx-lg-3 border-0 card1">
                <img
                  className="card-img-top p-1 img-fluid rounded img-width"
                  src={item.Imagesrc}
                  alt="card image"
                />
                <div className="card-body">
                  <h6 className="card-title">{item.Title}</h6>
                  <p className="card-text">{item.Descrip}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      {/*related services*/}

      <RelatedServices />
    </>
  );
}
