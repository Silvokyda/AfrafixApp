import React from "react";
import heroPic from "../../assets/heroPic.jpg";
import "../../index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Hero() {
  return (
    <main>
      <div className="position-relative w-100 hero">
      <img src={heroPic} alt="home page picture" className="img-fluid w-100 heroimg" />
      <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 className="mb-4">AFRAFIX VENTURES</h1>
        <p>A Trusted, Reliable and Professional Services.</p>
      </div>
    </div>
    </main>
    
  );
}
