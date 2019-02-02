import React from "react";
import Recaptcha from "react-recaptcha";

const ContactType = ({
  hash,
  fullName,
  email,
  phone,
  subject,
  text,
  mailSent,
  error,
  verified,
  handleChange,
  handleSubmit,
  verifyCallback
}) => {
  let content;
  switch (hash) {
    default:
    case "#form":
      let button;
      if (mailSent) {
        button = (
          <button
            type="submit"
            className="btn waves-effect waves-light bold lowercase disabled"
            name="action"
          >
            <i className="material-icons right">send</i>
            Send message
          </button>
        );
      } else if (
        fullName === "" ||
        email === "" ||
        subject === "" ||
        text === "" ||
        !verified
      ) {
        button = (
          <button
            type="submit"
            className="btn waves-effect waves-light bold lowercase disabled"
            name="action"
          >
            <i className="material-icons right">send</i>
            Send message
          </button>
        );
      } else {
        button = (
          <button
            type="submit"
            className="btn waves-effect waves-light bold lowercase"
            name="action"
          >
            <i className="material-icons right">send</i>
            Send message
          </button>
        );
      }

      let otherContent;
      if (mailSent) {
        otherContent = (
          <p>Email was succesfully sent. Thanks for contacting me!</p>
        );
      } else if (error) {
        otherContent = <p className="red-text">{error}</p>;
      } else {
        otherContent = <p style={{ visibility: "hidden" }}>.</p>;
      }

      content = (
        <div className="contactType section form">
          <form onSubmit={handleSubmit} className="row" id="form">
            <div className="col s12 l6">
              <p className="bold lowercase">
                Full name <span className="red-text small">(required)</span>
              </p>
              <input
                type="text"
                className="browser-default"
                placeholder="Max Altena"
                name="fullName"
                value={fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col s0 l6 empty hide-on-med-and-down">.</div>
            <div className="col s12 l6">
              <p className="bold lowercase">
                Email <span className="red-text small">(required)</span>
              </p>
              <input
                type="email"
                className="browser-default"
                placeholder="Max@MaxAltena.com"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col s12 l6">
              <p className="bold lowercase">
                Phone <span className="grey-text small">(optional)</span>
              </p>
              <input
                type="tel"
                className="browser-default"
                placeholder="+31 6 39105742"
                name="phone"
                value={phone}
                onChange={handleChange}
              />
            </div>
            <div className="col s12 l6">
              <p className="bold lowercase">
                Subject <span className="red-text small">(required)</span>
              </p>
              <select
                id="select"
                className="browser-default lowercase"
                name="subject"
                value={subject}
                onChange={handleChange}
                required
              >
                <option value="" className="lowercase" disabled hidden>
                  Select a subject...
                </option>
                <option value="help" className="lowercase">
                  I need help
                </option>
                <option value="website" className="lowercase">
                  I need a website
                </option>
                <option value="question" className="lowercase">
                  Just a question
                </option>
                <option value="other" className="lowercase">
                  Other
                </option>
              </select>
              <i className="material-icons">arrow_drop_down</i>
            </div>
            <div className="col s0 l6 empty hide-on-med-and-down">.</div>
            <div className="col s12 l6">
              <p className="bold lowercase">
                Message <span className="red-text small">(required)</span>
              </p>
              <textarea
                name="text"
                form="form"
                placeholder="So listen, this is want I wanted you to know..."
                value={text}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col s0 l6 empty hide-on-med-and-down">.</div>
            <div className="col s12">
              <Recaptcha
                sitekey="6LfXq44UAAAAAIbyRauVAaOgTdHnNXH9JEIxVPb0"
                verifyCallback={verifyCallback}
              />
            </div>
            <div className="col s12">{button}</div>
            <div className="col s12">{otherContent}</div>
          </form>
        </div>
      );
      break;
    case "#direct":
      content = (
        <div className="contactType section direct">
          <p>Good choice! This is the easiest and fastest way to contact me.</p>
          <small>
            You do need to provide some additional information along the way.
          </small>
          <div className="contactDetails">
            <p className="bold">
              Email:{" "}
              <a
                href="mailto:Max@MaxAltena.com"
                target="_blank"
                rel="noopener noreferrer"
                className="regular"
              >
                Max@MaxAltena.com
              </a>
            </p>
            <p className="bold">
              Phone:{" "}
              <a
                href="tel:+31 6 39105742"
                target="_blank"
                rel="noopener noreferrer"
                className="regular"
              >
                +31 6 39105742
              </a>
            </p>
          </div>

          <p>Looking forward to hearing from you!</p>
        </div>
      );
      break;
  }
  return content;
};

export default ContactType;
