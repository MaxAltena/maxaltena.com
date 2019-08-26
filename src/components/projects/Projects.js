import React, { Component } from "react";
import { ProjectDetails } from "./";

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          title: "The Parkinson Project",
          image: require("../../assets/images/projects/TheParkinsonProject.png"),
          small:
            "Bettering the lives or Parkinson's patients by assisting them in their daily lives.",
          description:
            "A React Native application built through the Expo cli and environment with a group of 6 students. Authentication and database through Firebase and Redux. App tested with real users.",
          contributions: [
            "Created and intergrated the authentication flow with Firebase",
            "Set up the data flow with Firebase and Redux",
            "Created several resuable components for use by fellow teammates"
          ],
          technologies: [
            {
              name: "React Native",
              url: "https://facebook.github.io/react-native/"
            },
            { name: "Expo", url: "https://expo.io/" },
            { name: "Redux", url: "https://redux.js.org/" },
            { name: "Firebase", url: "https://firebase.google.com/" }
          ],
          github: "https://github.com/de-sigaar/TheParkinsonProject",
          view: "https://expo.io/@maxaltena/TheParkinsonProject"
        },
        {
          title: "Laméco Dashboard",
          image: require("../../assets/images/projects/LamecoDashboard.jpg"),
          small: "Making managing dashboards easy and in realtime.",
          description:
            "A React SPA built with the MERN stack and a group of 5 students. Custom API for authentication and data. Managing data with Redux. ",
          contributions: [
            "Created and implemented authentication",
            "Created and documented custom made API",
            "Helped team with troubleshooting"
          ],
          technologies: [
            { name: "MongoDB", url: "https://www.mongodb.com/" },
            { name: "Express", url: "https://expressjs.com/" },
            { name: "React", url: "https://reactjs.org/" },
            { name: "Redux", url: "https://redux.js.org/" },
            { name: "Node", url: "https://nodejs.org/" },
            { name: "SASS", url: "https://sass-lang.com/" }
          ],
          login: {
            username: "johndoe",
            password: "john123"
          },
          github: "https://github.com/de-sigaar/lamecodashboard",
          view: "https://lameco-dashboard.herokuapp.com/"
        },
        {
          title: "NoFoodWasted",
          image: require("../../assets/images/projects/NoFoodWasted.jpg"),
          small: "Simplify managing products and discounts for stores.",
          description:
            "A React Native application built through the Expo cli and environment with a group of 6 students. Database from Firebase and data flow with Redux. Barcode scanner in-app with screen flow for adding products and discounts.",
          contributions: [
            "Set up the data flow with Firebase and Redux",
            "Barcode scanner and flow",
            "Created several resuable components for use by fellow teammates"
          ],
          technologies: [
            {
              name: "React Native",
              url: "https://facebook.github.io/react-native/"
            },
            { name: "Expo", url: "https://expo.io/" },
            { name: "Redux", url: "https://redux.js.org/" },
            { name: "Firebase", url: "https://firebase.google.com/" }
          ],
          view: "https://expo.io/@maxaltena/NoFoodWasted",
          github: "https://github.com/de-sigaar/nofoodwasted"
        }
      ]
    };
  }

  renderProjects = () => {
    let left = false;
    return this.state.projects.map((project, i) => {
      left = !left;
      return (
        <div key={i} className={`Project ${left ? "left" : "right"}`}>
          <div className="img">
            <img src={project.image} alt={`${project.title} image`} />
            {(project.login || project.view || project.github) && (
              <div className="overlay">
                {project.login && (
                  <div className="login">
                    <span>
                      <img
                        src={require("../../assets/vectors/person.svg")}
                        alt=""
                      />
                      {project.login.username}
                    </span>
                    <span>
                      <img
                        src={require("../../assets/vectors/lock.svg")}
                        alt=""
                      />
                      {project.login.password}
                    </span>
                  </div>
                )}
                {(project.view || project.github) && (
                  <div className="links">
                    {project.view && (
                      <a
                        href={project.view}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View project
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${project.view ? "left" : ""}`}
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
          <ProjectDetails project={project} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="projects-holder container">{this.renderProjects()}</div>
    );
  }
}
