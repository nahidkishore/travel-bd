import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { HotelContext } from "../../App";
import fakeData from "../FakeData/fakeData";

import fakeHotels from "../FakeData/fakeHotels";
import HotelDetails from "./HotelDetails";
import Map from "./Map";

const BookingHotel = () => {
  const [hotel, setHotel] = useContext(HotelContext);
  const placeArrays = fakeData.filter(
    (pl) => parseInt(pl.id) === parseInt(hotel)
  );
  console.log(placeArrays);

  const [hotels, setHotels] = useState(fakeHotels);
  console.log(hotels);
  const [origin, setOrigin] = useState("");

  const [destination, setDestination] = useState("");
  return (
    <section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5">
            <h4 style={{ textAlign: "center" }}>
              Stay in <h1 style={{ color: "green" }}>{placeArrays[0].title}</h1>
            </h4>
            {hotels.map((hotel) => (
              <HotelDetails hotel={hotel}></HotelDetails>
            ))}
          </div>
          <div className="col-2 col-md-6 col-lg-7">
            <div className="my-5">
              <input
                type="text"
                placeholder="starting from "
                onBlur={(e) => setOrigin(e.target.value)}
              />
              <input
                type="text"
                placeholder="Destination "
                onBlur={(e) => setDestination(e.target.value)}
              />
            </div>
            <Map origin={origin} destination={destination}></Map>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingHotel;
