import React from "react";
import HeaderCard from "../components/HeaderCard";
// import TeammateCard from "../components/TeammateCard";
import headerCardData from "../utils/headerCardData.json";
import logo from "../assets/VAbluewhitelogo.png";

const About = () => {
  return (
    <div>
      <HeaderCard
        title={headerCardData.about.title}
        paragraph={headerCardData.about.paragraph}
        disclaimer={headerCardData.about.disclaimer}
        image={logo}
      />
      {/* <TeammateCard /> */}
    </div>
  );
};

export default About;
