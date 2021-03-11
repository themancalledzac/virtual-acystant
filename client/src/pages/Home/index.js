import React from "react";
import HeaderCard from "../../components/HeaderCard";

const addUser = () => {
  // send data to backend
  // util/API.js file
  // dispatch({
  //   type: ADD_USER,
  //   payload: newUser
  // })
};

const Home = () => {
  return (
    <div>
      <HeaderCard />
      <form onSubmit={addUser}>
        <input></input>
      </form>
    </div>
  );
};

export default Home;
