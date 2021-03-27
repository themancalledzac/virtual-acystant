import HeaderCard from "../components/HeaderCard";
import headerCardData from "../utils/headerCardData.json";
import React from "react";
import { makeStyles } from "@material-ui/core";
import FileUpload from "../components/FileUpload";
// import Wikipedia from "../components/Wikipedia";

import logo from "../assets/VAbluewhitelogo.png";
import Results from "../components/Results";

const Home = () => {
  return (
    <>
      <HeaderCard
        title={headerCardData.home.title}
        paragraph={headerCardData.home.paragraph}
        image={logo}
        disclaimer={headerCardData.home.disclaimer}
      />

      <FileUpload />
      <Results />
    </>
  );
};

export default Home;
