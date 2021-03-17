import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

// -----------------------------------------------------------------------------//
//                                                                              //
//                                      TODO                                    //
//                                                                              //
//   We need to create state here, where a signup component's state is false    //
//     Onclick of the 'signup' button, we render signin false, signup true      //
// https://stackoverflow.com/questions/42153627/reactjs-onclick-display-component/42153679      //
//        https://flaviocopes.com/react-show-different-component-on-click/      //
//                                                                              //
//   We need to break this page into only having state, and our two components  //
//                                                                              //
//                                                                              //
// -----------------------------------------------------------------------------//

export default function SignInSide() {
  return (
    <>
      <Login />
      <SignUp />
    </>
  );
}
