import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';
const Header = () => {
  const [loggedInUser, setLoggedInUser]=useContext(UserContext);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href=""><Link to="/home">Navbar</Link></Navbar.Brand>
    <Form inline>
      <FormControl type="text" placeholder="Search your Destination..." className="mr-sm-2" />
     
    </Form>
    <Nav className="mr-auto nav-header">
      <Nav.Link href="#home">News</Nav.Link>
      <Nav.Link href="/"><Link to="/destination">Destination</Link> </Nav.Link>
      <Nav.Link href="#pricing">Blog</Nav.Link>
      <Nav.Link href="#">Contact</Nav.Link>
      
      <Button style={{color: 'yellow'}}>Welcome to {loggedInUser.displayName}!!</Button>
      
    </Nav>
    <Link to="/login"><Button>Login</Button></Link>
    <Button onClick={()=> setLoggedInUser({})} variant="warning">Sign Out</Button>
    
  
  </Navbar>
    </div>
  );
};

export default Header;