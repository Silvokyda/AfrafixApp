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
      <Row >
        <Col lg={4} className="me-5">
          <h5>Why Afrafix Ventures?</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            quae quidem eum sunt natus autem, veniam hic blanditiis repellat,
            illum maxime temporibus voluptatem, nihil eaque quia pariatur ad
            voluptatum! Dolore modi blanditiis impedit, sed doloribus, voluptas
            atque eius illo, fuga reprehenderit rerum natus aperiam corporis est
            repellendus veritatis quia nam. Sequi tenetur placeat labore a iusto
            consectetur at distinctio adipisci aliquam odio error, officia nemo
            illo, facilis reiciendis, esse autem similique dolores. Sunt
            dignissimos tempore voluptate eligendi? Ipsa, magnam totam! Aperiam
            nihil facere enim, harum dolores eveniet maxime similique illum
            veniam debitis amet ratione! Ut esse hic quo aspernatur ducimus.
          </p>
        </Col>
        <Col lg={6} className="my-3 my-lg-5 ">
          <SliderAbout />
        </Col>
      </Row>
    </Container>
  );
}
