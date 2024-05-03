import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="#home">AFROFIX-VENTURES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-white">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <NavDropdown title="Personal Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="personal">Grocery shop</NavDropdown.Item>
              <NavDropdown.Item href="personal">
                Personal shopping
              </NavDropdown.Item>
              <NavDropdown.Item href="personal">
                Meat|Poultry shop
              </NavDropdown.Item>
              <NavDropdown.Item href="personal">
                Pharmacy Preps
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Office errands" id="basic-nav-dropdown">
              <NavDropdown.Item href="office">
                Cheque collection and delivery
              </NavDropdown.Item>
              <NavDropdown.Item href="office">
                Document drop up and pick up
              </NavDropdown.Item>
              <NavDropdown.Item href="office">
                Office organization
              </NavDropdown.Item>
              <NavDropdown.Item href="office">Event planning</NavDropdown.Item>
              <NavDropdown.Item href="office">Data entry</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Travel Logistics" id="basic-nav-dropdown">
              <NavDropdown.Item href="travel">
                Flight Schedulingy
              </NavDropdown.Item>
              <NavDropdown.Item href="travel">Hotel Bookings</NavDropdown.Item>
              <NavDropdown.Item href="travel">
                Airport Transfers
              </NavDropdown.Item>
              <NavDropdown.Item href="travel">
                Railway Transfers
              </NavDropdown.Item>
              <NavDropdown.Item href="travel">
                Chauffeured car-hire
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
