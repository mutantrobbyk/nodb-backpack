import React, { Component } from "react";
import NewItem from "./NewItem";
import Item from './Item'
export default class Inventory extends Component {
  constructor() {
    super();
    this.state = {
      price: "",
      editing: false
    };
  }
 
  render() {
    return (
      <div>
        <div className="shelf">
          {this.props.allGear.map((el, i) => {
            return (
              <Item el={el}
              key={el.id}
              packItem={this.props.packItem}
              deleteItem={this.props.deleteItem}
              updateItem={this.props.updateItem}/>
          
            );
          })}
        </div>
        <NewItem addItemToGear={this.props.addItemToGear} />
      </div>
    );
  }
}
