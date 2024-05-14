import React from "react";
import RelatedServices from "../Components/SubpageData/RelatedServices";
import { Description } from "../Components/SubpageData/PersonalDataApis";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FadeSlide from "../Components/FadeSlide";

function MeatPoultry() {
  return (
    <>
      {/*hero slide*/}

      <FadeSlide />

      {/*about*/}
      <h4 className="text-center mt-3 mt-lg-5">How does it work?</h4>
      <hr className="w-25 my-3 mx-auto border-3" />
      <Container className="my-5">
        <Row>
          {Description.map((item, index) => (
            <Col key={index}>
              <div className="card text-center">
                <div className="Icons">{item.imgIcon}</div>
                <div className="card-body">
                  <h5 className="card-title">{item.Title}</h5>
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

export default MeatPoultry;
