import React, { Component } from "react";
import Portfolio from "./Portfolio";
import Progress from "./Progress";
import WebImage from "./a.jpg";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import Flip from "react-reveal/Flip";

export default class MainPage extends Component {
  render() {
    return (
      <div className="container mt-4 pt-4 text-center" id="portfolio">
        <h2>
          {" "}
          <Rotate cascade>Front-End Projects</Rotate>
          <i className="fas fa-arrow-down ml-2" />
        </h2>
        <h3 className="display-">
          <LightSpeed cascade>HTML+CSS+JavaScript+jQuery+Bootstrap</LightSpeed>
        </h3>
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
        <div>
          <h3 className="display-">
            <Flip cascade>React+Rudx+Firebase</Flip>
          </h3>
          <div className="row">
            <div className="col-md-3">
              <Portfolio
                img={WebImage}
                name="Client Panel"
                details="A responsive website made with HTML,CSS,JavaScript"
                link="https://google.com"
              />
            </div>
            <div className="col-md-3">
              <Portfolio
                img={WebImage}
                name="Contact List"
                details="A responsive Client Panel"
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
        </div>

        <Progress />
      </div>
    );
  }
}
