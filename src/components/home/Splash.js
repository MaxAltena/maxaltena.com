import React, { Component } from "react";
import baffle from "baffle";

export default class Splash extends Component {
  componentDidMount() {
    this.doBaffle();
  }

  doBaffle = () => {
    baffle(".home-baffle", { characters: "█▓▒░", speed: 150 }).reveal(2500);
    baffle(".home-baffle-long", {
      characters: "█▓▒░",
      speed: 300,
      duration: 5000
    }).reveal(5000);
  };

  render() {
    return (
      <div id="home">
        <div className="cat">
          <h1 className="home-baffle">Hey!</h1>
          <p>
            My name is <span className="home-baffle bold">Max Altena</span>.
          </p>
          <p>Ready to discover who I am and what I do?</p>
          <a href="#about" className="button">
            <span className="home-baffle-long">Who&apos;s Max?</span>
            <span className="blink">→</span>
          </a>
        </div>
      </div>
    );
  }
}
