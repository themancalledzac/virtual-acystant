import HeaderCard from "../components/HeaderCard";
import headerCardData from "../utils/headerCardData.json";

import FileUpload from "../components/FileUpload";
// import Wikipedia from "../components/Wikipedia";
import PreviousResults from "../components/PreviousResults";
import doctorImage from "../assets/images/pexels-anthony-shkraba-5214995.jpg";
import Wikipedia from "../components/Wikipedia";

const Home = () => {
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
