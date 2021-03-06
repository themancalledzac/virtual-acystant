import React from "react";

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
      <h1>HomePage</h1>
      <form onSubmit={addUser}>
        <input></input>
      </form>
    </div>
  );
};

export default Home;
