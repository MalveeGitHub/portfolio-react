import React, { Component } from "react";
import "./style.css";
import ScrollAnimation from "react-animate-on-scroll";
import Jello from "react-reveal/Jello";
import Shake from "react-reveal/Shake";

export default class Progress extends Component {
  render() {
    return (
      <div className="container my-4 " id="mySkills">
        <Jello>
          <h2 className="display-4">My Skill Level</h2>
        </Jello>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <Shake>
              <p className="display-3 lead text-info">Some of my skills</p>
            </Shake>
          </div>
          <div className="col-md-6">
            <div className="prog-con">
              <span className="ico">
                <i class="fab fa-html5 fa-2x" />
              </span>
              <div className="progress mt-4">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{ width: "85%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
            <div className="prog-con">
              <span className="ico">
                <i class="fab fa-css3-alt fa-2x" />
              </span>
              <div className="progress mt-4">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>

            <div className="prog-con">
              <span className="ico">
                <i class="fab fa-js fa-2x" />
              </span>
              <div className="progress mt-4">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                  role="progressbar"
                  style={{ width: "98%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>

            <div className="prog-con">
              <span className="ico">
                <i class="fab fa-react fa-2x" />
              </span>
              <div className="progress mt-4">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>

            <div className="prog-con">
              <span className="ico">
                <i class="fab fa-node-js fa-2x" />
              </span>
              <div className="progress mt-4">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
