import React, { Component } from "react";
import ReactDOM from "react-dom";
import baffle from "baffle";
import axios from "axios";

import { GitHubProject } from "../common";

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolledTo: false,
      username: "MaxAltena",
      organisations: [],
      repositories: []
    };
  }

  componentDidMount() {
    this.scrollReveal();
    window.addEventListener("scroll", this.scrollReveal);

    const ghUpdate = localStorage.getItem("gh-update");
    if (ghUpdate === null) {
      localStorage.setItem("gh-update", Date.now());
      this.getProjects();
    } else {
      const ghUpdateDate = Number(ghUpdate) + 60000 * 5;
      if (Date.now() > ghUpdateDate) {
        localStorage.setItem("gh-update", Date.now());
        this.getProjects();
      } else {
        this.getProjectsFromLocalStorage();
      }
    }
  }

  getProjectsFromLocalStorage = () => {
    const organisations = JSON.parse(localStorage.getItem("gh-orgs"));
    const repositories = JSON.parse(localStorage.getItem("gh-repos"));

    this.setState({ organisations, repositories });
  };

  getProjects = () => {
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
    baffle(".projects-baffle", { characters: "█▓▒░", speed: 150 }).reveal(2500);
    baffle(".projects-baffle-longer", {
      characters: "█▓▒░",
      speed: 150,
      duration: 3000
    }).reveal(3000);
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
    const { repositories } = this.state;

    const projects = repositories
      .sort((a, b) => {
        const aResult = this.calculateTimeInSeconds(a.pushed_at);
        const bResult = this.calculateTimeInSeconds(b.pushed_at);
        return bResult - aResult;
      })
      .slice(0, 6);

    // const projects = repositories.slice(0, 5);
    // console.log(projects);

    // console.log(repositories);

    // TODO: Add featured projects

    // TODO: Create loading animation

    return (
      <div id="Projects">
        <a className="anchor" id="projects" />
        <h1 className="projects-baffle">Projects</h1>
        <p>{"// Featured projects"}</p>

        <h2>Latest GitHub repos</h2>
        {projects.length >= 1 ? (
          <div className="gh-projectsholders">
            {this.renderProjectsGitHub(projects)}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}
