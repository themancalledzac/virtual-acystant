import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import { StoreProvider } from "./store/index";
// Import the useAuthTokenStore hook.
import { useAuthTokenStore } from "./utils/auth";

function App() {

  // Use the hook to reauthenticate stored tokens.
  useAuthTokenStore();

  return (
    <Router>
      <StoreProvider>
        <Main />
      </StoreProvider>
    </Router>
  );
}

export default App;