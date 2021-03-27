import React from "react";
import HeaderCard from "../components/HeaderCard";
import headerCardData from "../utils/headerCardData.json";
import aboutCardData from "../utils/aboutCardData.json";
import MediaCard from "../components/AboutCard";
import Grid from '@material-ui/core/Grid';
import logo from "../assets/images/VAbluewhitelogo.png";

const About = (props) => {
  return (
    <div>
      <HeaderCard
        title={headerCardData.about.title}
        paragraph={headerCardData.about.paragraph}
        image={logo}
        disclaimer={headerCardData.about.disclaimer}
      />
      <Grid container spacing={3}> 
        <Grid item xs={12} sm={12} md={3}>
          <MediaCard 
          nameTitle={aboutCardData.kat.name}
          headshot={aboutCardData.kat.image}
          name={aboutCardData.kat.name}
          github={aboutCardData.kat.github}
          linkedin={aboutCardData.kat.linkedin}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <MediaCard 
          nameTitle={aboutCardData.macz.name}
          headshot={aboutCardData.macz.image}
          name={aboutCardData.macz.name}
          github={aboutCardData.macz.github}
          linkedin={aboutCardData.macz.linkedin}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <MediaCard
          nameTitle={aboutCardData.max.name}
          headshot={aboutCardData.max.image}
          name={aboutCardData.max.name}
          github={aboutCardData.max.github}
          linkedin={aboutCardData.max.linkedin}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <MediaCard 
          nameTitle={aboutCardData.zac.name}
          headshot={aboutCardData.zac.image}
          name={aboutCardData.zac.name}
          github={aboutCardData.zac.github}
          linkedin={aboutCardData.zac.linkedin}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default About;