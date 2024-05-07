import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../index.css";




function NavBar() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        {/* Make the brand clickable*/} 
        <Navbar.Brand as={Link} to="/home">AFRAFIX-VENTURES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-white">
            {/* Make the home link clickable */}
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            {/* Make the about link clickable */}
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {/* Dropdown with clickable title */}
            <NavDropdown title={<Link to="/personal" className="dropdown-title">Personal Services</Link>} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/personal/grocery-shop">Grocery shop</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/personal/personal-shopping">Personal shopping</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/personal/meat-poultry-shop">Meat|Poultry shop</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/personal/pharmacy-preps">Pharmacy Preps</NavDropdown.Item>
            </NavDropdown>
            {/* Dropdown with clickable title */}
            <NavDropdown title={<Link to="/office" className="dropdown-title">Office errands</Link>} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/office/cheque-collection">Cheque collection and delivery</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/office/document-drop-pick-up">Document drop up and pick up</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/office/office-organization">Office organization</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/office/event-planning">Event planning</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/office/data-entry">Data entry</NavDropdown.Item>
            </NavDropdown>
            {/* Dropdown with clickable title */}
            <NavDropdown title={<Link to="/travel"className="dropdown-title">Travel Logistics</Link>} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/travel/flight-scheduling">Flight Scheduling</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/travel/hotel-bookings">Hotel Bookings</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/travel/airport-transfers">Airport Transfers</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/travel/railway-transfers">Railway Transfers</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/travel/chauffeured-car-hire">Chauffeured car-hire</NavDropdown.Item>
            </NavDropdown>
            {/* Make the contact link clickable */}
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;


{/*function NavBar() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="#home">AFROFIX-VENTURES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-white">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            {/*dropdown*
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
            {/*dropdown*
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
            {/*dropdown*
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

export default NavBar;*/}
