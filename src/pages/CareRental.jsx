import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  CarHero,
} from "../Components/SubpageData/LogisticData";

function CareRental() {
  return (
    <>
     {/*hero */}
     <div className="position-relative w-100 hero">
        {CarHero.map((item, index) => (
          <div key={index}>
            <img
              src={item.imgSrc}
              alt="about image"
              className="img-fluid w-100 heroimg"
            />
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
              <h1>{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
    
    
    
    </>
  )
}

export default CareRental