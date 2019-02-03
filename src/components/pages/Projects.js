import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="Projects">
      <div className="container">
        <h3 className="center" style={{ padding: "80px 0 20px 0" }}>
          Seems like this is being worked on...
        </h3>
        <h5 className="center" style={{ padding: "20px 0" }}>
          So here are some links to go to pages that do have some content:
        </h5>
        <div className="center">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/terms">Terms & conditions</Link>
          <Link to="/credits">Credits</Link>
        </div>
        {/* Projects
        Some list of projects here, maybe something github related?
        Fullwidth project slider? or Mosaic project?
        GitHub feed/stuff?
        Codepen feed/stuff? */}
      </div>
    </div>
  );
};

export default Projects;
