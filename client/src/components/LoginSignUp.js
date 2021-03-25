import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { useStoreContext } from "../store/index.js";
// import { useSelector } from "react-redux";

export default function SignInSide() {
  const [state] = useStoreContext();
  // const loginSignupSwitch = useSelector((state) => state.loginSignupSwitch);

  const loginState = state.loginSignup;

  return <>{loginState ? <SignUp /> : <Login />}</>;
}
