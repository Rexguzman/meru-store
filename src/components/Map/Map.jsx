import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Mapa = () => {
    const mapStyles = {
        height: '50vh',
        width: '100%',
      };
    
      const defaultCenter = {
        lat: 19.4267261,
        lng: -99.1718706,
      };
    
      return (
        <LoadScript googleMapsApiKey="AIzaSyCUW_75_gvh4zFPAq87Wdj8OHtp4J_6Eu0">
          <GoogleMap mapContainerStyle={mapStyles} zoom={17} center={defaultCenter}>
            <Marker position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
      );
};

export default Mapa;
