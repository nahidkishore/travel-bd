import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../FakeData/fakeData';
import Booking from '../Place/Booking';


const PlaceDetails = () => {
  const {placeId}=useParams();
  const [places,setPlaces]=useState({})

  useEffect(() =>{
    const selectedPlace =fakeData.find(place => place.id ===placeId)
    setPlaces(selectedPlace)
  },[placeId])
  
  
return (
  <div>
<Booking></Booking>




  </div>

)
};
export default PlaceDetails;