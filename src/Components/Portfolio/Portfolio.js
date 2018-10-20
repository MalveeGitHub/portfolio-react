import React, { Component } from "react";
import "./style.css";
import LightSpeed from "react-reveal/LightSpeed";

export default class Portfolio extends Component {
  render() {
    const { name, img, details, link } = this.props;
    return (
      <LightSpeed left cascade>
        <div className="card text-info" style={{ width: "18rem" }}>
          <div className="img-con text-light text-center">
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="hidden">
              <h2>{name}</h2>
              <a href={link} className="btn btn-outline-primary text-light">
                Visit Site <i class="far fa-eye" />
              </a>{" "}
              <br /> <br />
              <a href={link} className="btn btn-outline-danger text-light">
                View Code <i class="fab fa-github" />
              </a>
            </div>
          </div>

          <div className="card-body" style={{ minHeight: "170px" }}>
            <h5 className="card-title">{name}</h5>
            <p className="card-text port-details">{details}</p>
          </div>
        </div>
      </LightSpeed>
    );
  }
}
