import React from "react";
import PropTypes from "prop-types";

const GitHubProject = ({
  id,
  name,
  owner,
  description,
  language,
  url,
  forks,
  stargazes,
  watchers
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      key={id}
      className="GitHubProject"
    >
      <div className="name">
        <img src={require("../../assets/icons/github-repo.svg")} alt="Repo" />
        <span className="normal">{owner}</span>
        <span className="bold">/{name}</span>
      </div>
      <p className="description">
        {description ? description : "No description"}
      </p>
      <div className="stats">
        <div className="language">
          <span>Built with</span>
          <span className="bold">{language}</span>
        </div>
        {watchers ? (
          <div className="stat">
            {watchers}{" "}
            <img
              src={require("../../assets/icons/github-watch.svg")}
              alt="watch"
            />
          </div>
        ) : null}
        {stargazes ? (
          <div className="stat">
            {stargazes}{" "}
            <img
              src={require("../../assets/icons/github-star.svg")}
              alt="star"
            />
          </div>
        ) : null}
        {forks ? (
          <div className="stat">
            {forks}{" "}
            <img
              src={require("../../assets/icons/github-fork.svg")}
              alt="fork"
            />
          </div>
        ) : null}
      </div>
    </a>
  );
};

GitHubProject.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  owner: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.string,
  url: PropTypes.string,
  forks: PropTypes.number,
  stargazes: PropTypes.number,
  watchers: PropTypes.number
};

export default GitHubProject;
