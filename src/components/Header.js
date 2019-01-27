import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Nav from "./Header/Nav";
import Splash from "./Header/Splash";

class Header extends Component {
  componentDidMount = () => {
    let img = document.getElementsByClassName("react-parallax-bgimage")[0];
    img.onload = function() {
      img.classList.add("loaded");
    };
  };

  render() {
    const { parallax, nav, splash } = this.props;
    const { blur, bgImage, bgImageAlt, strength } = parallax;
    return (
      <div className="Header">
        <Parallax
          blur={blur}
          bgImage={bgImage}
          bgImageAlt={bgImageAlt}
          strength={strength}
        />
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
