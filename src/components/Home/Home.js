import React, { useState } from 'react';
import fakeData from '../FakeData/fakeData';
import Place from '../Place/Place';

const Home = () => {
  const [places,setPlaces]=useState(fakeData);
  return (
    <div className="row d-flex justify-content-between mx-auto">
      {
        places.map(place => <Place place={place}></Place> )
      }
      
    </div>
  );
};

export default Home;