import React, { Component } from "react";
import BackpackItem from "./BackpackItem";

export default class Backpack extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <BackpackItem
        allGear={this.props.allGear}
        removeFromPack={this.props.removeFromPack}
      />
    );
  }
}
