import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';
import { Button, Container, Form, FormControl,} from 'react-bootstrap';



function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
      handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  const fbSignIn = () => {
      handleFbSignIn()
      .then(res => {
        handleResponse(res, true);
      })

  }

  const signOut = () => {
      handleSignOut()
      .then(res => {
          handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }
    e.preventDefault();
  }



  return (
    <div style={{textAlign: 'center'}}>
      
      {
        user.isSignedIn && <div>
          <p>Welcome, {user.name}!</p>
          <p>Your email: {user.email}</p>
          <img src={user.photo} alt=""/>
        </div>
      }

     {/*  <h1>Our own Authentication</h1> */}
      <Container>
        <div className="">
        
          <Form onSubmit={handleSubmit}>
          <h1 style={{color:'greenyellow'}} className="my-4">{newUser ? 'Create an Account' : 'User Login'}</h1>
          {
            newUser && <FormControl onBlur={handleBlur} name="name" type="text" placeholder="Your Name" className="my-3 bg-light" required />
              }

             <FormControl onBlur={handleBlur} name="email" type="email" placeholder="Your Email" className="my-3 bg-light" required />

             <FormControl onBlur={handleBlur} name="password" type="password" placeholder="Your Password" className="my-3 bg-light" required />

        {
           newUser && <FormControl onBlur={handleBlur}  type="password" name="confirm" placeholder="Confirm Password" className="my-3 bg-light" required />
               }

           <Button className="btn-warning btn-sm" type="submit">{newUser ? 'Create an Account' : 'Login'}</Button>


          </Form>
          
      <label htmlFor="newUser">Don't have an account? </label>  <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>



          <p style={{color: 'red'}}>{user.error}</p>
      { user.success && <p style={{color: 'green'}}>User { newUser ? 'created' : 'Logged In'} successfully</p>}
             <p style={{textAlign: 'center'}}>--------Or-----------</p>
          { user.isSignedIn ? <Button onClick={signOut}>Sign Out</Button> :
        <Button onClick={googleSignIn}>Google Sign In</Button>
      }
      <br/>
      <Button variant="success"  onClick={fbSignIn}>Sign in using Facebook</Button>
        </div>
      </Container>
     
    
      {/* <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
      <label htmlFor="newUser">New User Sign up</label>
      <form onSubmit={handleSubmit}>
        {newUser && <input name="name" type="text" onBlur={handleBlur} placeholder="Your name"/>}
        <br/>
        <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required/>
        <br/>
        <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
        <br/>
        <input type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
      </form>

      <p style={{color: 'red'}}>{user.error}</p>
      { user.success && <p style={{color: 'green'}}>User { newUser ? 'created' : 'Logged In'} successfully</p>}

      { user.isSignedIn ? <button onClick={signOut}>Sign Out</button> :
        <button onClick={googleSignIn}>Google Sign In</button>
      }
      <br/>
      <button onClick={fbSignIn}>Sign in using Facebook</button> */}
    </div>
  );
}

export default Login;