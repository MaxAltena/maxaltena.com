import React from "react";
import { Link } from "react-router-dom";

const Splash = ({ splash }) => {
  const { title, subtitle, action } = splash;
  return (
    <header className="Splash row">
      <div className="col s12 l10 offset-l1">
        {title.large ? title.large : null}
        {title.med ? title.med : null}
        {title.small ? title.small : null}
        {title.all ? title.all : null}
        {subtitle.large ? subtitle.large : null}
        {subtitle.med ? subtitle.med : null}
        {subtitle.small ? subtitle.small : null}
        {subtitle.all ? subtitle.all : null}

        {action ? (
          action.type === "Link" ? (
            <Link to={action.to} className={action.classes}>
              {action.name}
            </Link>
          ) : null
        ) : null}
      </div>
    </header>
  );
};

export default Splash;
