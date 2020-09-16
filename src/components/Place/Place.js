import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
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
        
  <Card.Img style={{height: '50%'}}  variant="top" src={imageUrl}></Card.Img>
        <Card.Body>
  <Card.Title>{title}</Card.Title>
  <Card.Text>{description}</Card.Text>
  <Link to={`/booking/${id}`}><Button  variant="warning" >Booking -> </Button></Link>
  
  
  
        </Card.Body>
      </Card>
      
    </div>
  );
};

export default Place;