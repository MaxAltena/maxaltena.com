import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Nav from "./Nav";
import Splash from "./Splash";

class InnerHeader extends Component {
  componentDidMount = () => {
    let img = document.getElementsByClassName("react-parallax-bgimage")[0];
    img.onload = function() {
      img.classList.add("loaded");
      console.log("loaded");
    };
  };

  render() {
    const { blur, bgImage, bgImageAlt, strength } = this.props.parallax;
    return (
      <div className="InnerHeader">
        <Parallax
          blur={blur}
          bgImage={bgImage}
          bgImageAlt={bgImageAlt}
          strength={strength}
        />
        <div className="container">
          <Nav
            handleAnimation={this.props.handleAnimation}
            handleSidebar={this.props.handleSidebar}
          />
          <Splash />
        </div>
        <div className="slant" />
      </div>
    );
  }
}
export default InnerHeader;
