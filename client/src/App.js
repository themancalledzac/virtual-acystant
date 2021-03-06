import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import PageTwo from "./pages/PageTwo";
import { UserProvider } from "./utils/GlobalState";
import PageThree from "./pages/PageThree";

function App() {
  return (
    <Router>
      <UserProvider>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/pageTwo' component={PageTwo} />
          <Route exact path='/pageThree' component={PageThree} />
        </Switch>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
