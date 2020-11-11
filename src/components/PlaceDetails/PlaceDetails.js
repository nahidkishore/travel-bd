import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { HotelContext } from "../../App";
import fakeData from "../FakeData/fakeData";
import Header from "../Header/Header";

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
  return (
    <section>
      <Header></Header>
      <div className="container ">
        <div className="row mt-5">
          <div className="col-md-5">
            <h1>{title}</h1>
            <p className="text-justify">{details}</p>
          </div>
          <div className="col-md-7 mt-2">
            <form action="">
              <div className="row d-flex justify-content-center align-items-center">
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

                <div className="form-group text-center col-12 col-md-6">
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Start Booking"
                    onClick={() => history.push("/checkout")}
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PlaceDetails;
