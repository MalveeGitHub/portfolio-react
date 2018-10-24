import React, { Component } from "react";
import "./App.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MySkill from "./Components/MySkill";
//Portfolio Components
import MainPage from "./Components/Portfolio/MainPage";
import Header from "./Components/Portfolio/Header";
import StickyNav from "./Components/Portfolio/StickyNav";
import Contact from "./Components/Contact";
// React Router
import { HashRouter as Router, Route, Switch } from "react-router-dom";
class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <StickyNav />
        <MainPage />
        <Contact />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/skills" component={MySkill} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
