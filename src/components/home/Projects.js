import React, { Component } from "react";
import ReactDOM from "react-dom";
import baffle from "baffle";

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
    return (
      <div id="Projects">
        <a className="anchor" id="projects" />
        <h1 className="projects-baffle">Projects</h1>
        <p>Currently busy with adding projects...</p>
      </div>
    );
  }
}
