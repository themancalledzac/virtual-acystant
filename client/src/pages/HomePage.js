import HeaderCard from "../components/HeaderCard";
import headerCardData from "../utils/headerCardData.json";
import React from "react";
import { Container, Button, makeStyles } from "@material-ui/core";
import FileUpload from "../components/FileUpload";
import logo from "../assets/images/VAbluewhitelogo.png";
import LoadResults from "../components/LoadResults";
import { useStoreContext } from "../store/index";
import colors from "../components/colors";

const useStyles = makeStyles(() => ({
  buttonStyle: {
    color: colors.blue3,
  },
}));

const Home = () => {
  const [state] = useStoreContext();
  const classes = useStyles();
  const [show, toggleShow] = React.useState(true);
  return (
    <>
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
          className={classes.buttonStyle}
          onClick={() => toggleShow(!show)}
        >
          saved results: {show ? "hide" : "show"}
        </Button>
      </Container>
      {show && <LoadResults />}
      {/* <PreviousResults /> */}
      {/* <form onSubmit={addUser}></form> */}
    </>
  );
};

export default Home;
