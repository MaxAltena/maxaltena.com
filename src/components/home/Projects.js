import React, { Component } from "react";
import ReactDOM from "react-dom";
import baffle from "baffle";

import { GitHubRepos } from "../projects";

export default class Projects extends Component {
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
    baffle(".projects-baffle", { characters: "█▓▒░", speed: 150 }).reveal(2500);
    baffle(".projects-baffle-longer", {
      characters: "█▓▒░",
      speed: 150,
      duration: 3000
    }).reveal(3000);
  };

  render() {
    // TODO: Add featured projects

    return (
      <section id="Projects">
        <a className="anchor" id="projects" />
        <h1 className="projects-baffle">Projects</h1>
        <p>{"// Coming soon: Featured projects"}</p>

        <GitHubRepos username="MaxAltena" />
      </section>
    );
  }
}
