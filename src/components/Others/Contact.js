import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="container">
      
      <Container>
        <Row>
          <Col md={12}><h2 style={{color: 'orange'}}>Location Information</h2></Col> 
          <Col md={12} sm={4} >
  
            <div style={{textAlign: 'center'}}>
            <p>Rampura, Dhaka <br/></p>
            <p>Bangladesh</p>
            
            </div>
           
          </Col>
        </Row>
        <Form>
        <Form.Group>
      <Form.Label>User Name</Form.Label>
        <Form.Control type="name" placeholder="User Name" />
        <Form.Label>Phone number </Form.Label>
        <Form.Control type="phone"  placeholder="Enter Your Number" />
        <Form.Label>Email </Form.Label>
        <Form.Control type="email"  placeholder="Enter Your Email" />
        <Form.Label>Your Feedback </Form.Label>
        <Form.Control as="textarea" row="12"  placeholder="text area" />
        
      </Form.Group>
      <Button variant="primary" type="submit">
    Submit
  </Button>
        </Form>
      </Container>
      
    </div>
  );
};

export default Contact;