import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Booking = () => {

  return (
    <div className="d-flex justify-content-around">
      <div className="col-md-6">
<h3>Details</h3>
      </div>
      <div className="col-md-4">
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
     
 
    </div>
  );
};

export default Booking;