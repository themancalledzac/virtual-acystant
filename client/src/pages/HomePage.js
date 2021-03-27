import HeaderCard from "../components/HeaderCard";
import headerCardData from "../utils/headerCardData.json";
import React from "react";
import { Container, Button } from "@material-ui/core";
import FileUpload from "../components/FileUpload";
import logo from "../assets/images/VAbluewhitelogo.png";
import LoadResults from "../components/LoadResults";
import { useStoreContext } from "../store/index";

const Home = () => {
  const [state] = useStoreContext();
  const [show, toggleShow] = React.useState(true);

  return (
    <div>
      <HeaderCard
        title={headerCardData.home.title}
        paragraph={headerCardData.home.paragraph}
        image={logo}
        disclaimer={headerCardData.home.disclaimer}
      />
      <FileUpload />
      <Container maxWidth='lg'>
        <Button
          variant='contained'
          color='primary'
          onClick={() => toggleShow(!show)}
        >
          saved results: {show ? "hide" : "show"}
        </Button>
        {show && <LoadResults />}
      </Container>
    </div>
  );
};

export default Home;