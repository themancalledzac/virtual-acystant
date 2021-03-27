import React from "react";
import HeaderCard from "../components/HeaderCard";
import headerCardData from "../utils/headerCardData.json";
import aboutCardData from "../utils/aboutCardData.json";
import MediaCard from "../components/AboutCard";
import Grid from "@material-ui/core/Grid";
import logo from "../assets/images/VAbluewhitelogo.png";
import Kat from "../assets/images/kat-gomozova.png";
import Macz from "../assets/images/macz-norton.jpg";
import Max from "../assets/images/max-lechner.jpg";
import Zac from "../assets/images/zac-edens.jpeg";


const About = () => {
  return (
    <div>
      <HeaderCard
        title={headerCardData.about.title}
        paragraph={headerCardData.about.paragraph}
        image={logo}
        disclaimer={headerCardData.about.disclaimer}
      />
      <Grid container spacing={3}> 
        <Grid item xs={12} sm={6} md={3}>
          <MediaCard 
          nameTitle={aboutCardData.kat.name}
          headshot={Kat}
          name={aboutCardData.kat.name}
          github={aboutCardData.kat.github}
          linkedin={aboutCardData.kat.linkedin}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MediaCard
          nameTitle={aboutCardData.max.name}
          headshot={Max}
          name={aboutCardData.max.name}
          github={aboutCardData.max.github}
          linkedin={aboutCardData.max.linkedin}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MediaCard 
          nameTitle={aboutCardData.zac.name}
          headshot={Zac}
          name={aboutCardData.zac.name}
          github={aboutCardData.zac.github}
          linkedin={aboutCardData.zac.linkedin}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MediaCard 
          nameTitle={aboutCardData.macz.name}
          headshot={Macz}
          name={aboutCardData.macz.name}
          github={aboutCardData.macz.github}
          linkedin={aboutCardData.macz.linkedin}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default About;