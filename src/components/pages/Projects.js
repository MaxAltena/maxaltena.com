import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="Projects">
      <div className="container">
        <div className="row">
          <div className="col s12 l6">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Projects</span>
                <p>
                  Some list of projects here, maybe something github related?
                </p>
              </div>
            </div>
          </div>
          <div className="col s12 l6">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Laméco Dashboard</span>
                <p>
                  Some general information and product information about this
                  project.
                </p>
              </div>
              <div className="card-action">
                <Link to="/projects/LamecoDashboard">View</Link>
              </div>
            </div>
          </div>
          <div className="col s12 l6">
            <div className="card">
              <div className="card-content">
                <span className="card-title">resume.maxaltena.com</span>
                <p>
                  Some general information and product information about this
                  project.
                </p>
              </div>
              <div className="card-action">
                <Link to="/projects/resume.maxaltena.com">View</Link>
              </div>
            </div>
          </div>
          <div className="col s12 l6">
            <div className="card">
              <div className="card-content">
                <span className="card-title">time.maxaltena.com</span>
                <p>
                  Some general information and product information about this
                  project.
                </p>
              </div>
              <div className="card-action">
                <Link to="/projects/time.maxaltena.com">View</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
