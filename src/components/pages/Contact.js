import React, { Component } from "react";
import axios from "axios";
import { loadReCaptcha } from "recaptcha-v3-react";
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
      error: null
    };
  }

  componentDidMount = () => {
    loadReCaptcha({
      key: "6Lcrmo4UAAAAAL0ZYCJY_wuc5XDBUNgkZeiKeHYz",
      id: "contactForm"
    })
      .then(id => {
        console.log("ReCaptcha loaded", id);
      })
      .catch((error, id) => {
        console.error("Error when load ReCaptcha", id, error);
      });
  };

  verifyCallback = token => {
    console.log("verifycallback token:", token);
    const captchaResponse = token;
    axios({
      method: "post",
      url: "https://new.maxaltena.com/api/recaptcha.php",
      data: { captchaResponse }
    })
      .then(result => {
        console.log(result);
      })
      .catch(error => this.setState({ error: error.message }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { fullName, email, phone, subject, text } = this.state;
    axios({
      method: "post",
      url: "https://new.maxaltena.com/api/contact.php",
      headers: { "content-type": "application/json" },
      data: { fullName, email, phone, subject, text }
    })
      .then(result => {
        if (result.status === 200) {
          this.setState({ ...this.state, mailSent: true });
        } else {
          this.setState({ ...this.state, mailSent: false });
        }
      })
      .catch(error => this.setState({ error: error.message }));
  };

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
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
      error
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
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            verifyCallback={this.verifyCallback}
          />
        </div>
      </div>
    );
  }
}

export default Contact;
