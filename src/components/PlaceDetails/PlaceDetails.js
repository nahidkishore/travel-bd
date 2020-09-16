import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../FakeData/fakeData';


const PlaceDetails = () => {
  const {placeId}=useParams();
  const [places,setPlaces]=useState({})

  useEffect(() =>{
    const selectedPlace =fakeData.find(place => place.id ==placeId)
  },[placeId])
  
  
return (
  <div>

<h2>details</h2>


  </div>

)
};
export default PlaceDetails;