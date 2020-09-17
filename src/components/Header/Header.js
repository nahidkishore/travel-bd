import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleSignOut } from '../Login/LoginManager';
import './Header.css';
const Header = () => {
  const [loggedInUser, setLoggedInUser]=useContext(UserContext);

  let history = useHistory();

  const handleLoggingButton = () => {
    if (loggedInUser.name) {
      handleSignOut();
      setLoggedInUser({});
      history.push("/");
    } else {
      history.push("/login");
    }
  };
  return (
    <div>
      <Navbar  bg="success" expand="md" variant="dark">
    <Navbar.Brand  href=""><Link to="/"><img style={{ width: "10%",height: "10%"}} className="brand-logo" src="https://iili.io/2xWwrJ.png" alt="" /></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Form inline>
      <FormControl  type="text" placeholder="Search your Destination..." className="mr-sm-2" />
     
    </Form>
    <Nav className="mr-auto nav-header">
      <Nav.Link href="" style={{ fontWeight: "0",fontSize: "25px" }}><Link to="/news">News</Link></Nav.Link>
      {/* <Nav.Link href="/"><Link to="/destination">Destination</Link> </Nav.Link> */}
      <Nav.Link href="" style={{ fontWeight: "0",fontSize: "25px" }}><Link to="/blog">Blog</Link></Nav.Link>

      <Nav.Link href="" style={{ fontWeight: "0",fontSize: "25px" }}><Link to="/contact">Contact</Link></Nav.Link>

      
      <Nav.Link href=""><p style={{color: 'yellow', weight: 'normal'}}> {loggedInUser.displayName}</p></Nav.Link>
  
      
    </Nav>
    {/* <Link to="/login"><Button>Login</Button></Link> */}
    <Nav.Link onClick={handleLoggingButton}  href="" > <Button  variant="success"> {loggedInUser.name ? "Logout" : "Login"}</Button>
           
          </Nav.Link>
   
    </Navbar.Collapse>
    
  
  </Navbar>
    </div>
  );
};

export default Header;