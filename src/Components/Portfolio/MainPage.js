import React, { Component } from "react";
import Portfolio from "./Portfolio";
import Progress from "./Progress";
import WebImage from "./a.jpg";

export default class MainPage extends Component {
  render() {
    return (
      <div className="container mt-4 pt-4 text-center">
        <h2>
          {" "}
          <i className="fas fa-arrow-down" /> Front-End Projects
          <i className="fas fa-arrow-down ml-2" />
        </h2>
        <h3 className="display-">HTML+CSS+JavaScript+jQuery+Bootstrap</h3>
        <div className="row">
          <div className="col-md-3">
            <Portfolio
              img={WebImage}
              name="LoopLab"
              details="A responsive website made with HTML,CSS,JavaScript"
              link="https://google.com"
            />
          </div>
          <div className="col-md-3">
            <Portfolio
              img={WebImage}
              name="LoopLab"
              details="A responsive website made with HTML,CSS,JavaScript"
            />
          </div>
          <div className="col-md-3">
            <Portfolio
              img={WebImage}
              name="LoopLab"
              details="A responsive website made with HTML,CSS,JavaScript"
            />
          </div>
          <div className="col-md-3">
            <Portfolio
              img={WebImage}
              name="LoopLab"
              details="A responsive website made with HTML,CSS,JavaScript"
            />
          </div>
        </div>
        <Progress />
      </div>
    );
  }
}
