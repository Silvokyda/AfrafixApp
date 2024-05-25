import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";

function TransfersForm(props) {
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
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridfName">
                <Form.Label>First Name<span className="required text-danger">*</span>{" "}</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridlName">
                <Form.Label>Last Name<span className="required text-danger">*</span>{" "}</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" required />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>
                Phone number:
              </Form.Label>
              <Form.Control type="tel" placeholder="+254712345678" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridlocation">
                <Form.Label>Pick up Location<span className="required text-danger">*</span>{" "}</Form.Label>
                <Form.Control type="text" placeholder="Enter your location" required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGriddestination">
                <Form.Label>Destination<span className="required text-danger">*</span>{" "}</Form.Label>
                <Form.Control type="text" placeholder="Enter your destination" required />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridfdate">
                <Form.Label>Pick up date<span className="required text-danger">*</span>{" "}</Form.Label>
                <Form.Control type="date"  required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridtime">
                <Form.Label>Pick-up time<span className="required text-danger">*</span>{" "}</Form.Label>
                <Form.Control type="time" required />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Passengers</Form.Label>
                <Form.Control type="number"  min={1} max={50}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Vehicle Type</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
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

export default TransfersForm;
