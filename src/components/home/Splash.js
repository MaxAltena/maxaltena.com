import React, { Component } from "react";
import baffle from "baffle";

export default class Splash extends Component {
  componentDidMount() {
    this.doBaffle();
  }

  doBaffle = () => {
    baffle(".splash-baffle", {
      characters: "█▓▒░",
      speed: 150,
      duration: 1500,
    }).reveal(1500);
    baffle(".splash-baffle-long", {
      characters: "█▓▒░",
      speed: 150,
      duration: 3000,
    }).reveal(3000);
  };

  render() {
    return (
      <section id="Splash">
        <div className="cat">
          <h1>
            <span className="splash-baffle">Hey!</span>
            <span>
              My name is <span className="splash-baffle bold">Max Altena</span>.
            </span>
          </h1>
          <p>Ready to discover who I am and what I do?</p>
          <a href="#about" className="button">
            <span className="splash-baffle-long">Who&apos;s Max?</span>
            <img
              src={require("../../assets/icons/arrow.svg")}
              title="Arrow"
              alt="Arrow to the right"
              className="blink"
            />
          </a>
        </div>
      </section>
    );
  }
}
