import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Place.css';


const Place = (props) => {
  const {title, description,imageUrl,id}=props.place;
  const style = {
    display: 'flex',
    margin:'20px',
    justifyContent: 'space-between'
}
  return (
    
    <div className="col-md-3" style={style}>
      <Card style={{ width: '18rem' }}>
        
  <Card.Img  variant="top" src={imageUrl}></Card.Img>
        <Card.Body>
  <Card.Title>{title}</Card.Title>
  <Card.Text>{description}</Card.Text>
  <Button variant="warning">Booking -></Button>
        </Card.Body>
      </Card>
      
    </div>
  );
};

export default Place;