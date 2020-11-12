import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import { handleSignOut } from '../../Login/LoginManager';
import './Navbar.css'
const Navbar = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

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
    <nav className="navbar navbar-expand-lg navbar-dark ">
    <div className="container">
      <Link to="/" className="navbar-brand">
        <img
          src="https://iili.io/2xWwrJ.png"
          alt=""
          className="img-fluid"
          width="150px"
        />
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto" style={{ fontSize: " 1.22em" }}>
          
          <li className="nav-item active">
            <Link className="nav-link  mr-2" to="/news">
              News
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link  mr-2 " to="/blog">
              Blog
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link  mr-2 " to="/contact">
              Contact
            </Link>
          </li>

          <li className="nav-item">
          <p style={{ color: "yellow", weight: "normal" }}>
                {" "}
                {loggedInUser.displayName}
              </p>
          </li>
        

          <li className="nav-item mr-5">
         <Link>
         <button onClick={handleLoggingButton} className="button">
              
              {loggedInUser.name ? "Logout" : "Login"}
            </button>
         </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;