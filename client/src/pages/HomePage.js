import HeaderCard from "../components/HeaderCard";
import headerCardData from "../utils/headerCardData.json";
import React from "react";
import { Container, Button } from "@material-ui/core";
import FileUpload from "../components/FileUpload";
// import Wikipedia from "../components/Wikipedia";
import PreviousResults from "../components/PreviousResults";
<<<<<<< HEAD
// import doctorImage from "../assets/images/pexels-anthony-shkraba-5214995.jpg";
import backgroundImage from "../assets/images/pexels-karolina-grabowska-4021775.jpg";
=======
import doctorImage from "../assets/VAbluewhitelogo.png";
>>>>>>> main
import Wikipedia from "../components/Wikipedia";
import LoadResults from "../components/LoadResults";
import { useStoreContext } from "../store/index";


const addUser = () => {
  // send data to backend
  // util/API.js file
  // dispatch({
  //   type: ADD_USER,
  //   payload: newUser
  // })
};

const Home = () => {
  const [state] = useStoreContext();
  console.log(state);
  const [show, toggleShow] = React.useState(true);

  return (
    <div>
      <HeaderCard
        title={headerCardData.home.title}
        paragraph={headerCardData.home.paragraph}
<<<<<<< HEAD
        image={backgroundImage}
=======
        image={doctorImage}
        disclaimer={headerCardData.home.disclaimer}
>>>>>>> main
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
      {/* <PreviousResults /> */}
      {/* <form onSubmit={addUser}></form> */}
    </div>
  );
};

export default Home;
