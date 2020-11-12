import React from "react";
import star from "../images/Icon/star_1_.png";
import "./HotelDetails.css";

const HotelDetails = (props) => {
  const {
    hotelName,
    capacity,
    cancellation,
    facilities,
    rating,
    photo,
    price,
  } = props.hotel;
  return (
    <div className="card mb-3"  style={{maxWidth: "540px" }}>
      <div className="row">
        <div className="col-md-5 col-lg-5 col-sm-6">
          <img src={photo} className="img-fluid img-responsive mt-2 mx-5" alt=""/>
        </div>
        <div className="col-md-7 col-lg-7 col-sm-6">
          <div className="card-body">
            <h5 className="card-title">{hotelName}</h5>
            <p className="card-text">{capacity}</p>
            <p className="card-text">{facilities}</p>
            <p className="card-text">{cancellation}</p>
            <p className="card-text">
              <img style={{ width: "1.2rem" }} src={star} alt="star" />
              {rating}(10) ${price}/night
            </p>
          </div>
        </div>
      </div>

      {/* <Row>
        <Col md={6} lg={5}>
          <Card>
            <Card.Img src={photo} className="img-fluid h-100"  />
          </Card>
        </Col>
        <Col md={6} lg={7}>
          <Card>
            <Card.Img></Card.Img>
            <Card.Body>
              <Card.Title>{hotelName}</Card.Title>
              <Card.Text>
                {" "}
                <p>{capacity}</p>
                <p>{facilities}</p>
                <p>{cancellation} </p>
                <p>
                  <img style={{ width: "1.2rem" }} src={star} alt="star" />
                  {rating}(10) ${price}/night
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
    </div>
  );
};

export default HotelDetails;
