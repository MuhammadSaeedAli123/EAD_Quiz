import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer'
import Welcome from './Components/Welcome'
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import { Routes, Route } from 'react-router-dom';
import Offering from './Components/Offering';


function App() {
  return (
    <div>

           <Header/>

           <Routes>

             <Route path={'/'} element = {<Welcome/>}/>
              <Route path={'/offering'} element={<Offering/>}/>
              <Route path={'/aboutus'} element={<About/>}/>
              <Route path={'/contactus'} element={<ContactUs/>}/>
                 
            </Routes>
            <Footer/>
    </div>
  )
}

export default App