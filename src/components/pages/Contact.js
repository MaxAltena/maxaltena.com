import React, { Component } from "react";
import axios from "axios";
import ContactTypeSwitch from "./Contact/ContactTypeSwitch";
import ContactType from "./Contact/ContactType";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      text: "",
      mailSent: false,
      error: null,
      verified: false
    };
  }

  onloadCallback = token => {
    axios({
      method: "post",
      url: "/api/recaptcha.php",
      headers: { "content-type": "application/json" },
      data: { token }
    })
      .then(result => {
        if (result.data.success) {
          this.setState({ verified: true });
        } else {
          this.setState({ verified: false });
        }
      })
      .catch(error => this.setState({ error: error.message }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { fullName, email, phone, subject, text, verified } = this.state;
    if (verified) {
      const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regexEmail.test(email)) {
        axios({
          method: "post",
          url: "/api/contact.php",
          headers: { "content-type": "application/json" },
          data: { fullName, email, phone, subject, text }
        })
          .then(result => {
            if (result.status === 200) {
              this.setState({ mailSent: true });
            } else {
              this.setState({ mailSent: false });
            }
          })
          .catch(error => this.setState({ error: error.message }));
      } else {
        this.setState({ error: "Email is not valid" });
      }
    } else {
      this.setState({
        error: "ReCaptcha failed, try another way of contacting"
      });
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { hash } = this.props.props.location;
    const {
      fullName,
      email,
      phone,
      subject,
      text,
      mailSent,
      error,
      verified
    } = this.state;

    return (
      <div className="Contact">
        <div className="container">
          <h4 className="hind">How do you want to do this?</h4>
          <ContactTypeSwitch hash={hash} />
          <ContactType
            hash={hash}
            fullName={fullName}
            email={email}
            phone={phone}
            subject={subject}
            text={text}
            mailSent={mailSent}
            error={error}
            verified={verified}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            onloadCallback={this.onloadCallback}
          />
        </div>
      </div>
    );
  }
}

export default Contact;
