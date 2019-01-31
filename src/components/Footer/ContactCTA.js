import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import photo from "../../assets/img/pf-min.jpg";

const ContactCTA = () => {
  return (
    <div className="ContactCTA z-depth-1">
      <div className="hide-on-med-and-up">
        <h4 className="hind">I'm always looking for (new) projects.</h4>
        <span>Let's see if we can make something happen.</span>
        <Link
          to="/contact"
          className="btn-large waves-effect waves-blue z-depth-0 lowercase"
          onClick={() =>
            scroll.scrollToTop({ duration: 500, smooth: "easeInOut" })
          }
        >
          Get in touch
        </Link>
      </div>
      <img
        src={photo}
        alt="Max Altena"
        className="responsive-img circle hide-on-med-and-up"
      />
      <div className="hide-on-small-only hide-on-large-only">
        <h4 className="hind">I'm always looking for (new) projects.</h4>
        <span>Let's see if we can make something happen.</span>
        <Link
          to="/contact"
          className="btn-large waves-effect waves-blue z-depth-0 lowercase"
          onClick={() =>
            scroll.scrollToTop({ duration: 500, smooth: "easeInOut" })
          }
        >
          Get in touch
        </Link>
      </div>
      <img
        src={photo}
        alt="Max Altena"
        className="responsive-img circle hide-on-small-only hide-on-large-only"
      />
      <div className="hide-on-med-and-down">
        <h4 className="hind">I'm always looking for (new) projects.</h4>
        <span>Let's see if we can make something happen.</span>
        <Link
          to="/contact"
          className="btn-large waves-effect waves-blue z-depth-0 lowercase"
          onClick={() =>
            scroll.scrollToTop({ duration: 500, smooth: "easeInOut" })
          }
        >
          Get in touch
        </Link>
      </div>
      <img
        src={photo}
        alt="Max Altena"
        className="responsive-img circle hide-on-med-and-down"
      />
    </div>
  );
};

export default ContactCTA;
