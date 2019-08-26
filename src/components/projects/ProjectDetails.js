import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ProjectDetails extends Component {
  static propTypes = {
    project: PropTypes.object
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
    const { project } = this.props;

    return (
      <div className="ProjectDetails">
        {project.title && <h3>{project.title}</h3>}
        {project.small && <small>{project.small}</small>}
        {project.description && <p>{project.description}</p>}
        {project.contributions &&
          this.renderContributions(project.contributions)}
        {project.technologies && this.renderTechnologies(project.technologies)}
      </div>
    );
  }
}
