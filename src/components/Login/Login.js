import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


firebase.initializeApp(firebaseConfig);

function Login() {
  const [newUser,setNewUser]=useState(false);
  const [user,setUser]=useState({
    isSignedIn:false,
  
    name:'',
    email:'',
     photo:'',

  });
  const provider = new firebase.auth.GoogleAuthProvider();
  const  fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleSignIn =()=>{
    firebase.auth().signInWithPopup(provider)
    .then(res => {
       const {displayName,email, photoURL }=res.user;
       const signedInUser={
         isSignedIn: true,
         name: displayName,
         email: email,
         photo: photoURL,

       }
       setUser(signedInUser);
      console.log(displayName,email,photoURL);
      //console.log(res);
    })
    .catch(err => {
      console.log(err);
      console.log(err.message);
    })
  }

  const handleFbLogin=() => {
    firebase.auth().signInWithPopup(fbProvider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  const handleSignOut=() => {
    //console.log('sign out clicked');
    firebase.auth().signOut()
    .then(res => {
      const signOutUser={
        isSignedIn:false,
        name:'',
        email:'',
        photo:'',
        error:'',
        success:false,

      }
      setUser(signOutUser); 
    })
    .catch(err =>{
      console.log(err)
    })
  }

  const handleBlur=(event) => {
    //console.log(event.target.name,event.target.value);
    //debugger;
    let isFieldValid=true;
  if(event.target.name ==='email'){
    isFieldValid=/\S+@\S+\.\S+/.test(event.target.value);
    

  }
  if(event.target.name === 'password'){
    const isPasswordValid =event.target.value.length>6;
    const passwordHasNumber=/\d{1}/.test(event.target.value);

    isFieldValid= isPasswordValid && passwordHasNumber;

  }
  if(isFieldValid){
    const newUserInfo={...user};
    newUserInfo[event.target.name]=event.target.value;
    setUser(newUserInfo);
  }

  }
  const handleSubmit=(event) => {
    //console.log(user.email,user.password);
    if(newUser && user.email && user.password){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfo= {...user};
        newUserInfo.error='';
        newUserInfo.success=true;
        setUser(newUserInfo);
        //console.log(res);
        updateUserName(user.name);
      })
      .catch(error=> {
        // Handle Errors here.
        const newUserInfo= {...user};
        newUserInfo.error=error.message;
        newUserInfo.success=false;
        setUser(newUserInfo);
        // ...
      });

    }
    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfo= {...user};
        newUserInfo.error='';
        newUserInfo.success=true;
        setUser(newUserInfo);
        console.log('sign in user info', res.user);

      })
      .catch(error=> {
        // Handle Errors here.
            // Handle Errors here.
            const newUserInfo= {...user};
            newUserInfo.error=error.message;
            newUserInfo.success=false;
            setUser(newUserInfo);
      });
    }
      event.preventDefault();
  }
  const updateUserName =name => {
    const user = firebase.auth().currentUser;

  user.updateProfile({
  displayName: name
}).then(function() {
  console.log('user name updated successfully');
}).catch(function(error) {
  // An error happened.
  console.log(error);
});
  }
  return (
    <div style={{textAlign:'center'}}>
      {
        user.isSignedIn ?<button onClick={handleSignOut}>Sign out</button>:<button onClick={handleSignIn}>Sign in</button>
      }
      <br/>
      <button onClick={handleFbLogin}>Sign in using Facebook</button>
      {
        user.isSignedIn && <div>
          <p>Welcome, {user.name}</p>
      <p>Your email: {user.email}</p>
      <img src={user.photo} alt=" "></img>
          </div>
      }
      <h1>Our Authentication</h1>
      <input type="checkbox" onChange={()=>setNewUser(!newUser)} name="newUser" id=""/>
      <label htmlFor="newUser">New User Sign Up</label>
      
    <form onSubmit={handleSubmit}>

{newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="Your name" />} <br/>
     <input type="text" name="email"  onBlur={handleBlur} placeholder="Your email address" required/> <br/>

      <input type="password" name="password"  onBlur={handleBlur} id="" placeholder="Your Password" required/> <br/>

     <input type="submit" value={newUser?'Sign Up':'Sign In'}/>
    </form>
    <p style={{color: 'red'}}>{user.error}</p>
  {user.success && <p style={{color: 'green'}}>User {newUser? 'created': 'logged in'} successfully</p>}
    
    </div>
  );
}

export default Login;
