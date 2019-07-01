import React, { Component } from "react";
import ReactDOM from "react-dom";
import baffle from "baffle";
import axios from "axios";

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolledTo: false,
      loading: true,
      projects: []
    };
  }

  componentDidMount() {
    this.scrollReveal();
    window.addEventListener("scroll", this.scrollReveal);

    // axios
    //   .get("https://api.github.com/users/MaxAltena/repos", {
    //     params: {
    //       type: "all",
    //       sort: "updated"
    //     }
    //   })
    //   .then(res => {
    //     console.log(res);
    //   });
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
    const { loading } = this.state;

    return (
      <div id="Projects">
        <a className="anchor" id="projects" />
        <h1 className="projects-baffle">Projects</h1>
        <p>Currently busy with adding projects [GitHub and Personal]...</p>
        {loading ? <p>Loading</p> : <div>Projects</div>}
      </div>
    );
  }
}
