import React from 'react';
import { Navbar } from 'react-bootstrap';
import Header from '../../Header/Header';
import Home from '../Home';
import './HomeMain.css'
const HomeMain = () => {
  return (
    <div className="home">
     <Header></Header>
      <Home></Home>
    </div>
  );
};

export default HomeMain;