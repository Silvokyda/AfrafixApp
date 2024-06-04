import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Hotel, HotelCards } from "../Components/SubpageData/LogisticData";
import '../Components/Styles/styles.css';

function HotelBooking() {
  return (
    <>
      {/*hero */}
      <div className="position-relative w-100 hero">
        {Hotel.map((item, index) => (
          <div key={index}>
            <img
              src={item.imgSrc}
              alt="about image"
              className="img-fluid w-100 heroimg"
            />
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
              <h1>{item.title}</h1>
            </div>
          </div>
        ))}
      </div>

      {/*why choose us*/}
      <h4 className="text-center mt-3 mt-lg-5">Why Choose Us?</h4>
      <hr className="w-25 my-3 mx-auto border-3" />
      <Container className="mb-5">
        <Row>
          {HotelCards.map((item, index) => (
            <Col md={6} lg={3} key={index}className='cards'>
              <div className="card text-center mb-4 transfer-card p-3 small-card-height">
                <div className="Icons card-Icons bg-size">{item.Icon}</div>
                <div className="card-body">
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

export default HotelBooking;
