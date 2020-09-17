import React from 'react';
import { Card, CardImg, Col, Row } from 'react-bootstrap';

const HotelDetails = (props) => {
  const {hotelName,guests,bedrooms,bed,bath,cancellation,facilities,rating,photo,price}=props.hotel;
  return (
    <div>
      <Row>
        <Col md={3}>
        <Card>
          <Card.Img src={photo}/>
        </Card>
        </Col>
        <Col md={3}>
     
      <Card>
        <Card.Img></Card.Img>
        <Card.Body>
  <Card.Title>{hotelName}</Card.Title>
  <Card.Text>{guests} guests {bedrooms} bedrooms {bed} bed {bath} bath <br/>
  {facilities} <br/> {cancellation} <br/>
  <p>{rating}(10) ${price}/night</p> 
  </Card.Text>

  
        </Card.Body>
      </Card>

        </Col>
      </Row>
      
    </div>
  );
};

export default HotelDetails;