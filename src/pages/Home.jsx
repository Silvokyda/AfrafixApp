import React from "react";
import Hero from "../Components/Layouts/Hero";
import HomeAbout from "../Components/Layouts/HomeAbout";
import PersonalErrands from "../Components/Layouts/PersonalErrands";
import OfficeErrands from "../Components/Layouts/OfficeErrands";
import Logistics from "../Components/Layouts/Logistics"
import Contantform from "../Components/Layouts/Contantform";

function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <PersonalErrands />
      <OfficeErrands />
      <Logistics />
      <Contantform />
    </>
  );
}

export default Home;
