import React, { Component } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import LamecoDashoard from "./components/pages/Projects/LamecoDashboard";
import Resume from "./components/pages/Projects/Resume";
import Time from "./components/pages/Projects/Time";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import Terms from "./components/pages/Terms";
import Credits from "./components/pages/Credits";

import imgHome from "./assets/img/splash/home-min.jpg";
import imgAbout from "./assets/img/splash/about-min.jpg";
import imgProjects from "./assets/img/splash/projects-min.jpg";
import imgLamecoDashboard from "./assets/img/splash/lamecodashboard-min.jpg";
import imgResume from "./assets/img/splash/resume-min.jpg";
import imgTime from "./assets/img/splash/time-min.jpg";
import imgSkills from "./assets/img/splash/skills-min.jpg";
import imgContact from "./assets/img/splash/contact-min.jpg";
import imgTerms from "./assets/img/splash/terms-min.jpg";
import imgCredits from "./assets/img/splash/credits-min.jpg";
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
          bgImage: imgHome,
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
                  to: "/projects/resume",
                  name: "Online résumé",
                  classes: "lowercase"
                },
                {
                  type: "NavLink",
                  to: "/projects/time",
                  name: "Countdown timer",
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
          ],
          socials: [
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
            },
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
                to: "/projects/resume",
                name: "Online résumé",
                classes: "grey-text text-lighten-2 lowercase margin-left-10"
              },
              {
                type: "NavLink",
                to: "/projects/time",
                name: "Countdown timer",
                classes: "grey-text text-lighten-2 lowercase margin-left-10"
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
                  to: "tel:+31 6 39105742",
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
              classes: "lowercase"
            },
            {
              type: "Link",
              to: "/credits",
              name: "Credits",
              classes: "lowercase"
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
    this.img = document.getElementsByClassName("react-parallax-bgimage")[0];
  };

  componentDidUpdate = () => {
    this.img = document.getElementsByClassName("react-parallax-bgimage")[0];
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
    const { path } = this.props.match;

    let splashImage = null;
    let splashContent = null;
    let pageContent = null;
    switch (path) {
      case "/about":
        document.title = "About – Max Altena";
        splashImage = imgAbout;
        splashContent = {
          title: {
            all: <h1 className="hind bold white-text big">About</h1>
          },
          subtitle: {
            all: (
              <p className="big">
                Some information about me, because you were looking for it!
              </p>
            )
          }
        };
        pageContent = <About props={this.props} />;
        break;
      case "/projects":
        document.title = "Projects – Max Altena";
        splashImage = imgProjects;
        splashContent = {
          title: {
            all: <h1 className="hind bold white-text big">Projects</h1>
          },
          subtitle: {
            all: (
              <p className="big">
                Here are the latest projects I've been working on, with or
                without a group.
              </p>
            )
          }
        };
        pageContent = <Projects props={this.props} />;
        break;
      case "/projects/LamecoDashboard":
        document.title = "Laméco Dashboard – Max Altena";
        splashImage = imgLamecoDashboard;
        splashContent = {
          title: {
            all: <h1 className="hind bold white-text big">Laméco Dashboard</h1>
          },
          subtitle: {
            all: (
              <p className="big">
                Created with a group, we built a dashboard management system
                with the MERN-stack.
              </p>
            )
          },
          action: {
            type: "a",
            to: "https://lameco-dashboard.herokuapp.com",
            classes:
              "btn btn-large waves-effect waves-blue z-depth-0 lowercase",
            name: "Visit website"
          }
        };
        pageContent = <LamecoDashoard props={this.props} />;
        break;
      case "/projects/resume":
        document.title = "Résumé – Max Altena";
        splashImage = imgResume;
        splashContent = {
          title: {
            all: <h1 className="hind bold white-text big">Online résumé</h1>
          },
          subtitle: {
            all: (
              <p className="big">
                I created a (interactive) website of my personal résumé that is
                fully dynamic and responsive.
              </p>
            )
          },
          action: {
            type: "a",
            to: "https://resume.maxaltena.com/",
            classes:
              "btn btn-large waves-effect waves-blue z-depth-0 lowercase",
            name: "Visit website"
          }
        };
        pageContent = <Resume props={this.props} />;
        break;
      case "/projects/time":
        document.title = "Countdown timer – Max Altena";
        splashImage = imgTime;
        splashContent = {
          title: {
            all: <h1 className="hind bold white-text big">Countdown timer</h1>
          },
          subtitle: {
            all: (
              <p className="big">
                I created a fun little website to countdown to a certain time.
              </p>
            )
          },
          action: {
            type: "a",
            to: "https://time.maxaltena.com/",
            classes:
              "btn btn-large waves-effect waves-blue z-depth-0 lowercase",
            name: "Visit website"
          }
        };
        pageContent = <Time props={this.props} />;
        break;
      case "/skills":
        document.title = "Skills – Max Altena";
        splashImage = imgSkills;
        splashContent = {
          title: {
            all: <h1 className="hind bold white-text big">Skills</h1>
          },
          subtitle: {
            all: (
              <p className="big">
                This is the place where I show which skills I currently have and
                the ones I want to learn in the future.
              </p>
            )
          }
        };
        pageContent = <Skills props={this.props} />;
        break;
      case "/contact":
        document.title = "Contact – Max Altena";
        splashImage = imgContact;
        splashContent = {
          title: {
            all: <h1 className="hind bold white-text big">Contact</h1>
          },
          subtitle: {
            all: (
              <p className="big">
                Want to contact me for possible projects or just wanting to ask
                a question? This is the place to be!
              </p>
            )
          }
        };
        pageContent = <Contact props={this.props} />;
        break;
      case "/terms":
        document.title = "Terms & conditions – Max Altena";
        splashImage = imgTerms;
        splashContent = {
          title: {
            all: (
              <h1 className="hind bold white-text big">Terms & conditions</h1>
            )
          },
          subtitle: {
            all: (
              <p className="big">
                This seems to be the best part of the website, some legal jargon
                to keep me safe from random things.
              </p>
            )
          }
        };
        pageContent = <Terms props={this.props} />;
        break;
      case "/credits":
        document.title = "Credits – Max Altena";
        splashImage = imgCredits;
        splashContent = {
          title: {
            all: <h1 className="hind bold white-text big">Credits</h1>
          },
          subtitle: {
            all: (
              <p className="big">
                Giving credits to other creators is important, so don't mind if
                I do.
              </p>
            )
          }
        };
        pageContent = <Credits props={this.props} />;
        break;
      case "/":
      default:
        document.title = "Max Altena";
        splashImage = parallax.bgImage;
        splashContent = splash;
        pageContent = <Home props={this.props} />;
        break;
    }

    if (this.img && !this.img.src.endsWith(splashImage)) {
      this.img.classList.remove("loaded");
      this.img.style["transition"] = "opacity 0s linear";
      this.img.style.opacity = 0;
    }

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
          splashImage={splashImage}
          nav={nav}
          splash={splashContent}
          logo={logo}
          handleSidebar={this.handleSidebar}
        />
        {pageContent}
        <Footer goodbye={goodbye} copyright={copyright} logo={Logo} />
      </div>
    );
  }
}

export default App;
