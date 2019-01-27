import React from "react";
import { Link, NavLink } from "react-router-dom";
import Alink from "../common/Alink";

const Goodbye = () => {
  return (
    <div className="Goodbye">
      <div className="row hide-on-small-only">
        <div className="section col m12 l6">
          <p className="lowercase">Sitemap</p>
          <div className="row">
            <div className="col s6 m6 l4">
              <ul>
                <li>
                  <Alink
                    type="NavLink"
                    to="/"
                    name="Home"
                    classes="grey-text text-lighten-2 lowercase"
                  />
                </li>
                <li>
                  <Alink
                    type="NavLink"
                    to="/about"
                    name="About"
                    classes="grey-text text-lighten-2 lowercase"
                  />
                </li>
                <li>
                  <Alink
                    type="NavLink"
                    to="/skills"
                    name="Skills"
                    classes="grey-text text-lighten-2 lowercase"
                  />
                </li>
                <li>
                  <Alink
                    type="NavLink"
                    to="/contact"
                    name="Contact"
                    classes="grey-text text-lighten-2 lowercase"
                  />
                </li>
              </ul>
            </div>
            <div className="col s6 m6 l8">
              <ul>
                <li>
                  <Alink
                    type="NavLink"
                    to="/projects"
                    name="Projects"
                    classes="grey-text text-lighten-2 lowercase"
                  />
                </li>
                <li>
                  <NavLink
                    to="/projects/LamecoDashboard"
                    className="Alink grey-text text-lighten-2 margin-left-10"
                  >
                    <span className="inner">
                      <span className="default">LamécoDashboard</span>
                      <span className="hover">LamécoDashboard</span>
                    </span>
                  </NavLink>
                </li>
                <li>
                  <Alink
                    type="NavLink"
                    to="/projects/resume.maxaltena.com"
                    name="resume.maxaltena.com"
                    classes="grey-text text-lighten-2 lowercase margin-left-10"
                  />
                </li>
                <li>
                  <Alink
                    type="NavLink"
                    to="/projects/time.maxaltena.com"
                    name="time.maxaltena.com"
                    classes="grey-text text-lighten-2 lowercase margin-left-10"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section col m6 l3">
          <p className="lowercase">Social</p>
          <ul>
            <li>
              <a
                href="https://github.com/MaxAltena/"
                target="_blank"
                rel="noopener noreferrer"
                className="Alink grey-text text-lighten-2"
              >
                <i className="fab fa-github" />
                <span className="inner">
                  <span className="default">GitHub</span>
                  <span className="hover">GitHub</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/MaxAltena/"
                target="_blank"
                rel="noopener noreferrer"
                className="Alink grey-text text-lighten-2"
              >
                <i className="fab fa-codepen" />
                <span className="inner">
                  <span className="default">CodePen</span>
                  <span className="hover">CodePen</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/MaxAltena/"
                target="_blank"
                rel="noopener noreferrer"
                className="Alink grey-text text-lighten-2"
              >
                <i className="fab fa-linkedin" />
                <span className="inner">
                  <span className="default">LinkedIn</span>
                  <span className="hover">LinkedIn</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://flickr.com/people/MaxAltena/"
                target="_blank"
                rel="noopener noreferrer"
                className="Alink grey-text text-lighten-2"
              >
                <i className="fab fa-flickr" />
                <span className="inner">
                  <span className="default">Flickr</span>
                  <span className="hover">Flickr</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="section col m6 l3">
          <p className="lowercase">Get in touch</p>
          <ul>
            <li>
              <a
                href="tel: +31 6 39105742"
                className="Alink grey-text text-lighten-2 lowercase"
              >
                <i className="material-icons">phone</i>
                <span className="inner">
                  <span className="default">+31 6 39105742</span>
                  <span className="hover">+31 6 39105742</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="mailto:Max@MaxAltena.com"
                className="Alink grey-text text-lighten-2 lowercase"
              >
                <i className="material-icons">email</i>
                <span className="inner">
                  <span className="default">Max@MaxAltena.com</span>
                  <span className="hover">Max@MaxAltena.com</span>
                </span>
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                className="Alink grey-text text-lighten-2 lowercase"
              >
                <i className="material-icons">subject</i>
                <span className="inner">
                  <span className="default">Contact form</span>
                  <span className="hover">Contact form</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row hide-on-med-and-up">
        <div className="section col s12">
          <p className="lowercase">Sitemap</p>
          <div className="row">
            <div className="col s12">
              <ul>
                <li>
                  <Alink
                    type="NavLink"
                    to="/"
                    name="Home"
                    classes="grey-text text-lighten-2 lowercase"
                  />
                </li>
                <li>
                  <Alink
                    type="NavLink"
                    to="/about"
                    name="About"
                    classes="grey-text text-lighten-2 lowercase"
                  />
                </li>
                <li>
                  <Alink
                    type="NavLink"
                    to="/skills"
                    name="Skills"
                    classes="grey-text text-lighten-2 lowercase"
                  />
                </li>
                <li>
                  <Alink
                    type="NavLink"
                    to="/projects"
                    name="Projects"
                    classes="grey-text text-lighten-2 lowercase"
                  />
                </li>
                <li>
                  <NavLink
                    to="/projects/LamecoDashboard"
                    className="Alink grey-text text-lighten-2 margin-left-10"
                  >
                    <span className="inner">
                      <span className="default">LamécoDashboard</span>
                      <span className="hover">LamécoDashboard</span>
                    </span>
                  </NavLink>
                </li>
                <li>
                  <Alink
                    type="NavLink"
                    to="/projects/resume.maxaltena.com"
                    name="resume.maxaltena.com"
                    classes="grey-text text-lighten-2 lowercase margin-left-10"
                  />
                </li>
                <li>
                  <Alink
                    type="NavLink"
                    to="/projects/time.maxaltena.com"
                    name="time.maxaltena.com"
                    classes="grey-text text-lighten-2 lowercase margin-left-10"
                  />
                </li>
                <li>
                  <Alink
                    type="NavLink"
                    to="/contact"
                    name="Contact"
                    classes="grey-text text-lighten-2 lowercase"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section col s12">
          <p className="lowercase">Social</p>
          <ul>
            <li>
              <a
                href="https://github.com/MaxAltena/"
                target="_blank"
                rel="noopener noreferrer"
                className="Alink grey-text text-lighten-2"
              >
                <i className="fab fa-github" />
                <span className="inner">
                  <span className="default">GitHub</span>
                  <span className="hover">GitHub</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/MaxAltena/"
                target="_blank"
                rel="noopener noreferrer"
                className="Alink grey-text text-lighten-2"
              >
                <i className="fab fa-codepen" />
                <span className="inner">
                  <span className="default">CodePen</span>
                  <span className="hover">CodePen</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/MaxAltena/"
                target="_blank"
                rel="noopener noreferrer"
                className="Alink grey-text text-lighten-2"
              >
                <i className="fab fa-linkedin" />
                <span className="inner">
                  <span className="default">LinkedIn</span>
                  <span className="hover">LinkedIn</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://flickr.com/people/MaxAltena/"
                target="_blank"
                rel="noopener noreferrer"
                className="Alink grey-text text-lighten-2"
              >
                <i className="fab fa-flickr" />
                <span className="inner">
                  <span className="default">Flickr</span>
                  <span className="hover">Flickr</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="section col s12">
          <p className="lowercase">Get in touch</p>
          <ul>
            <li>
              <a
                href="tel: +31 6 39105742"
                className="Alink grey-text text-lighten-2 lowercase"
              >
                <i className="material-icons">phone</i>
                <span className="inner">
                  <span className="default">+31 6 39105742</span>
                  <span className="hover">+31 6 39105742</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="mailto:Max@MaxAltena.com"
                className="Alink grey-text text-lighten-2 lowercase"
              >
                <i className="material-icons">email</i>
                <span className="inner">
                  <span className="default">Max@MaxAltena.com</span>
                  <span className="hover">Max@MaxAltena.com</span>
                </span>
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                className="Alink grey-text text-lighten-2 lowercase"
              >
                <i className="material-icons">subject</i>
                <span className="inner">
                  <span className="default">Contact form</span>
                  <span className="hover">Contact form</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Goodbye;
