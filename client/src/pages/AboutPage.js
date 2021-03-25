import React from "react";
import HeaderCard from "../components/HeaderCard";
// import TeammateCard from "../components/TeammateCard";
import headerCardData from "../utils/headerCardData.json";

const About = (props) => {
  return (
    <div>
      <HeaderCard
        title={headerCardData.about.title}
        paragraph={headerCardData.about.paragraph}
      />
      {/* <TeammateCard /> */}
    </div>
  );
};

export default About;
