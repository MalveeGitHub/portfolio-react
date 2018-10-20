import React, { Component } from "react";
import Portfolio from "./Portfolio";
import Progress from "./Progress";
import WebImage from "./a.jpg";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import Flip from "react-reveal/Flip";
//All Image
import glozom from "./img/glozom.png";
import looplab from "./img/looplab.png";
import mizuxe from "./img/mizuxe.png";
import roku from "./img/roku.png";
import client from "./img/client.png";
import contact from "./img/contact.png";
import todo from "./img/todo.png";

export default class MainPage extends Component {
  render() {
    return (
      <div className="container mt-4 pt-4 text-center" id="portfolio">
        <h2 className="font-end-p">
          {" "}
          <Rotate cascade>Front-End Projects</Rotate>
          <i className="fas fa-arrow-down ml-2" />
        </h2>
        <h3 className="display- project-title my-4">
          <LightSpeed cascade>HTML+CSS+JavaScript+jQuery+Bootstrap</LightSpeed>
        </h3>
        <div className="row">
          <div className="col-md-6">
            <Portfolio
              img={glozom}
              name="Glozom"
              details="A responsive website made with HTML,CSS,JavaScript"
              link=""
              github="https://github.com/MalveeGitHub/glozzom"
              link="https://malveegithub.github.io/glozzom/"
            />
          </div>
          <div className="col-md-6">
            <Portfolio
              img={looplab}
              name="LoopLab"
              details="Looplab is a Responsive Site made with Bootstrap"
              link="https://malveegithub.github.io/looplab/"
              github="https://github.com/MalveeGitHub/looplab"
            />
          </div>
          <div className="col-md-6">
            <Portfolio
              github="https://github.com/MalveeGitHub/mizuxe"
              link="https://malveegithub.github.io/mizuxe/"
              img={mizuxe}
              name="Mizuxe"
              details="Mizuxe is a static responsive website"
            />
          </div>
          <div className="col-md-6">
            <Portfolio
              img={roku}
              name="Roku"
              details="Another Static Front-End Website"
              link="https://malveegithub.github.io/Landing-Page/"
              github="https://github.com/MalveeGitHub/Landing-Page"
            />
          </div>
        </div>
        <div>
          <h3 className="display- project-title my-4">
            <Flip cascade>React+Rudx+Firebase</Flip>
          </h3>
          <div className="row">
            <div className="col-md-6">
              <Portfolio
                img={client}
                name="Client Panel"
                details="A responsive client panel with Firebase"
                github="https://github.com/MalveeGitHub/react-clientpanel"
                link="https://malveegithub.github.io/react-clientpanel/"
              />
            </div>
            <div className="col-md-6">
              <Portfolio
                img={contact}
                name="Contact List"
                details="A responsive Contact list with react-redux"
                github="https://github.com/MalveeGitHub/react-redux-contactApp"
                link="https://malveegithub.github.io/react-contact-list/#/"
              />
            </div>
            <div className="col-md-6">
              <Portfolio
                img={todo}
                name="Todo List"
                link="todo-d08e8.firebaseapp.com"
                github="https://github.com/MalveeGitHub/react-todolist"
                details="A responsive Todo list with firebase database"
              />
            </div>
            <div className="col-md-6">
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
