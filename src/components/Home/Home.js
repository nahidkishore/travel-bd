import React, { useState } from "react";
import fakeData from "../FakeData/fakeData";
import Place from "../Place/Place";
const Home = () => {
  const [places, setPlaces] = useState(fakeData);
  return (
    <section>
      <div className="d-flex justify-content-center">
        <div className="row w-75 mt-5">
          {places.map((place) => (
            <Place place={place} key={place.id}></Place>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
