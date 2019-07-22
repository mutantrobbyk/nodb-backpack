import React from "react";
import BackpackItem from "./BackpackItem";

export default function Backpack (props) {
    return (
      <BackpackItem
        allGear={props.allGear}
        removeFromPack={props.removeFromPack}
      />
    );
  }

