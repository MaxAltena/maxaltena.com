import React, { Component } from "react";
import Goodbye from "./Footer/Goodbye";
import Copyright from "./Footer/Copyright";
import Logo from "../assets/img/Logo";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    };
  }
  render() {
    const { goodbye, copyright } = this.state;
    return (
      <div className="Footer">
        <div className="slant" />
        <div className="container white-text">
          <Goodbye sitemap={goodbye.sitemap} other={goodbye.other} />
          <div className="divider">
            <div className="innerDivider white" />
          </div>
          <Copyright text={copyright.text} links={copyright.links} />
        </div>
        {Logo()}
      </div>
    );
  }
}

export default Footer;
