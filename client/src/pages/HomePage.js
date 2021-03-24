import HeaderCard from "../components/HeaderCard";
import headerCardData from "../utils/headerCardData.json";

import FileUpload from "../components/FileUpload";
// import Wikipedia from "../components/Wikipedia";
import { useStoreContext } from "../store";
import PreviousResults from "../components/PreviousResults";
import doctorImage from "../assets/images/pexels-anthony-shkraba-5214995.jpg";
import Wikipedia from "../components/Wikipedia";

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
  return (
    <div>
      <HeaderCard
        title={headerCardData.home.title}
        paragraph={headerCardData.home.paragraph}
        image={doctorImage}
      />
      <FileUpload />
      
      {/* <PreviousResults /> */}
      {/* <form onSubmit={addUser}></form> */}
    </div>
  );
};

export default Home;
