import HeaderCard from "../components/HeaderCard";
import headerCardData from "../utils/headerCardData.json";

import FileUpload from "../components/FileUpload";
import { useStoreContext } from "../store";

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
      />
      <FileUpload />
      <form onSubmit={addUser}>
        <input></input>
      </form>
    </div>
  );
};

export default Home;
