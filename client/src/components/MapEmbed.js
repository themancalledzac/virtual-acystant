import React from "react";
import GoogleMapReact from "google-map-react";
// import "./map.css";
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const location = {
    address: '1354 Aloha St, Seattle, WA 98109',
    lat: 47.62731,
    lng: -122.33016,
  }

const LocationPin = ({ text }) => (
<div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
</div>
)

const Map = ({ location, zoomLevel }) => (

    <div className="map">
        <h2 classNAme="map-h2">Seattle Providers</h2>

        <div className="google-map">
            <GoogleMapReact 
                bootstrapURLKeys={{ key: process.env.MAP_KEY }}
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