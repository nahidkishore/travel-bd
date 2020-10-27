import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import BookingCheckout from "./components/BookingCheckout/BookingCheckout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Contact from "./components/Others/Contact";
import Blog from "./components/Others/Blog";
import News from "./components/Others/News";
import Hotels from "./components/Hotels/Hotels";
import BookingHotel from "./components/Hotels/BookingHotel";
import Place from "./components/Place/Place";

export const UserContext = createContext();
export const HotelContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [hotel, setHotel] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <HotelContext.Provider value={[hotel, setHotel]}>
        <Router>
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
            <PrivateRoute path="/checkout">
              <BookingHotel></BookingHotel>
            </PrivateRoute>
            <Route exact path="/hotelDetails/:placeId">
              <Hotels></Hotels>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/news">
              <News></News>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </HotelContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
