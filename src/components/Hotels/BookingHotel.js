import React, { useContext, useEffect, useState } from "react";
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

  return (
    <div>
      <div className="row">
        <div className="col-6 col-md-6">
          <h4 style={{ textAlign: "center" }}>
            Stay in <h1 style={{ color: "green" }}>{placeArrays[0].title}</h1>{" "}
          </h4>
          {hotels.map((hotel) => (
            <HotelDetails hotel={hotel}></HotelDetails>
          ))}
        </div>
        <div className="col-6 col-md-6">
          <Map></Map>
        </div>
      </div>
    </div>
  );
};

export default BookingHotel;
