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
      <section id="Contact">
        <a className="anchor" id="contact" />
        <div className="cat">
          <h2 className="contact-baffle">Contact</h2>
          <p>Interested in contacting me?</p>
          <p>Wanting to know what I am up to?</p>
          <div>
            <a
              href="mailto:max@maxaltena.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={require("../../assets/icons/mail.svg")} alt="Mail" />
            </a>
            <a
              href="https://github.com/MaxAltena"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../../assets/icons/github.svg")}
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/maxaltena/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../../assets/icons/linkedin.svg")}
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </section>
    );
  }
}
