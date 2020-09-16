import React, { useState } from 'react';
import fakeData from '../FakeData/fakeData';
import Place from '../Place/Place';
const Home = () => {
  const [places,setPlaces]=useState(fakeData);
  return (
    <div >
 <div className="row d-flex justify-content-between mx-auto">
      {
        places.map(place => <Place  place={place} key={place.id}></Place> )
      }
      
    </div>
    </div>
   
  );
};

export default Home;