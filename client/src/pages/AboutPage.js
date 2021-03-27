import React from "react";
import HeaderCard from "../components/HeaderCard";
// import TeammateCard from "../components/TeammateCard";
import headerCardData from "../utils/headerCardData.json";
import AboutCard from "../components/AboutCard";
import AboutCardData from "../utils/aboutCardData";
import logo from "../assets/images/VAbluewhitelogo.png";
import { modelNames } from "mongoose";

const About = (props) => {
  return (
    <div>
      <HeaderCard
        title={headerCardData.about.title}
        paragraph={headerCardData.about.paragraph}
        image={logo}
      />
      {AboutCardData.map(
        ({ name, github, linkedin, image }) => {
          return (
            <AboutCard 
            image={image}
            title={name}
            href={linkedin}
            href={github}
          />
          )
        }
      )
      }

    </div>
  );
};

export default About;