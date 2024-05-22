import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import SliderAbout from "../../Components/SliderAbout";

export default function HomeAbout() {
  return (
    <Container className="mb-3 mb-lg-5 mx-auto">
      <Row>
        <h4 className="text-center mt-3 mt-lg-5">Reasons To Choose Us</h4>
        <hr className="w-25 my-3 mx-auto border-3" />
      </Row>
      <Row>
        <Col lg={4} className="me-5">
          <h5>Why Afrafix Ventures?</h5>
          <p>
            Afrafix Ventures is your one-stop shop for getting things done.
            Imagine the freedom of a to-do list that magically completes itself!
            Not battling traffic for errands. No more scrambling to remember
            appointments. Just you, focusing on what matters most, while we take
            care of the rest. We're your friendly errand ninjas, tackling
            everything from grocery shopping and personal errands to travel
            bookings and office organization. Here's how we make life easier for
            busy individuals and corporations.
          </p>
        </Col>
        <Col lg={6} className="my-3 my-lg-5 ">
          <SliderAbout />
        </Col>
      </Row>
    </Container>
  );
}
