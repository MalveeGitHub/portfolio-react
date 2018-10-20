import React, { Component } from "react";
import "./style.css";
import ReactTypingEffect from "react-typing-effect";

export default class Header extends Component {
  render() {
    return (
      <header className="bg-secondary text-light" id="home">
        <div className="container text-center pt-4">
          <h1 className="pt-4 pb-4">
            <ReactTypingEffect
              text={[
                "HEY, I am M.Alvee.",
                "Love everything about code!",
                "Learning something new everyday.",
                "I am a Professional Web Developer"
              ]}
              eraseDelay={500}
              speed={50}
            />
          </h1>
          <p>WordPress Developer - Web Developer - MERN Stack</p>
          <h1 className="display-1 mt-4 pt-4">
            Welcome to my Website/Portfolio
          </h1>
        </div>
      </header>
    );
  }
}
