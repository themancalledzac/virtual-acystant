import React from "react";
import HeaderCard from "../../components/HeaderCard";
import headerCardData from "../../utils/headerCardData.json";
import LoginForm from "../../components/LoginForm";
import LogoutButton from "../../components/LogoutButton";
import SignupForm from "../../components/SignupForm";

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
      <HeaderCard
        title={headerCardData.home.title}
        paragraph={headerCardData.home.paragraph}
      />
      <SignupForm />
      <LoginForm />
      <LogoutButton />
      <form onSubmit={addUser}>
        <input></input>
      </form>
    </div>
  );
};

export default Home;
