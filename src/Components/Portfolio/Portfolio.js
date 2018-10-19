import React, { Component } from "react";
import "./style.css";
import Bounce from "react-reveal/Bounce";

export default class Portfolio extends Component {
  render() {
    const { name, img, details, link } = this.props;
    return (
      <Bounce cascade>
        <div className="container p-3 text-info ">
          <div className="card" style={{ width: "18rem" }}>
            <div className="img-con text-light text-center">
              <img className="card-img-top" src={img} alt="Card image cap" />
              <div className="hidden">
                <h2>{name}</h2>
                <a href={link} className="btn btn-outline-primary text-light">
                  Visit Site
                </a>
              </div>
            </div>

            <div className="card-body" style={{ minHeight: "170px" }}>
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{details}</p>
            </div>
          </div>
        </div>
      </Bounce>
    );
  }
}
