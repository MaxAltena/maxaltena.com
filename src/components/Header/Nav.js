import React from "react";
import { Link } from "react-router-dom";
import NavbarContent from "./NavbarContent";
import Logo from "../../assets/img/Logo";

const Nav = ({ handleAnimation, handleSidebar }) => {
  // TODO:
  //
  // Add projects dropdown on hover
  //
  return (
    <nav className="transparent z-depth-0">
      <div className="nav-wrapper">
        <Link
          to="/"
          className="brand-logo left"
          onMouseEnter={() => handleAnimation("add")}
          onAnimationEnd={() => handleAnimation("remove")}
        >
          {Logo()}
        </Link>
        <button
          className="right show-on-medium-and-down hide-on-med-and-up"
          onClick={() => handleSidebar(true)}
        >
          <i className="material-icons">menu</i>
        </button>
        <NavbarContent />
      </div>
    </nav>
  );
};

export default Nav;
