import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Contact from "./components/Others/Contact";
import Blog from "./components/Others/Blog";
import News from "./components/Others/News";
import Hotels from "./components/Hotels/Hotels";
import BookingHotel from "./components/Hotels/BookingHotel";
import HomeMain from "./components/Home/HomeMain/HomeMain";
import Navbar from "./components/Home/Navbar/Navbar";

export const UserContext = createContext();
export const HotelContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [hotel, setHotel] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <HotelContext.Provider value={[hotel, setHotel]}>
        <Router>
        <Navbar></Navbar> 
          <Switch>
          
            <Route path="/home">
              <HomeMain></HomeMain>
            </Route>
            <Route exact path="/">
             <HomeMain></HomeMain>
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
