import React, { Component } from "react";
import Backpackimage from "./Backpack.jpeg";

export default class BackpackItem extends Component {
  render() {
    return (
      <div>
        <header>Rob's Fantastic Backpack Packing Tool</header>
        <div className="backpack">
          <img className="packpic" src={Backpackimage} alt="" />
          <div className="calculations">
            <div className="weight">
              Weight: <br />
              {this.props.allGear
                .filter(el => el.inpack === true)
                .reduce((acc, el) => acc + el.weight, 0)}
              lbs
            </div>
            <div className="value">
              Value: <br />$
              {this.props.allGear
                .filter(el => el.inpack === true)
                .reduce((acc, el) => acc + el.price, 0)}
            </div>
            <div className="itemNumber">
              Items: <br />
              {this.props.allGear.filter(el => el.inpack === true).length}
            </div>
          </div>

          <div className="visual">
            {this.props.allGear
              .filter(el => el.inpack === true)
              .map(el => {
                return (
                  <div className="pack" key={el.id}>
                    <div className="item1">
                      <p>{el.item}</p>
                    </div>
                    <button
                      className="remove"
                      onClick={() => this.props.removeFromPack(el.id)}
                    >
                      remove
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
