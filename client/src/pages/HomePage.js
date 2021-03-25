import HeaderCard from "../components/HeaderCard";
import headerCardData from "../utils/headerCardData.json";

import FileUpload from "../components/FileUpload";
// import Wikipedia from "../components/Wikipedia";
import PreviousResults from "../components/PreviousResults";
import doctorImage from "../assets/VAbluewhitelogo.png";
import Wikipedia from "../components/Wikipedia";
import LoadResults from "../components/LoadResults";

const Home = () => {
  return (
    <div>
      <HeaderCard
        title={headerCardData.home.title}
        paragraph={headerCardData.home.paragraph}
        image={doctorImage}
        disclaimer={headerCardData.home.disclaimer}
      />
      <FileUpload />
      <LoadResults />
      {/* <PreviousResults /> */}
      {/* <form onSubmit={addUser}></form> */}
    </div>
  );
};

export default Home;
