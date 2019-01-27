import React from "react";
import { Link } from "react-router-dom";
import Sitemap from "./Sitemap";

const Goodbye = ({ sitemap, other }) => {
  return (
    <div className="Goodbye">
      <div className="row hide-on-small-only">
        {sitemap ? (
          <Sitemap
            title={sitemap.title}
            links={sitemap.links}
            projects={sitemap.projects}
            size="med-up"
          />
        ) : null}
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
        {sitemap ? (
          <Sitemap
            title={sitemap.title}
            links={sitemap.links}
            projects={sitemap.projects}
            size="small"
          />
        ) : null}
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
