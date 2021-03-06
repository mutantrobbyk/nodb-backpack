import React, { Component } from "react";
import NewItem from "./NewItem";

import Item from "./Item";
export default class Inventory extends Component {
  constructor() {
    super();
    this.state = {
      price: "",
      editing: false,
      item: "",
      search: ''
    };
  }
  searchItem(e) {
    this.setState({ search: e });
  }

  render() {
    return (
      <div>
        <div className="searchbar">
          <input
            className="search"
            placeholder="search for something"
            onChange={e => this.searchItem(e.target.value)}
            value={this.state.search}
          />
          <button onClick={e => {this.props.searchItems(this.state.search);
          this.setState({
            search: ''
          })}}>
            search
          </button>
        </div>
        <div className="shelf">
          {this.props.allGear.map((el, i) => {
            return (
              <Item
                el={el}
                key={el.id}
                addToPack={this.props.addToPack}
                deleteItem={this.props.deleteItem}
                updateItem={this.props.updateItem}
              />
            );
          })}
        </div>
        <NewItem addItemToGear={this.props.addItemToGear} />
      </div>
    );
  }
}
