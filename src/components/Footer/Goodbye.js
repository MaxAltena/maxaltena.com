import React from "react";
import { Link } from "react-router-dom";
import Sitemap from "./Sitemap";

const Goodbye = ({ sitemap, other }) => {
  return (
    <div className="Goodbye">
      <div className="row hide-on-small-only">
        {sitemap ? (
          <Sitemap
            title={sitemap.title}
            links={sitemap.links}
            projects={sitemap.projects}
            size="med-up"
          />
        ) : null}
        {other
          ? other.map(section => {
              return (
                <div className="section col m6 l3" key={section.title}>
                  <p className="lowercase">{section.title}</p>
                  <ul>
                    {section.links &&
                      section.links.map(link => {
                        return (
                          <li key={link.name}>
                            {link.type === "other" ? (
                              <a
                                href={link.to}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={link.classes}
                              >
                                {link.icon}
                                <span className="inner">
                                  <span className="default">{link.name}</span>
                                  <span className="hover">{link.name}</span>
                                </span>
                              </a>
                            ) : (
                              <Link to={link.to} className={link.classes}>
                                {link.icon}
                                <span className="inner">
                                  <span className="default">{link.name}</span>
                                  <span className="hover">{link.name}</span>
                                </span>
                              </Link>
                            )}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              );
            })
          : null}
      </div>
      <div className="row hide-on-med-and-up">
        {sitemap ? (
          <Sitemap
            title={sitemap.title}
            links={sitemap.links}
            projects={sitemap.projects}
            size="small"
          />
        ) : null}
        {other
          ? other.map(section => {
              return (
                <div className="section col s12" key={section.title}>
                  <p className="lowercase">{section.title}</p>
                  <ul>
                    {section.links &&
                      section.links.map(link => {
                        return (
                          <li key={link.name}>
                            {link.type === "other" ? (
                              <a
                                href={link.to}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={link.classes}
                              >
                                {link.icon}
                                <span className="inner">
                                  <span className="default">{link.name}</span>
                                  <span className="hover">{link.name}</span>
                                </span>
                              </a>
                            ) : (
                              <a href={link.to} className={link.classes}>
                                {link.icon}
                                <span className="inner">
                                  <span className="default">{link.name}</span>
                                  <span className="hover">{link.name}</span>
                                </span>
                              </a>
                            )}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Goodbye;
