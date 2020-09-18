import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { HotelContext} from '../../App';
import fakeData from '../FakeData/fakeData';


const PlaceDetails = () => {
  const {placeId}=useParams();
  const [hotel,setHotel]=useContext(HotelContext);
   setHotel(placeId);


  const [places,setPlaces]=useState({})
  const {title, details,id}=places;

  useEffect(() =>{
    const selectedPlace =fakeData.find(place => place.id == placeId)
    setPlaces(selectedPlace)
  },[placeId])
  
const bookStyle={
  marginTop:'40px',
  textAlign: 'justify'
}
return (
  <div style={bookStyle} className="container">
    <Row>
      <Col  xs={6} md={4}>
      
        <h1>{title}</h1>
       <p>{details}</p>
     
  
      </Col>
      <Col xs={12} md={8}>
      
      <Form>
      <InputGroup className="mb-3">
    <InputGroup.Prepend>
       <InputGroup.Text>Origin</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl  placeholder="Dhaka" />
    </InputGroup>
    <InputGroup  className="mb-3">
    <InputGroup.Prepend>
    <InputGroup.Text>Destination</InputGroup.Text>
    
    </InputGroup.Prepend>
    <FormControl  aria-label="Destination" value={title} required />
  
    </InputGroup>
    <Link to={"/checkout"}><Button  variant="success" type="submit">Start Booking</Button></Link>
      
      </Form>


      </Col>
    </Row>





  </div>

)
};
export default PlaceDetails;