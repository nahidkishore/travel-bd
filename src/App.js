import React from 'react';
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


function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>

          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/booking/:placeId">
            <PlaceDetails></PlaceDetails>

          </Route>
          <Route path="/login">
          <Login></Login>

          </Route>
          <Route path="*">
            <NotFound></NotFound>

          </Route>
         
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
