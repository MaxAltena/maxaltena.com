import React, { Component } from "react";
import NavigationItems from "./NavigationItems";

class SidebarContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elems: [
        <li key="close" className="close right">
          <button onClick={() => this.props.handleSidebar(false)}>
            <i className="material-icons">close</i>
          </button>
        </li>,
        <li key="title">
          <h5>Where to captain?</h5>
        </li>
      ]
    };
  }
  render() {
    return (
      <NavigationItems
        classes="SidebarContent"
        additionalItems={this.state.elems}
      />
    );
  }
}

export default SidebarContent;
