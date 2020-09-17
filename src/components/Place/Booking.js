import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Booking = () => {

  return (
    
      <div>
      <Form>
      <Form.Group>
      <Form.Label>Origin</Form.Label>
        <Form.Control type="home" placeholder="Dhaka" />
        <Form.Label>Destination</Form.Label>
        <Form.Control type="destination"  placeholder="Cox's Bazar" />
      </Form.Group>
      <Link to="/checkout"><Button  variant="primary" type="submit">Start Booking</Button></Link>
      
      </Form>
      </div>
     
 
    
  );
};

export default Booking;