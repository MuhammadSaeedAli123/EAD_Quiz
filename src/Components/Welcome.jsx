import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import image from '../Assets/image.PNG'
import Offering from './Offering';
import ContactUs from './ContactUs';
import About from './About';

const Welcome = () => {
  return (

    <div>

      <Offering/>
      <About/>
      <ContactUs/>
    

  </div>
  
  );
}

export default Welcome;
