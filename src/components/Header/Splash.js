import React from "react";
import { Link } from "react-router-dom";

const Splash = () => {
  return (
    <header className="Splash row">
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
          I build websites and systems with the latest technology that resonate
          with{" "}
          <Link to="/contact" className="underline">
            your
          </Link>{" "}
          users.
        </h1>
        <p className="hide-on-med-and-down">
          <span>Doing this doesn't go without learning, failing and</span>
          <span>improving along the way to success.</span>
        </p>
        <p className="hide-on-large-only">
          Doing this doesn't go without learning, failing and improving along
          the way to success.
        </p>
        <Link
          to="/contact"
          className="btn btn-large waves-effect waves-light z-depth-1"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
};

export default Splash;
