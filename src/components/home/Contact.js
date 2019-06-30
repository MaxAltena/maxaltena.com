import React, { Component } from "react";
import ReactDOM from "react-dom";
import baffle from "baffle";

export default class Contact extends Component {
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
    baffle(".contact-baffle", { characters: "█▓▒░", speed: 150 }).reveal(2500);
    baffle(".contact-baffle-longer", {
      characters: "█▓▒░",
      speed: 150,
      duration: 3000
    }).reveal(3000);
    baffle(".contact-baffle-long", {
      characters: "█▓▒░",
      speed: 300,
      duration: 5000
    }).reveal(5000);
  };

  render() {
    return (
      <div id="Contact">
        <a className="anchor" id="contact" />
        <div className="cat">
          <h1 className="contact-baffle">Contact</h1>
          <p>
            That&apos;s me,{" "}
            <span className="contact-baffle bold">Max Altena</span>.
          </p>
          <p>Ready to contact me?</p>
          <a
            href="mailto:max@maxaltena.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            <span className="contact-baffle-long">Contact Max</span>
            <span className="blink">→</span>
          </a>
        </div>
      </div>
    );
  }
}
