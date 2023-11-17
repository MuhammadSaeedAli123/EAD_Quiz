import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';



function ContactUs() {

//Using UseState Hook


  return (
    <div>


        <div style={{backgroundColor: "#ffffff"}} >

          <div className={"container p-3"}> 
        <h1>Contact Us</h1>


    <Form>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control  type="text" placeholder="Enter your username" />
        <Form.Text className="">
          We'll never share your id with anyone else.
        </Form.Text>
      </Form.Group>

    

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your Email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      
      <Button variant="dark">
        Submit
      </Button>
    </Form>
         </div>
    </div>

    </div>
  );
}

export default ContactUs;