import React from "react";
import HeaderCard from "../components/HeaderCard";
import headerCardData from "../utils/headerCardData.json";
import Map from "../components/map/Map"

const location = {
  address: '1354 Aloha St, Seattle, WA 98109',
  lat: 47.62731,
  lng: -122.33016,
}

const Doctor = () => {
  return (
    <div>
      <HeaderCard
        title={headerCardData.doctor.title}
        paragraph={headerCardData.doctor.paragraph}
      />
      <Map location={location} zoomLevel={17}/>
    </div>
  );
};

export default Doctor;
