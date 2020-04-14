import React, { Component } from "react";

export default class NotFound extends Component {
  componentDidMount() {
    window.location.replace("./");
  }
  render() {
    return <div />;
  }
}
