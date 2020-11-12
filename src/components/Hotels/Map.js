import React from "react";
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript, } from '@react-google-maps/api';
import { useState } from 'react';
import { ApiKey } from "../ApiKey/Apikey";

const containerStyle = {
  width: '100%',
  height: '500px'
};

const location = {
  lat: 23.760358,
  lng: 90.418718
};
const Map = ({origin,destination}) => {
  const [directionResponse, setDirectionResponse]=useState(null);
  return (
    <section>
      <div className="container mt-5">
      <LoadScript
      googleMapsApiKey={ApiKey}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={16}
      >
        { /* Child components, such as markers, info windows, etc. */ }
      

      {
        origin !=='' && destination !=='' &&   <DirectionsService
        // required
        options={{ 
          destination: destination,
          origin: origin,
          travelMode: 'DRIVING',
        }}
        // required
        callback={res=>{
          if(res!=null){
            setDirectionResponse(res);
          }
        }}
       
      />
      }
                {
                  directionResponse &&  <DirectionsRenderer
                  // required
                  options={{ 
                    directions: directionResponse
                  }}
                
                />
                }
      </GoogleMap>
    </LoadScript>

      </div>
    </section>
  );
};

export default Map;
