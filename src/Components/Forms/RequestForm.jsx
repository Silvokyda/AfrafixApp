import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function RequestForm(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Make Request
      </Button>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton className="bg-success">
          <Modal.Title className="">Make A Request</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-success">
          <Form>
            <Form.Group className="" controlId="Form1.ControlInput1">
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
            <Form.Group className="my-3" controlId="Form2.ControlInput1">
              <Form.Label>
                Email address<span className="required text-danger">*</span>{" "}
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
              />
            </Form.Group>
            <Form.Group className="my-3" controlId="Form3.ControlInput1">
              <Form.Label>
                Phone number:<span className="required text-danger">*</span>{" "}
              </Form.Label>
              <Form.Control type="tel" placeholder="+254712345678" required />
            </Form.Group>
            <Form.Group className="my-3" controlId="Form4.ControlInput1">
              <Form.Label>Subject:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group
              className="my-3"
              controlId="Form5.ControlTextarea1"
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
            <Button as="input" type="submit" value="Submit" />{" "}
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-success">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RequestForm;
