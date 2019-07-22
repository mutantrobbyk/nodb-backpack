import React, { Component } from "react";
import NewItem from "./NewItem"

import Item from './Item'
export default class Inventory extends Component {
  constructor() {
    super();
    this.state = {
      price: "",
      editing: false,
      item: ''
    };
  }
      searchItem (e) {
        this.setState({item: e})
    
      }
 
  render() {
    return (
      <div >
        <div className='searchbar'>
        <input className='search' placeholder='search' onChange={(e) => (this.searchItem(e.target.value))}></input>
        <button onClick={(e) => (this.props.searchItems(this.state.item))}>search</button>
        </div>
        <div className="shelf">
          {this.props.allGear.map((el, i) => {
            return (
              <Item el={el}
              key={el.id}
              addToPack={this.props.addToPack}
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
