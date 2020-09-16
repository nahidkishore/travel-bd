import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Booking from './components/Place/Booking';
import BookingCheckout from './components/BookingCheckout/BookingCheckout';

export const UserContext = createContext();

function App(props) {
  const [loggedInUser,setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
  <h3>Email:{loggedInUser.email}</h3>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>

          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/destination">
     <PlaceDetails></PlaceDetails>
          </Route>
          <Route path="/booking/:placeId">
             <PlaceDetails></PlaceDetails>
           
          </Route>
          <Route path="/checkout">
            <BookingCheckout></BookingCheckout>

          </Route>
          <Route path="/login">
          <Login></Login>

          </Route>
          <Route path="*">
            <NotFound></NotFound>

          </Route>
         
        </Switch>
      </Router>
      
    </UserContext.Provider>
  );
}

export default App;
