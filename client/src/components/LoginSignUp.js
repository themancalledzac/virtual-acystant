import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { useStoreContext } from "../store/index.js";

export default function SignInSide() {
  const [state] = useStoreContext();
  const loginState = state.loginSignup;

  return <>{loginState ? <SignUp /> : <Login />}</>;
}
