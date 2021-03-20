import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";
import { Icon } from '@iconify/react';
import mapMarkerAlt from '@iconify-icons/fa-solid/map-marker-alt';
require("dotenv").config();

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY;

console.log(process.env.REACT_APP_GOOGLE_MAPS_KEY);

const LocationPin = ({ text }) => (
<div className="pin">
    <Icon icon={mapMarkerAlt} className="pin-icon" />
    <p className="pin-text">{text}</p>
</div>
)

const Map = ({ location, zoomLevel }) => (

    <div className="map">
        <h2 classNAme="map-h2">Seattle Providers</h2>

        <div className="google-map">
            <GoogleMapReact 
                bootstrapURLKeys={{ key: API_KEY }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    </div>
)

export default Map;