import React from 'react'
import Hero from '../Components/Layouts/Hero'
import Contantform from "../Components/Layouts/Contantform";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import PhoneIcon from "@mui/icons-material/Phone";
import ScheduleIcon from "@mui/icons-material/Schedule";
import EmailIcon from "@mui/icons-material/Email";
import '../index.css';


function Contact() {
  return (
    <>
    <Hero />
      <Container>
      <Row className='ms-5 row-marg'>
        <Col sm={12} lg={7}>
        <Contantform />
        </Col>
        <Col  className= 'get-in-touch'>
            <h4 className="mt-3 mt-lg-5 text-info">Get In Touch</h4>
            <div>
              <PhoneIcon className="text-info"/>
              <span className="ms-2 text-secondary">+254725002779</span>
              <hr className="w-75 text-info" />
            </div>
            <div>
              <ScheduleIcon className="text-info"/>
              <span className=" ms-2 text-secondary">
                The Office Hours<br></br>Mon - Sat 8am to 5pm
              </span>
              <hr className="w-75 text-info" />
            </div>
            <div>
              <EmailIcon className="text-info"/>
              <span className=" ms-2 text-secondary">
                Send Us Email<br></br>info@afrofix.com
              </span>
              <hr className="w-75 text-info" />
            </div>
          </Col>
        
      </Row>
      </Container>
   
    
    </>
    
  )
}

export default Contact