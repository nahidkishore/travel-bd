import React from "react";
import { useHistory } from "react-router-dom";
import "./Place.css";

const Place = (props) => {
  const { title, description, imageUrl, id } = props.place;

  const history = useHistory();
  return (
    <div className="col-md-4 text-center my-5">
      <div className="card place-card h-100">
        <img src={imageUrl} alt="" className="card-img-top img-fluid" />
        <div className="card-body">
          <h5 className="mt-3 mb-3">{title}</h5>
          <p className="text-secondary text-justify" >{description}</p>
          <button
            className="btn btn-success"
            onClick={() => history.push(`/booking/${id}`)}
          >
            Booking Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Place;
