import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/home">Navbar</Navbar.Brand>
    <Form inline>
      <FormControl type="text" placeholder="Search your Destination..." className="mr-sm-2" />
     
    </Form>
    <Nav className="mr-auto nav-header">
      <Nav.Link href="#home">News</Nav.Link>
      <Nav.Link href="/destination">Destination</Nav.Link>
      <Nav.Link href="#pricing">Blog</Nav.Link>
      <Nav.Link href="#">Contact</Nav.Link>
    </Nav>
    <Link to="/login"><Button>Login</Button></Link>
    
  
  </Navbar>
    </div>
  );
};

export default Header;