import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  DataHero,
  DataServices,
} from "../Components/SubpageData/OfficeErrandData";

function DataEntry() {
  return (
    <>
      {/*hero */}
      <div className="position-relative w-100 hero">
        {DataHero.map((item, index) => (
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
      <h4 className="text-center mt-3 mt-lg-5">Our Data Entry Services</h4>
      <hr className="w-25 my-3 mx-auto border-3" />
      <Container>
        <Row>
          {DataServices.map((item, index) => (
            <Col md={6} lg={3} key={index}>
              <div className="card mt-lg-5 mx-2 mx-lg-3 border-0 card1">
                <img
                  className="card-img-top p-1 img-fluid rounded img-width"
                  src={item.imgSrc}
                  alt="card image"
                />
                <div className="card-body">
                  <h6 className="card-title">{item.Title}</h6>
                  <p className="card-text">{item.descrip}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default DataEntry;
