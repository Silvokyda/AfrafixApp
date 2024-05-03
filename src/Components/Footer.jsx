import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import PhoneIcon from "@mui/icons-material/Phone";
import ScheduleIcon from "@mui/icons-material/Schedule";
import EmailIcon from "@mui/icons-material/Email";
import SocialIcons from '../Components/SocialIcons'


function Footer() {
const currentYear = new Date().getFullYear()

  return (
    <>
      <Container fluid className="bg-dark w-100 mt-5">
        <Row className="ms-3 ms-lg-5 ">
          <Col lg={3} md={6} sm={12}>
            <h4 className="mt-3 mt-lg-5 text-info">About Us</h4>
            <p className="text-white">
              Afrafix-ventures, we <br></br>are committed to <br></br>providing
              our clients <br></br>with super reliable<br></br> and efficient
              services.{" "}
            </p>

            <SocialIcons />

          </Col>
          <Col lg={3} md={6} sm={12}>
            <h4 className="mt-3 mt-lg-5 text-info">Personal Services</h4>
            <ul>
              <a href="#" className="text-white text-decoration-none">
                <li>Grocery</li>
              </a>
              <a href="#" className="text-white text-decoration-none">
                <li>Meat|Poultry</li>
              </a>
              <a href="#" className="text-white text-decoration-none">
                <li>Personal shopping</li>
              </a>
              <a href="#" className="text-white text-decoration-none">
                <li>Pharmacy prescription</li>
              </a>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <h4 className="mt-3 mt-lg-5 text-info">Office Errands</h4>
            <ul>
              <a href="#" className="text-white text-decoration-none">
                <li>Data entry</li>
              </a>
              <a href="#" className="text-white text-decoration-none">
                <li>Event planning</li>
              </a>
              <a href="#" className="text-white text-decoration-none">
                <li>Office decluttering</li>
              </a>
              <a href="#" className="text-white text-decoration-none">
                <li>Cheque collection|delivery</li>
              </a>
              <a href="#" className="text-white text-decoration-none">
                <li>Documents pick-up|drop-up</li>
              </a>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <h4 className="mt-3 mt-lg-5 text-info">Get In Touch</h4>
            <div>
              <PhoneIcon className="text-info"/>
              <span className="ms-2 text-white">+254725002779</span>
              <hr className="w-75 text-info" />
            </div>
            <div>
              <ScheduleIcon className="text-info"/>
              <span className=" ms-2 text-white">
                The Office Hours<br></br>Mon - Sat 8am to 5pm
              </span>
              <hr className="w-75 text-info" />
            </div>
            <div>
              <EmailIcon className="text-info"/>
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
