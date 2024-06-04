import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import PhoneIcon from "@mui/icons-material/Phone";
import ScheduleIcon from "@mui/icons-material/Schedule";
import EmailIcon from "@mui/icons-material/Email";
import SocialIcons from "../Components/SocialIcons";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Container fluid className="bg-dark w-100 mt-5">
        <Row className="w-100 mx-auto ">
          <Col lg={2} md={6} sm={12}>
            <h5 className="mt-3 mt-lg-5 text-info">About Us</h5>
            <p className="text-white">
              Afrafix-ventures, we <br></br>are committed to <br></br>providing
              our clients <br></br>with super reliable<br></br> and efficient
              services.{" "}
            </p>

            <SocialIcons />
          </Col>
          <Col lg={2} md={6} sm={12}>
            <h5 className="mt-3 mt-lg-5 text-info">Personal Services</h5>
            <ul className="unordered">
              <li >
                <a href="#" className="list-footer text-decoration-none">Grocery</a>
                
              </li>

              <li >
                <a href="#" className="list-footer text-decoration-none">Meat|Poultry</a>
                
              </li>

              <li >
                <a href="#" className="list-footer text-decoration-none">Personal shopping</a>
                
              </li>

              <li >
                <a href="#" className="list-footer text-decoration-none">Pharmacy prescription</a>
                
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <h5 className="mt-3 mt-lg-5 text-info">Office Errands</h5>
            <ul className="unordered">
              <li>
                <a href="#" className="list-footer text-decoration-none">Data
                entry</a>
              </li>

              <li>
                <a href="#" className="list-footer text-decoration-none">Event planning</a>
                
              </li>

              <li>
                <a href="#" className="list-footer text-decoration-none">Office decluttering</a>
                
              </li>

              <li>
                <a href="#" className="list-footer text-decoration-none">Cheque collection|delivery</a>
                
              </li>

              <li>
                <a href="#" className="list-footer text-decoration-none">Documents pick-up|drop-up</a>
                
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <h5 className="mt-3 mt-lg-5 text-info">Travel Logistics</h5>
            <ul className="unordered">
              <li>
                <a href="#" className="list-footer text-decoration-none">Flight scheduling</a>
              </li>

              <li>
                <a href="#" className="list-footer text-decoration-none">Hotel booking</a>
                
              </li>

              <li>
                <a href="#" className="list-footer text-decoration-none">Airport transfer</a>
                
              </li>

              <li>
                <a href="#" className="list-footer text-decoration-none">SGR railway transfer</a>
                
              </li>

              <li>
                <a href="#" className="list-footer text-decoration-none">Chauffeured car hire</a>
                
              </li>
            </ul>
          </Col>
          <Col lg={2} md={6} sm={12}>
            <h4 className="mt-3 mt-lg-5 text-info">Get In Touch</h4>
            <div>
              <PhoneIcon className="text-info" />
              <span className="ms-2 text-white">+254716073759</span>
              <hr className="w-75 text-info" />
            </div>
            <div>
              <ScheduleIcon className="text-info" />
              <span className=" ms-2 text-white">
                The Office Hours<br></br>Mon - Sat 8am to 5pm
              </span>
              <hr className="w-75 text-info" />
            </div>
            <div>
              <EmailIcon className="text-info" />
              <span className=" ms-2 text-white">
                Send Us Email<br></br>info@afrofix.com
              </span>
              <hr className="w-75 text-info" />
            </div>
          </Col>
        </Row>

        <hr className="w-75 mx-auto mt-5 text-info border-3" />
        <Row className="text-center text-white">
          <Col>
            <p>All rights reserved &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
