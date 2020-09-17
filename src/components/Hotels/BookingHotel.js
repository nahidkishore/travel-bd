import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import fakeHotels from '../FakeData/fakeHotels';
import HotelDetails from './HotelDetails';

const BookingHotel = () => {
  const [hotels,setHotels]=useState(fakeHotels)
  console.log(hotels);
  
  return (
    <div>
     
      {
        hotels.map(hotel => <HotelDetails  hotel={hotel}  ></HotelDetails>)
      }
     
    </div>
  );
};

export default BookingHotel;