import React from "react";
import Hero from "../Components/Layouts/Hero";
import HomeAbout from "../Components/Layouts/HomeAbout";
import PersonalServices from "../Components/Layouts/PersonalServices";
import OfficeErrands from "../Components/Layouts/OfficeErrands";
import Contantform from "../Components/Layouts/Contantform";

function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <PersonalServices />
      <OfficeErrands />
      <Contantform />
    </>
  );
}

export default Home;
