import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LoginSignUp from "./components/LoginSignUp";
import Main from "./pages/NavContainer";
import { StoreProvider, useStoreContext } from "./store/index.js";

// Import the useAuthTokenStore hook.
import { useAuthTokenStore } from "./utils/auth";

function App() {
  const store = useAuthTokenStore();
  // Use the hook to reauthenticate stored tokens.

  const [state] = useStoreContext();
  const useAuth = state.userAuth.token;

  if (store === false) {
    return null;
  }

  return (
    <Router>
      <StoreProvider>{useAuth ? <Main /> : <LoginSignUp />}</StoreProvider>
    </Router>
  );
}

export default App;
