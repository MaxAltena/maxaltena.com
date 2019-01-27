import React from "react";
import Alink from "../../common/Alink";

const Sitemap = ({ title, links, projects, size }) => {
  switch (size) {
    case "med-up":
      return (
        <div className="section col m12 l6">
          <p className="lowercase">{title}</p>
          <div className="row">
            <div className="col s6 m6 l4">
              <ul>
                {links &&
                  links.map(link => {
                    return (
                      <li key={link.name}>
                        <Alink
                          type={link.type}
                          to={link.to}
                          name={link.name}
                          classes={link.classes}
                        />
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="col s6 m6 l8">
              <ul>
                {projects &&
                  projects.map(project => {
                    return (
                      <li key={project.name}>
                        <Alink
                          type={project.type}
                          to={project.to}
                          name={project.name}
                          classes={project.classes}
                        />
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      );
    case "small":
      return (
        <div className="section col s12">
          <p className="lowercase">{title}</p>
          <div className="row">
            <div className="col s12">
              <ul>
                {links &&
                  links.map(link => {
                    let elements = [];
                    if (link.name === "Contact") {
                      projects &&
                        projects.forEach(project => {
                          elements.push(
                            <li key={project.name}>
                              <Alink
                                type={project.type}
                                to={project.to}
                                name={project.name}
                                classes={project.classes}
                              />
                            </li>
                          );
                        });
                      elements.push(
                        <li key={link.name}>
                          <Alink
                            type={link.type}
                            to={link.to}
                            name={link.name}
                            classes={link.classes}
                          />
                        </li>
                      );
                    } else {
                      elements.push(
                        <li key={link.name}>
                          <Alink
                            type={link.type}
                            to={link.to}
                            name={link.name}
                            classes={link.classes}
                          />
                        </li>
                      );
                    }
                    return elements;
                  })}
              </ul>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default Sitemap;
