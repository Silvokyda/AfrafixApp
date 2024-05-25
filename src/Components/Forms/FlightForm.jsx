import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";

function FlightForm(props) {
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
          <Modal.Title className="">Let's us do your flight schedule</Modal.Title>
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
                <Form.Label>Trip From<span className="required text-danger">*</span>{" "}</Form.Label>
                <Form.Control type="text" placeholder="From" required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>
                Trip To<span className="required text-danger">*</span>{" "}
              </Form.Label>
              <Form.Control type="text" placeholder="To" required />
              </Form.Group>
            </Row>

             <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridfdate">
              <Form.Check type="radio" id="roundtrip" name="tripType" label="Roundtrip" defaultChecked 
              />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridtime">
              <Form.Check type="radio" id="oneway" name="tripType" label="Oneway"
              />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridfdate">
                <Form.Label>Departure<span className="required text-danger">*</span>{" "}</Form.Label>
                <Form.Control type="datetime-local"  required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridtime">
                <Form.Label>Return</Form.Label>
                <Form.Control type="datetime-local" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Adults(12+)</Form.Label>
                <Form.Control type="number"  min={1} max={10} placeholder="0"/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Children(2-11) </Form.Label>
                <Form.Control type="number"  min={1} max={10} placeholder="0"/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Infants(0-1)</Form.Label>
                <Form.Control type="number"  min={1} max={5} placeholder="0"/>
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

export default FlightForm;
