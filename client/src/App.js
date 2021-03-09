import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Main from "./pages/Main";
import PageTwo from "./pages/PageTwo";
import { UserProvider } from "./utils/GlobalState";
import FileUpload from "./pages/FileUpload/FileUpload";

function App() {
  return (
    <Router>
      <UserProvider>
        {/*<Main />*/}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/pageTwo' component={PageTwo} />
          <Route exact path='/fileUpload' component={FileUpload}/>
        </Switch>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
