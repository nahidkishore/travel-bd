import React from "react";
import { Card, CardImg, Col, Row } from "react-bootstrap";
import star from "../images/Icon/star_1_.png";
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
    <div>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img src={photo} />
          </Card>
        </Col>
        <Col md={6}>
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
      </Row>
    </div>
  );
};

export default HotelDetails;
