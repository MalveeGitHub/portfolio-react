import React, { Component } from "react";
import "./style.css";

class Skill extends Component {
  render() {
    return (
      <div className="text-center">
        <h1 className="py-4 text-light skill-title">{this.props.title}</h1>
        <ul>
          {this.props.skills.map(skill => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Skill;
