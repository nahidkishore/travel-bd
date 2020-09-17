import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fakeData from '../FakeData/fakeData';

const Hotels = () => {
  const {PlaceId} = useParams();
  const [hotels,setHotels] = useState({});
  const {hotel,map,title}=hotels;
  useEffect(() =>{
    const selectedHotel=fakeData.find(place =>place.id ==PlaceId)
    setHotels(selectedHotel);
  },[])
  
  return (
    <div>
      <h3>Hotels information</h3>
      <Container>
        <Row>
          <Col xs={6} md={4}>
     <p>{title}</p>
    

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hotels;