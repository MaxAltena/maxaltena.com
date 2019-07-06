import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { Loading } from "../common";
import { GitHubProject } from "../projects";

export default class GitHubRepos extends Component {
  static propTypes = {
    username: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username,
      takingLong: false,
      organisations: [],
      repositories: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ takingLong: true });
    }, 2500);

    this.getProjects();
  }

  getProjects = () => {
    const ghUpdate = localStorage.getItem("gh-update");

    if (ghUpdate) {
      const ghUpdateDate = Number(ghUpdate) + 60000 * 60;
      if (Date.now() > ghUpdateDate) {
        localStorage.setItem("gh-update", Date.now());
        this.getRepos();
      } else {
        this.getProjectsFromLocalStorage();
      }
    } else {
      localStorage.setItem("gh-update", Date.now());
      this.getRepos();
    }
  };

  getProjectsFromLocalStorage = () => {
    const organisations = JSON.parse(localStorage.getItem("gh-orgs"));
    const repositories = JSON.parse(localStorage.getItem("gh-repos"));

    if (repositories == null) this.getRepos();

    this.setState({ organisations, repositories });
  };

  getRepos = () => {
    this.getReposFromUser();
    this.getReposFromOrgs();
  };

  getReposFromOrgs = () => {
    const { username } = this.state;
    axios
      .get("https://api.github.com/users/" + username + "/orgs")
      .then(orgs => {
        orgs.data.forEach(org => {
          this.setState({
            organisations: [...this.state.organisations, org]
          });
          localStorage.setItem(
            "gh-orgs",
            JSON.stringify(this.state.organisations)
          );
          axios
            .get("https://api.github.com/orgs/" + org.login + "/repos", {
              params: { sort: "pushed", direction: "desc" }
            })
            .then(repos => {
              repos.data.forEach(repo => {
                if (!repo.archived)
                  axios
                    .get(
                      "https://api.github.com/repos/" +
                        org.login +
                        "/" +
                        repo.name +
                        "/contributors"
                    )
                    .then(contris => {
                      if (contris.data !== "")
                        contris.data.forEach(contri => {
                          if (contri.login === username) {
                            this.setState({
                              repositories: [...this.state.repositories, repo]
                            });
                            localStorage.setItem(
                              "gh-repos",
                              JSON.stringify(this.state.repositories)
                            );
                          }
                        });
                    });
              });
            });
        });
      });
  };

  getReposFromUser = () => {
    const { username } = this.state;
    axios
      .get("https://api.github.com/users/" + username + "/repos", {
        params: { type: "owner", sort: "pushed", direction: "desc" }
      })
      .then(repos => {
        repos.data.forEach(repo => {
          if (!repo.archived) {
            this.setState({
              repositories: [...this.state.repositories, repo]
            });
            localStorage.setItem(
              "gh-repos",
              JSON.stringify(this.state.repositories)
            );
          }
        });
      });
  };

  calculateTimeInSeconds = ISOString => {
    let oldDate = new Date(ISOString);
    let obj = [
      oldDate.getUTCFullYear(),
      oldDate.getUTCMonth(),
      oldDate.getUTCDate(),
      oldDate.getUTCHours(),
      oldDate.getUTCMinutes(),
      oldDate.getUTCSeconds()
    ];

    let newDate = new Date();
    newDate.setUTCFullYear(obj[0]);
    newDate.setUTCMonth(obj[1]);
    newDate.setUTCDate(obj[2]);
    newDate.setUTCHours(obj[3]);
    newDate.setUTCMinutes(obj[4]);
    newDate.setUTCSeconds(obj[5]);

    return newDate.getTime();
  };

  renderProjectsGitHub = projects => {
    return projects.map(project => {
      return (
        <GitHubProject
          key={project.id}
          id={project.id}
          name={project.name}
          owner={project.owner.login}
          description={project.description}
          language={project.language}
          url={project.html_url}
          forks={project.forks_count}
          stargazes={project.stargazers_count}
          watchers={project.watchers_count}
        />
      );
    });
  };

  render() {
    const { repositories, takingLong } = this.state;
    let projects = [];

    if (repositories) {
      projects = repositories
        .sort((a, b) => {
          const aResult = this.calculateTimeInSeconds(a.pushed_at);
          const bResult = this.calculateTimeInSeconds(b.pushed_at);
          return bResult - aResult;
        })
        .slice(0, 6);
    }

    return (
      <>
        <h2 className="projects-baffle-longer">Latest GitHub repos</h2>
        {projects.length >= 1 ? (
          <div className="gh-projectsholders">
            {this.renderProjectsGitHub(projects)}
          </div>
        ) : (
          <>
            <Loading />
            {takingLong ? (
              <div>It&apos;s taking longer than expected...</div>
            ) : null}
          </>
        )}
      </>
    );
  }
}
