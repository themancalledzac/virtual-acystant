import React from "react";
import HeaderCard from "../components/HeaderCard";
import headerCardData from "../utils/headerCardData.json";
import MapContainer from "../components/map/MapContainer";
import searchImage from "../assets/images/loupe.png";

const Doctor = () => {
  return (
    <div>
      <HeaderCard
        title={headerCardData.doctor.title}
        paragraph={headerCardData.doctor.paragraph}
        image={searchImage}
        disclaimer={headerCardData.disclaimer}
      />
      <MapContainer />
    </div>
  );
};

export default Doctor;
