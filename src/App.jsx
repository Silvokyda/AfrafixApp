import React from "react";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PersonalServices from "./pages/PersonalServices";
import OfficeServices from "./pages/OfficeServices";
import Contact from "./pages/Contact";
import TravelLogistics from "./pages/TravelLogistics";
import Error from "./pages/Error";
import Footer from "./Components/Footer";
import Grocery from "./pages/Grocery";
import MeatPoultry from "./pages/MeatPoultry";
import PharmacyPreps from "./pages/PharmacyPreps";
import PersonalShopping from "./pages/PersonalShopping";
import Cheques from "./pages/Cheques";
import Documents from "./pages/Documents";
import OfficeDeclutter from "./pages/OfficeDeclutter";
import EventPlan from "./pages/EventPlan";
import DataEntry from "./pages/DataEntry";
import FlightSchedule from "./pages/FlightSchedule";
import HotelBooking from "./pages/HotelBooking";
import AirportTransfer from "./pages/AirportTransfer";
import SgrTransfer from "./pages/SgrTransfer";
import CareRental from "./pages/CareRental";

function App() {
  return (
    <>
      <Router>
        <header>
          <NavBar />
        </header>

        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/personal" element={<PersonalServices />} />
            <Route path="/grocery-shop" element={<Grocery />} />
            <Route path="/meat-poultry-shop" element={<MeatPoultry />} />
            <Route path="/pharmacy-preps" element={<PharmacyPreps />} />
            <Route path="/personal-shopping" element={<PersonalShopping />} />
            <Route path="/office" element={<OfficeServices />} />
            <Route path="/cheque-delivery" element={<Cheques />} />
            <Route path="/document-drop-pick-up" element={<Documents />} />
            <Route path="/office-decluttering" element={<OfficeDeclutter />} />
            <Route path="/event-planning" element={<EventPlan />} />
            <Route path="/data-entry" element={<DataEntry />} />
            <Route path="/travel" element={<TravelLogistics />} />
            <Route path="/flight-scheduling" element={<FlightSchedule />} />
            <Route path="/hotel-bookings" element={<HotelBooking />} />
            <Route path="/airport-transfers" element={<AirportTransfer />} />
            <Route path="/SGR-transfers" element={<SgrTransfer />} />
            <Route path="/chauffeured-car-hire" element={<CareRental />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </>
  );
}

export default App;
