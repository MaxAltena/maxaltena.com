import React from "react";
import { Parallax } from "react-parallax";
import Nav from "./Nav";
import Splash from "./Splash";

const InnerHeader = ({ parallax, handleAnimation, handleSidebar }) => {
  const { blur, bgImage, bgImageAlt, strength } = parallax;
  return (
    <div className="InnerHeader">
      <Parallax
        blur={blur}
        bgImage={bgImage}
        bgImageAlt={bgImageAlt}
        strength={strength}
      />
      <div className="container">
        <Nav handleAnimation={handleAnimation} handleSidebar={handleSidebar} />
        <Splash />
      </div>
      <div className="slant" />
    </div>
  );
};

export default InnerHeader;
