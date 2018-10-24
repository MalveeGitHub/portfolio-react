import React, { Component } from "react";
import "./style.css";
import Skill from "./Skill";

class MySkill extends Component {
  render() {
    return (
      <div className="background">
        <div className="container-fluid s-con">
          <h1 className="text-white s-title  text-center py-3">
            All the technologies and language that I know
          </h1>
        </div>
        <div className="container-fluid s-con1" style={{ minHeight: "100vh" }}>
          <div className="row">
            <div className="col-md-4">
              <Skill
                title="Front-End"
                skills={[
                  "HTML5",
                  "CSS3",
                  "JavaScript(ES6)",
                  "Bootstrap",
                  "Axios, Fetch",
                  "React.js",
                  "Redux",
                  "Grid, Flexbox",
                  "Create-React-App",
                  "Next.js"
                ]}
              />
            </div>
            <div className="col-md-4">
              <Skill
                title="Tools"
                skills={[
                  "Atom",
                  "VS Code",
                  "Webpack || Parcel",
                  "Gulp",
                  "Ubuntu(Linux)",
                  "Photoshop",
                  "Windows 10",
                  "Hyper (Terminal)",
                  "V8 (JS)",
                  "OOP && Functional"
                ]}
              />
            </div>
            <div className="col-md-4">
              <Skill
                title="Back-End"
                skills={[
                  "Node.js",
                  "Express",
                  "JavaScript(ES6)",
                  "Axios(nodejs)",
                  "MongoDB",
                  "MERN",
                  "Mongoose",
                  "Path, Body-Parcer",
                  "Python",
                  "Django"
                ]}
              />
            </div>
          </div>
          <div className="my-4 text-center skill-footer pb-4 mb-4">
            <h1>Learning More Everyday.</h1>
            <h3>Just Love Coding</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default MySkill;
