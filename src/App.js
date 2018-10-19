import React, { Component } from "react";
import "./App.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
//Portfolio Components
import MainPage from "./Components/Portfolio/MainPage";
import Header from "./Components/Portfolio/Header";
import StickyNav from "./Components/Portfolio/StickyNav";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <StickyNav />
        <MainPage />
      </div>
    );
  }
}

export default App;
