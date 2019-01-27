import React, { Component } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SplashImg from "./assets/img/splash.jpg";
import Logo from "./assets/img/Logo";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      header: {
        parallax: {
          blur: { min: -16, max: 30 },
          bgImage: SplashImg,
          bgImageAlt: "Macbook Pro in front of window",
          strength: 800
        },
        nav: {
          brand: (
            <Link
              to="/"
              className="brand-logo left"
              onMouseEnter={() => this.handleAnimation("add")}
              onAnimationEnd={() => this.handleAnimation("remove")}
            >
              {Logo()}
            </Link>
          ),
          menu: (
            <button
              className="right show-on-medium-and-down hide-on-med-and-up"
              onClick={() => this.handleSidebar(true)}
            >
              <i className="material-icons">menu</i>
            </button>
          ),
          items: [
            {
              type: "NavLink",
              to: "/",
              name: "Home",
              classes: "lowercase"
            },
            {
              type: "NavLink",
              to: "/about",
              name: "About",
              classes: "lowercase"
            },
            {
              type: "NavLink",
              to: "/projects",
              name: "projects",
              classes: "lowercase",
              subItems: [
                {
                  type: "NavLink",
                  to: "/projects/LamecoDashboard",
                  name: "LamécoDashboard"
                },
                {
                  type: "NavLink",
                  to: "/projects/resume.maxaltena.com",
                  name: "resume.maxaltena.com",
                  classes: "lowercase"
                },
                {
                  type: "NavLink",
                  to: "/projects/time.maxaltena.com",
                  name: "time.maxaltena.com",
                  classes: "lowercase"
                }
              ]
            },
            {
              type: "NavLink",
              to: "/skills",
              name: "Skills",
              classes: "lowercase"
            },
            {
              type: "NavLink",
              to: "/contact",
              name: "Contact",
              classes: "lowercase"
            }
          ]
        },
        splash: {
          title: {
            large: (
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
            ),
            med: (
              <h1 className="hind bold white-text hide-on-large-only">
                I build websites and systems with the latest technology that
                resonate with{" "}
                <Link to="/contact" className="underline">
                  your
                </Link>{" "}
                users.
              </h1>
            )
          },
          subtitle: {
            large: (
              <p className="hide-on-med-and-down">
                <span>Doing this doesn't go without learning, failing and</span>
                <span>improving along the way to success.</span>
              </p>
            ),
            med: (
              <p className="hide-on-large-only">
                Doing this doesn't go without learning, failing and improving
                along the way to success.
              </p>
            )
          },
          action: {
            type: "Link",
            to: "/contact",
            classes:
              "btn btn-large waves-effect waves-blue z-depth-0 lowercase",
            name: "Get in touch"
          }
        },
        logo: {
          X: null
        }
      },
      footer: {
        goodbye: {
          sitemap: {
            title: "Sitemap",
            links: [
              {
                type: "NavLink",
                to: "/",
                name: "Home",
                classes: "grey-text text-lighten-2 lowercase"
              },
              {
                type: "NavLink",
                to: "/about",
                name: "About",
                classes: "grey-text text-lighten-2 lowercase"
              },
              {
                type: "NavLink",
                to: "/skills",
                name: "Skills",
                classes: "grey-text text-lighten-2 lowercase"
              },
              {
                type: "NavLink",
                to: "/contact",
                name: "Contact",
                classes: "grey-text text-lighten-2 lowercase"
              }
            ],
            projects: [
              {
                type: "NavLink",
                to: "/projects",
                name: "Projects",
                classes: "grey-text text-lighten-2 lowercase"
              },
              {
                type: "NavLink",
                to: "/projects/LamecoDashboard",
                name: "LamécoDashboard",
                classes: "grey-text text-lighten-2 margin-left-10"
              },
              {
                type: "NavLink",
                to: "/projects/resume.maxaltena.com",
                name: "resume.maxaltena.com",
                classes: "grey-text text-lighten-2 margin-left-10"
              },
              {
                type: "NavLink",
                to: "/projects/time.maxaltena.com",
                name: "time.maxaltena.com",
                classes: "grey-text text-lighten-2 margin-left-10"
              }
            ]
          },
          other: [
            {
              title: "Social",
              links: [
                {
                  type: "other",
                  to: "https://github.com/MaxAltena/",
                  name: "GitHub",
                  icon: <i className="fab fa-github" />,
                  classes: "Alink grey-text text-lighten-2"
                },
                {
                  type: "other",
                  to: "https://codepen.io/MaxAltena/",
                  name: "CodePen",
                  icon: <i className="fab fa-codepen" />,
                  classes: "Alink grey-text text-lighten-2"
                },
                {
                  type: "other",
                  to: "https://linkedin.com/in/MaxAltena/",
                  name: "LinkedIn",
                  icon: <i className="fab fa-linkedin" />,
                  classes: "Alink grey-text text-lighten-2"
                },
                {
                  type: "other",
                  to: "https://flickr.com/people/MaxAltena/",
                  name: "Flickr",
                  icon: <i className="fab fa-flickr" />,
                  classes: "Alink grey-text text-lighten-2"
                }
              ]
            },
            {
              title: "Get in touch",
              links: [
                {
                  type: "other",
                  to: "tel: +31 6 39105742",
                  name: "+31 6 39105742",
                  icon: <i className="material-icons">phone</i>,
                  classes: "Alink grey-text text-lighten-2 lowercase"
                },
                {
                  type: "other",
                  to: "mailto:Max@MaxAltena.com",
                  name: "Max@MaxAltena.com",
                  icon: <i className="material-icons">email</i>,
                  classes: "Alink grey-text text-lighten-2 lowercase"
                },
                {
                  type: "Link",
                  to: "/contact",
                  name: "Contact form",
                  icon: <i className="material-icons">subject</i>,
                  classes: "Alink grey-text text-lighten-2 lowercase"
                }
              ]
            }
          ]
        },
        copyright: {
          text: <p>&copy; {new Date().getFullYear()} Max Altena</p>,
          links: [
            {
              type: "Link",
              to: "/terms",
              name: "Terms & conditions",
              classes: "white-text lowercase"
            },
            {
              type: "Link",
              to: "/credits",
              name: "Credits",
              classes: "white-text lowercase"
            }
          ]
        }
      }
    };
  }

  componentDidMount = () => {
    this.setState({
      ...this.state,
      header: {
        ...this.state.header,
        logo: {
          ...this.state.header.logo,
          X: document.getElementsByClassName("X")[0]
        }
      }
    });
  };

  handleAnimation = action => {
    switch (action) {
      case "add":
        this.state.header.logo.X.classList.add("animated");
        break;
      case "remove":
        this.state.header.logo.X.classList.remove("animated");
        break;
      default:
        break;
    }
  };

  isMenuOpen = state => {
    const { isOpen } = state;
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
    return state.isOpen;
  };

  handleSidebar = isOpen => {
    if (isOpen) {
      this.setState({
        ...this.state,
        sidebar: {
          ...this.state.sidebar,
          isOpen
        }
      });
    } else {
      this.setState({
        ...this.state,
        sidebar: {
          ...this.state.sidebar,
          isOpen
        }
      });
    }
  };

  render() {
    const { sidebar, header, footer } = this.state;
    const { isOpen, customBurgerIcon, customCrossIcon, styles } = sidebar;
    const { parallax, nav, splash, logo } = header;
    const { goodbye, copyright } = footer;
    return (
      <div className="App">
        <Menu
          right
          isOpen={isOpen}
          customBurgerIcon={customBurgerIcon}
          customCrossIcon={customCrossIcon}
          styles={styles}
          onStateChange={this.isMenuOpen}
        >
          <Sidebar nav={nav} handleSidebar={this.handleSidebar} />
        </Menu>
        <Header
          parallax={parallax}
          nav={nav}
          splash={splash}
          logo={logo}
          handleSidebar={this.handleSidebar}
        />
        <div className="Content">
          <div className="container">
            <div className="row">
              <div className="col s12 l6">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">Lorem, ipsum.</span>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Harum ipsum libero ab aspernatur eius unde delectus minus
                      ullam doloribus quam porro, dolor placeat, laudantium
                      modi. Ut incidunt minima eaque explicabo?
                    </p>
                  </div>
                  <div className="card-action">
                    <Link to="/" className="btn waves-effect waves-light blue">
                      Home
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col s12 l6">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">Card Title</span>
                    <p>About me</p>
                  </div>
                  <div className="card-action">
                    <Link
                      to="/about"
                      className="btn waves-effect waves-light blue"
                    >
                      About
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col s12 l6">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">Card Title</span>
                    <p>Show stuff with github?</p>
                  </div>
                  <div className="card-action">
                    <Link
                      to="/projects"
                      className="btn waves-effect waves-light blue"
                    >
                      Projects
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col s12 l6">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">Card Title</span>
                    <p>Woordweb/technieken die ik ken/kan gebruiken</p>
                  </div>
                  <div className="card-action">
                    <Link
                      to="/skills"
                      className="btn waves-effect waves-light blue"
                    >
                      Skills
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col s12 l6">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">Lorem, ipsum.</span>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Harum ipsum libero ab aspernatur eius unde delectus minus
                      ullam doloribus quam porro, dolor placeat, laudantium
                      modi. Ut incidunt minima eaque explicabo?
                    </p>
                  </div>
                  <div className="card-action">
                    <Link to="/" className="btn waves-effect waves-light blue">
                      Home
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col s12 l6">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">Card Title</span>
                    <p>Technieken die ik wil leren?</p>
                  </div>
                  <div className="card-action">
                    <Link
                      to="/skills"
                      className="btn waves-effect waves-light blue"
                    >
                      Skills
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col s12 l6">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">Card Title</span>
                    <p>Full width slider met projecten?</p>
                  </div>
                  <div className="card-action">
                    <Link
                      to="/projects"
                      className="btn waves-effect waves-light blue"
                    >
                      Projects
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col s12 l6">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">Card Title</span>
                    <p>Contact form</p>
                  </div>
                  <div className="card-action">
                    <Link
                      to="/contact"
                      className="btn waves-effect waves-light blue"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col s12 l6">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">Lorem, ipsum.</span>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Harum ipsum libero ab aspernatur eius unde delectus minus
                      ullam doloribus quam porro, dolor placeat, laudantium
                      modi. Ut incidunt minima eaque explicabo?
                    </p>
                  </div>
                  <div className="card-action">
                    <Link to="/" className="btn waves-effect waves-light blue">
                      Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer goodbye={goodbye} copyright={copyright} logo={Logo} />
      </div>
    );
  }
}

export default App;
