import React, { Component } from "react";

import { Parallax } from "react-parallax";
import Nav from "./Header/Nav";
import Splash from "./Header/Splash";

class Header extends Component {
  componentDidMount = () => {
    this.img = document.getElementsByClassName("react-parallax-bgimage")[0];
    this.img.onload = () => {
      this.img.style["transition"] = "opacity 0.9s ease-in-out";
      this.img.classList.add("loaded");
    };
  };

  render() {
    const { parallax, nav, splash, splashImage } = this.props;
    const { blur, strength } = parallax;
    return (
      <div className="Header">
        <Parallax blur={blur} bgImage={splashImage} strength={strength} />
        <div className="container">
          <Nav nav={nav} />
          <Splash splash={splash} />
        </div>
        <div className="slant" />
      </div>
    );
  }
}

export default Header;
