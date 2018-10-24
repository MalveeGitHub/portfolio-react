import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="py-4 footer-contact text-center text-light">
        <h1
          className=""
          style={{
            fontFamily: "Exo"
          }}
        >
          Some Ways to Contact With Me
        </h1>
        <div class="container-social">
          <ul class="accordion">
            <li class="tab">
              <div class="social youtube">
                <a
                  href="https://www.youtube.com/channel/UC_mPoleK5iOy_qJg7gzOQ5Q"
                  target="_blank"
                >
                  Youtube
                </a>
              </div>
              <div class="content">
                <h1>YouTube</h1>
                <p>
                  Follow me on YouTube for tutorials with the latest technology
                  in webv development
                </p>
              </div>
            </li>
            <li class="tab">
              <div class="social twitter">
                <a href="https://twitter.com/M_Alveei" target="_blank">
                  Twitter
                </a>
              </div>
              <div class="content">
                <h1>Twitter</h1>
                <p>
                  Follow me on Twitter for video and course updates, article &
                  blog shares and more
                </p>
              </div>
            </li>
            <li class="tab">
              <div class="social facebook">
                <a href="https://www.facebook.com/malveei" target="_blank">
                  Facebook
                </a>
              </div>
              <div class="content">
                <h1>Facebook</h1>
                <p>
                  Follow me on Facebook to stay up to date with Traversy Media
                  and get notified of new videos, publications, etc
                </p>
              </div>
            </li>
            <li class="tab">
              <div class="social linkedin">
                <a
                  href="https://www.linkedin.com/in/m-alvee-alvee-9aa2b3167/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
              <div class="content">
                <h1>LinkedIn</h1>
                <p>Connect with me on a professional level on Linkedin</p>
              </div>
            </li>
            <li class="tab">
              <div class="social instagram">
                <a
                  href="https://www.instagram.com/m_alvee_programmer/"
                  target="_blank"
                >
                  Instagram
                </a>
              </div>
              <div class="content">
                <h1>Instagram</h1>
                <p>
                  Follow me on Instragram for a more personal look into my life
                  and work
                </p>
              </div>
            </li>
            <li class="tab">
              <div class="social github">
                <a href="http://github.com/malveegithub" target="_blank">
                  Github
                </a>
              </div>
              <div class="content">
                <h1>Github</h1>
                <p>
                  Check out my Github for tutorial code, my personal projects
                  and more
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Contact;
