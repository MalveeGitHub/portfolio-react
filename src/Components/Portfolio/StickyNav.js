import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default class StickyNav extends Component {
  render() {
    return (
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark py-0">
        <div className="container">
          <a class="navbar-brand" href="#">
            Alvee
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <AnchorLink class="nav-link" href="#home">
                  Home
                </AnchorLink>
              </li>
              <li class="nav-item">
                <AnchorLink class="nav-link" href="#portfolio">
                  Projects
                </AnchorLink>
              </li>
              <li class="nav-item">
                <AnchorLink class="nav-link" href="#mySkills">
                  Skills
                </AnchorLink>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
