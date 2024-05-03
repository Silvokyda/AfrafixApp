import React from 'react';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import PersonalServices from './pages/PersonalServices';
import OfficeErands from './pages/OfficeErands';
import Contact from './pages/Contact';
import TravelLogistics from './pages/TravelLogistics'
import Error from './pages/Error';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path='/home' exact element={ <Home />}/>
        <Route path='/about' element={ <About /> }/>
        <Route path='/personal' element={ <PersonalServices /> }/>
        <Route path='/office' element={ <OfficeErands /> }/>
        <Route path='/travel' element={ <TravelLogistics /> }/>
        <Route path='/contact' element={ <Contact /> }/>
        <Route path='*' element={ <Error /> }/>
      </Routes>
    </BrowserRouter>
    <Footer />

  </>  
  )
}

export default App
