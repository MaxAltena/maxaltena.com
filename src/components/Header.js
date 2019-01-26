import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import InnerHeader from "./Header/InnerHeader";
import SidebarContent from "./Header/SidebarContent";
import SplashImg from "../assets/img/splash.jpg";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parallax: {
        blur: { min: -16, max: 30 },
        bgImage: SplashImg,
        bgImageAlt: "Macbook Pro in front of window",
        strength: 800
      },
      sidebar: {
        isOpen: false,
        customBurgerIcon: false,
        customCrossIcon: false,
        styles: {
          bmMenu: {
            boxShadow: "none"
          }
        }
      },
      logo: {
        X: null
      }
    };
  }

  componentDidMount = () => {
    this.setState({
      ...this.state,
      logo: {
        ...this.state.logo,
        X: document.getElementsByClassName("X")[0]
      }
    });
  };

  handleAnimation = action => {
    switch (action) {
      case "add":
        this.state.logo.X.classList.add("animated");
        break;
      case "remove":
        this.state.logo.X.classList.remove("animated");
        break;
      default:
        break;
    }
  };

  handleSidebar = isOpen => {
    if (isOpen) {
      this.setState({
        ...this.state,
        sidebar: {
          ...this.state.sidebar,
          isOpen,
          styles: {
            ...this.state.sidebar.styles,
            bmMenu: {
              ...this.state.sidebar.styles.bmMenu,
              boxShadow:
                "0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2)"
            }
          }
        }
      });
    } else {
      this.setState({
        ...this.state,
        sidebar: {
          ...this.state.sidebar,
          isOpen,
          styles: {
            ...this.state.sidebar.styles,
            bmMenu: {
              ...this.state.sidebar.styles.bmMenu,
              boxShadow: "none"
            }
          }
        }
      });
    }
  };

  render() {
    const {
      isOpen,
      customBurgerIcon,
      customCrossIcon,
      styles
    } = this.state.sidebar;

    return (
      <div className="Header">
        <InnerHeader
          parallax={this.state.parallax}
          handleAnimation={this.handleAnimation}
          handleSidebar={this.handleSidebar}
        />
        <Menu
          right
          isOpen={isOpen}
          customBurgerIcon={customBurgerIcon}
          customCrossIcon={customCrossIcon}
          styles={styles}
        >
          <SidebarContent handleSidebar={this.handleSidebar} />
        </Menu>
      </div>
    );
  }
}

export default Header;
