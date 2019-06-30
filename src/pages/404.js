import React, { Component } from "react";

import { SEO } from "../components/common";

export default class NotFound extends Component {
  render() {
    return (
      <div id="NotFound">
        <SEO title="404: Not found" />
        <h1>Nothing found</h1>
      </div>
    );
  }
}
