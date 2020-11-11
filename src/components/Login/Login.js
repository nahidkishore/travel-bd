import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import {
  initializeLoginFramework,
  handleGoogleSignIn,
  handleSignOut,
  handleFbSignIn,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./LoginManager";
import { Button } from "react-bootstrap";
import "./Login.css";

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const fbSignIn = () => {
    handleFbSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const signOut = () => {
    handleSignOut().then((res) => {
      handleResponse(res, false);
    });
  };

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (res) => {
          handleResponse(res, true);
        }
      );
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        handleResponse(res, true);
      });
    }
    e.preventDefault();
  };

  return (
    <section>
      <div className="container">
        <div
          className=" d-flex flex-column justify-content-center align-items-center mt-5"
          id="header-id"
        >
          <form onSubmit={handleSubmit}>
            <h1 style={{ color: "greenyellow" }} className="text-center mt-5">
              {newUser ? "Create an Account" : "User Login"}
            </h1>
            <div className="row d-flex justify-content-center align-items-center">
              {newUser && (
                <div className="form-group col-12 col-md-8">
                  <input
                    onBlur={handleBlur}
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name "
                    required
                  />
                </div>
              )}

              <div className="form-group col-12 col-md-8">
                <input
                  onBlur={handleBlur}
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Your  email Address "
                  required
                />
              </div>
              <div className="form-group col-12 col-md-8">
                <input
                  onBlur={handleBlur}
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password  "
                  required
                />
              </div>
              {newUser && (
                <div className="form-group col-12 col-md-8">
                  <input
                    onBlur={handleBlur}
                    type="password"
                    name="confirm"
                    className="form-control"
                    placeholder="Enter confirm password  "
                    required
                  />
                </div>
              )}
              <div className="form-group col-12 col-md-8">
                <button className="btn btn-success btn-sm" type="submit">
                  {newUser ? "Create an Account" : "Login"}
                </button>
              </div>
            </div>
          </form>

          <p>
            {newUser ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setNewUser(!newUser)}
              className="text-success"
            >
              {newUser ? "Login" : "Create an account"}
            </span>
          </p>

          <p style={{ color: "red" }}>{user.error}</p>
          {user.success && (
            <p style={{ color: "green" }}>
              User {newUser ? "created" : "Logged In"} successfully
            </p>
          )}
          <hr />

          {user.isSignedIn ? (
            <button onClick={signOut}>Sign Out</button>
          ) : (
            <button className="btn btn-success" onClick={googleSignIn}>
              Continue With Google Sign In
            </button>
          )}

          <button className="mt-2 btn btn-primary" onClick={fbSignIn}>
            Continue With Facebook Sign In
          </button>
        </div>
      </div>
    </section>
  );
}

export default Login;
