import React, { Component } from "react";

import "../scss/App.scss";

import { SEO, Borders } from "../components/common";
import {
  Navigation,
  Splash,
  Background,
  About,
  Skills,
  Projects,
  Contact
} from "../components/home";

export default class Home extends Component {
  render() {
    return (
      <>
        <SEO />
        <Borders />
        <Navigation />
        <Background />
        <main>
          <Splash />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </>
    );
  }
}
