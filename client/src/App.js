import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/pageThree";
import FileUpload from "./pages/FileUpload";
import { UserProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <UserProvider>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/pageTwo' component={PageTwo} />
          <Route exact path='/pageThree' component={PageThree} />
          <Route exact path='/fileUpload' component={FileUpload} />
        </Switch>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
