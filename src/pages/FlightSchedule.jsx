import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FlightHero,
  FlightCards,
  SkyVideo,
} from "../Components/SubpageData/LogisticData";
import '../Components/Styles/styles.css'

function FlightSchedule() {
  return (
    <>
      {/*hero */}
      <div className="position-relative w-100 hero">
        {FlightHero.map((item, index) => (
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
          {FlightCards.map((item, index) => (
            <Col md={6} lg={3} key={index} className='cards'>
              <div className="card text-center transfer-card small-card-height p-3 mb-4">
                <div className="Icons card-Icons bg-size">{item.Icon}</div>
                <div className="card-body">
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="position-relative w-100">
        {SkyVideo.map((item, index) => (
          <div className="w-100 h-100" key={index}>
            <video
              className="w-100 h-50 object-fit-cover"
              src={item.videoSrc}
              autoPlay
              loop
              muted
            />
            <div className="position-absolute top-50 start-50 translate-middle text-center">
              <img
                src={item.mapImg}
                alt="map image"
                className=" w-100 heroimg"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default FlightSchedule;
