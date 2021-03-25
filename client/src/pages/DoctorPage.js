import React from "react";
import HeaderCard from "../components/HeaderCard";
import headerCardData from "../utils/headerCardData.json";
import MapContainer from "../components/map/MapContainer";

const Doctor = () => {
  return (
    <div>
      <HeaderCard
        title={headerCardData.doctor.title}
        paragraph={headerCardData.doctor.paragraph}
      />
      <MapContainer />
    </div>
  );
};

export default Doctor;
