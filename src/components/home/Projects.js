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
      loadingProjectsGitHub: true,
      projectsGitHub: []
    };
  }

  componentDidMount() {
    this.scrollReveal();
    window.addEventListener("scroll", this.scrollReveal);

    const token = "9ad07d868168a23eca26482b42712065ee2ef733";
    axios.defaults.headers.common["Authorization"] = "token " + token;

    axios
      .get("https://api.github.com/user/repos", {
        params: {
          visibility: "public",
          affilitation: "owner,organization_member",
          sort: "pushed"
        }
      })
      .then(repos => {
        repos.data.forEach(repo => {
          if (!repo.archived && this.state.projectsGitHub.length !== 6)
            this.setState({
              projectsGitHub: [...this.state.projectsGitHub, repo]
            });
        });
      })
      .then(() => {
        this.setState({ loadingProjectsGitHub: false });
      });
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
    baffle(".projects-baffle", { characters: "█▓▒░", speed: 150 }).reveal(2500);
    baffle(".projects-baffle-longer", {
      characters: "█▓▒░",
      speed: 150,
      duration: 3000
    }).reveal(3000);
  };

  renderProjectsGitHub = () => {
    return this.state.projectsGitHub.map(project => {
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
    const { loadingProjectsGitHub } = this.state;

    // TODO: Add featured projects

    // TODO: Create loading animation

    return (
      <div id="Projects">
        <a className="anchor" id="projects" />
        <h1 className="projects-baffle">Projects</h1>
        <p>// Featured projects</p>

        <h2>Latest GitHub repos</h2>
        {loadingProjectsGitHub ? (
          <p>Loading...</p>
        ) : (
          <div className="gh-projectsholders">
            {this.renderProjectsGitHub()}
          </div>
        )}
      </div>
    );
  }
}
