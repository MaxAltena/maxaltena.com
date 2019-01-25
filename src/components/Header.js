import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import { slide as Menu } from "react-burger-menu";
import NavbarContent from "./NavbarContent";
import SidebarContent from "./SidebarContent";
import Splash from "../assets/img/splash.jpg";
import Logo from "../assets/img/Logo";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parallax: {
        blur: { min: -15, max: 30 },
        bgImage: Splash,
        bgImageAlt: "Macbook Pro in front of window",
        strength: 800
      },
      sidebar: {
        isOpen: false,
        customBurgerIcon: false,
        customCrossIcon: false
      }
    };
    this.X = null;
  }

  componentDidMount = () => {
    this.X = document.getElementsByClassName("X")[0];
  };

  handleAnimation = action => {
    switch (action) {
      case "add":
        this.X.classList.add("animated");
        break;
      case "remove":
        this.X.classList.remove("animated");
        break;
      default:
        break;
    }
  };

  handleSidebar = isOpen => {
    this.setState({
      ...this.state,
      sidebar: {
        ...this.state.sidebar,
        isOpen
      }
    });
  };

  render() {
    const { blur, bgImage, bgImageAlt, strength } = this.state.parallax;
    const { isOpen, customBurgerIcon, customCrossIcon } = this.state.sidebar;

    return (
      <div className="Header">
        <div className="innerHeader">
          <Parallax
            blur={blur}
            bgImage={bgImage}
            bgImageAlt={bgImageAlt}
            strength={strength}
          />
          <div className="container">
            <nav className="transparent z-depth-0">
              <div className="nav-wrapper">
                <Link
                  to="/"
                  className="brand-logo left"
                  onMouseEnter={() => this.handleAnimation("add")}
                  onAnimationEnd={() => this.handleAnimation("remove")}
                >
                  {Logo()}
                </Link>
                <button
                  className="right show-on-medium-and-down hide-on-med-and-up"
                  onClick={() => this.handleSidebar(true)}
                >
                  <i className="material-icons">menu</i>
                </button>
                <NavbarContent />
              </div>
            </nav>
            <header className="row">
              <div className="col s12 l10 offset-l1">
                <h1 className="hind bold white-text hide-on-med-and-down">
                  <span>I build websites and systems with</span>
                  <span>the latest technology that resonate</span>
                  <span>
                    with{" "}
                    <Link to="/contact" className="underline">
                      your
                    </Link>{" "}
                    users.
                  </span>
                </h1>
                <h1 className="hind bold white-text hide-on-large-only">
                  I build websites and systems with the latest technology that
                  resonate with{" "}
                  <Link to="/contact" className="underline">
                    your
                  </Link>{" "}
                  users.
                </h1>
                <p className="hide-on-med-and-down">
                  <span>
                    Doing this doesn't go without learning, failing and
                  </span>
                  <span>improving along the way to success.</span>
                </p>
                <p className="hide-on-large-only">
                  Doing this doesn't go without learning, failing and improving
                  along the way to success.
                </p>
                <Link
                  to="/contact"
                  className="btn btn-large waves-effect waves-light z-depth-1"
                >
                  Get in touch
                </Link>
              </div>
            </header>
          </div>
          <div className="slant" />
        </div>
        <Menu
          right
          isOpen={isOpen}
          customBurgerIcon={customBurgerIcon}
          customCrossIcon={customCrossIcon}
        >
          <SidebarContent handleSidebar={this.handleSidebar} />
        </Menu>
      </div>
    );
  }
}

export default Header;
