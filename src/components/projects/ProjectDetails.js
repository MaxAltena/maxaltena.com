import React, { Component } from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";
import baffle from "baffle";

export default class ProjectDetails extends Component {
  static propTypes = {
    project: PropTypes.object,
    number: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      scrolledTo: false
    };
  }

  componentDidMount() {
    this.scrollReveal();
    window.addEventListener("scroll", this.scrollReveal);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollReveal);
  }

  scrollReveal = () => {
    const height = window.innerHeight;
    const scroll = window.scrollY;
    // eslint-disable-next-line react/no-find-dom-node
    const offsetTop = ReactDOM.findDOMNode(this).offsetTop;

    if (!this.state.scrolledTo && height + scroll > offsetTop) {
      this.doBaffle();
      this.setState({ scrolledTo: true });
    }
  };

  doBaffle = () => {
    baffle(`.project-details-baffle-${this.props.number}`, {
      characters: "█▓▒░",
      speed: 150,
      duration: 1500
    }).reveal(1500);
  };

  renderContributions = contributions => {
    return (
      <div className="ProjectCont">
        <h4>Contributions</h4>
        <ul>
          {contributions.map((contribution, i) => {
            return <li key={i}>{contribution}</li>;
          })}
        </ul>
      </div>
    );
  };

  renderTechnologies = technologies => {
    return (
      <div className="ProjectTech">
        <h4>Technologies</h4>
        <ul>
          {technologies.map((technology, i) => {
            return (
              <li key={i}>
                <a
                  href={technology.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {technology.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  render() {
    const { project, number } = this.props;

    return (
      <div className="ProjectDetails">
        {project.title && (
          <h3 className={`project-details-baffle-${number}`}>
            {project.title}
          </h3>
        )}
        {project.small && <small>{project.small}</small>}
        {project.description && <p>{project.description}</p>}
        {project.contributions &&
          this.renderContributions(project.contributions)}
        {project.technologies && this.renderTechnologies(project.technologies)}
      </div>
    );
  }
}
