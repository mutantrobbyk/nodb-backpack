import React, { Component } from "react";
import Backpackimage from "./Backpack.jpeg";
import Icon from './Icon'

export default class BackpackItem extends Component {
  render() {
    return (
      <div>
        <header>
          <Icon/>
          <h1>Rob's Fantastic Backpack Packing Tool</h1>
          <Icon/>
          </header>
        <div className="backpack">
          <img className="packpic" src={Backpackimage} alt="" />
          <div className="calculations">
            <div className="weight">
              <b>Weight:</b> <br />
              {this.props.allGear
                .filter(el => el.inpack === true)
                .reduce((acc, el) => acc + +el.weight, 0)}
              lbs
            </div>
            <div className="value">
              <b>Value:</b> <br />$
              {this.props.allGear
                .filter(el => el.inpack === true)
                .reduce((acc, el) => acc + +el.price, 600)}
            </div>
            <div className="itemNumber">
              <b>Items:</b> <br />
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
