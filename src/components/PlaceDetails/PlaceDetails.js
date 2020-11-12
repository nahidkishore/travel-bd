import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { HotelContext } from "../../App";
import fakeData from "../FakeData/fakeData";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./PlaceDetails.css";

const PlaceDetails = () => {
  const { placeId } = useParams();
  const [hotel, setHotel] = useContext(HotelContext);
  setHotel(placeId);

  const [places, setPlaces] = useState({});
  const { title, details, id } = places;

  useEffect(() => {
    const selectedPlace = fakeData.find((place) => place.id == placeId);
    setPlaces(selectedPlace);
  }, [placeId]);

  const history = useHistory();

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  return (
    <section>
      <div className="container ">
        <div className="row mt-5">
          <div className="col-md-5">
            <h1>{title}</h1>
            <p className="text-justify">{details}</p>
          </div>
          <div className="col-md-7 mt-2 mx-auto book-style">
            <form action="">
              <div className="form-group col-12 col-md-8">
                <input
                  type="text"
                  name="origin"
                  className="form-control"
                  placeholder="Dhaka "
                  required
                />
              </div>
              <div className="form-group col-12 col-md-8">
                <input
                  type="text"
                  name="destination"
                  className="form-control"
                  value={title}
                  required
                />
              </div>
              <div className="col-12 col-md-8">
                <div className="row">
                  <div className="col-md-4">
                    <div className="halfWidthInput-Left">
                      <label>From</label>
                      <DatePicker
                        selected={fromDate}
                        onChange={(data) => setFromDate(data)}
                        minDate={new Date()}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 offset-md-2">
                    <div className="halfWidthInput-right">
                      <label>To</label>
                      <DatePicker
                        selected={toDate}
                        onChange={(data) => setToDate(data)}
                        minDate={fromDate}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group  col-12 col-md-6 pt-2">
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Start Booking"
                  onClick={() => history.push("/checkout")}
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PlaceDetails;
