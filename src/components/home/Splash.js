import React, { Component } from "react";
import baffle from "baffle";

export default class Splash extends Component {
  componentDidMount() {
    this.doBaffle();
  }

  doBaffle = () => {
    baffle(".splash-baffle", { characters: "█▓▒░", speed: 150 }).reveal(2500);
    baffle(".splash-baffle-long", {
      characters: "█▓▒░",
      speed: 300,
      duration: 5000
    }).reveal(5000);
  };

  render() {
    return (
      <section id="Splash">
        <div className="cat">
          <h1 className="splash-baffle">Hey!</h1>
          <p>
            My name is <span className="splash-baffle bold">Max Altena</span>.
          </p>
          <p>Ready to discover who I am and what I do?</p>
          <a href="#about" className="button">
            <span className="splash-baffle-long">Who&apos;s Max?</span>
            <img
              src={require("../../assets/icons/arrow.svg")}
              alt="→"
              className="blink"
            />
          </a>
        </div>
      </section>
    );
  }
}
