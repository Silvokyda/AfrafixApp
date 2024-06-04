import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contantform() {
  return (
    <>
      <main>
        <h4 className="text-center mt-5">Make Custom Request</h4>
        <hr className="w-25 mt-3 mx-auto border-3 " />
        <Container>
          <Form>
            <Form.Group className="mt-5" controlId="exampleForm1.ControlInput1">
              <Form.Label>
                Full Name<span className="required text-danger">*</span>{" "}
              </Form.Label>
              <Form.Control
                className="border-outline"
                type="text"
                placeholder="enter your name"
                required
              />
            </Form.Group>
            <Form.Group className="my-3" controlId="exampleForm2.ControlInput1">
              <Form.Label>
                Email address<span className="required text-danger">*</span>{" "}
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
              />
            </Form.Group>
            <Form.Group className="my-3" controlId="exampleForm3.ControlInput1">
              <Form.Label>Phone number:</Form.Label>
              <Form.Control type="tel" placeholder="+254712345678" />
            </Form.Group>
            <Form.Group
              className="my-3"
              controlId="exampleForm4.ControlTextarea1"
            >
              <Form.Label>
                Message<span className="required text-danger">*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="make your request"
                required
                rows={10}
                style={{ resize: "none" }}
              />
            </Form.Group>
          </Form>
          <Button className="my-3" variant="primary">
            SEND MESSAGE
          </Button>{" "}
        </Container>
      </main>
    </>
  );
}

export default Contantform;
