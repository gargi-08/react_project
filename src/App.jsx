import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Home from "./assets/Components/Pages/home/Home";
import About from './assets/Components/Pages/about/About';
import Services from './assets/Components/Pages/services/Services'
import Contact from './assets/Components/Pages/contacts/Contact';
import Navbar from './assets/Components/navbar/Navbar';
import Footer from './assets/Components/footer/Footer';



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App