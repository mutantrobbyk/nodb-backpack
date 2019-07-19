import React, { Component } from "react";
import NewItem from "./NewItem";

export default class Inventory extends Component {
  render() {
    return (
      <div>

      <div className="shelf">
        {this.props.allGear.map(el => {
          return (
            <div className='itemBox' key={el.item}>
            <div className='itemInfo'>
            <img className='itemPic' src={el.image} alt=""/>
            <div className='itemS'>
              <p>{el.item}</p>
              <p>{el.description}</p>
              <p>Price: ${el.price}</p>
              <p>Weight: {el.weight}lbs</p>
            </div>
            </div>
            <div className='itemButtons'>
              <button>add</button>
              <button>edit</button>
              <button>delete</button>
            </div>
              
            </div>
          );
        })}

      </div>
        <NewItem addItemToGear={this.props.addItemToGear} />
      </div>
    );
  }
}
