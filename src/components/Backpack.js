import React, { Component } from "react";
import BackpackItem from "./BackpackItem";

export default class Backpack extends Component {
  render() {
    return (
      <BackpackItem
        allGear={this.props.allGear}
        removeFromPack={this.props.removeFromPack}
      />
    );
  }
}
