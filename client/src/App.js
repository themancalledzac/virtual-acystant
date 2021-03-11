import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import { UserProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <UserProvider>
        <Main />
      </UserProvider>
    </Router>
  );
}

export default App;
