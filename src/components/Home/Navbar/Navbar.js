import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import { handleSignOut } from '../../Login/LoginManager';

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
    <nav className="navbar navbar-expand-lg navbar-dark pt-5 ">
    <div className="container">
      <Link to="/" className="navbar-brand">
        <img
          src="https://iili.io/2xWwrJ.png"
          alt=""
          className="img-fluid py-2"
          width="180px"
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
        <ul className="navbar-nav ml-auto" style={{ fontSize: " 1.42em" }}>
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

          <li className="nav-item">
          <p style={{ color: "yellow", weight: "normal" }}>
                {" "}
                {loggedInUser.displayName}
              </p>
          </li>
        

          <li className="nav-item mr-5">
          <button onClick={handleLoggingButton} className="btn btn-success">
              
              {loggedInUser.name ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;