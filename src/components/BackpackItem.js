import React, { Component } from "react";

export default class BackpackItem extends Component {
  render() {
    return (
      <div className="backpack">
        <img
          className="packpic"
          src="https://cdn.shopify.com/s/files/1/0057/0556/4227/products/Ranger-Green-5500-3_1200x1843.jpg?v=1548851546"
          alt=""
        />
        <div className="calculations">
          <div className="weight">weight</div>
          <div className="value">value</div>
          <div className="itemNumber">Items</div>
        </div>

        <div className="visual" />
      </div>
    );
  }
}
