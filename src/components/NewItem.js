import React, { Component } from "react";

export default class NewItem extends Component {
  constructor() {
    super();
    this.state = {
      item: "",
      description: "",
      price: "",
      category: "",
      weight: "",
      image: "",
      inpack: false
    };
  }
  handleChange(e) {
    this.setState({ [e.target.placeholder]: e.target.value });
  }
  render() {
    return (
      <div>
        <div className="inputs">
          <div className="first2">
            <input
              onChange={e => this.handleChange(e)}
              type="text"
              placeholder="item"
              value={this.state.item}
            />
            <input
              onChange={e => this.handleChange(e)}
              type="text"
              placeholder="description"
              value={this.state.description}
            />
          </div>
          <div className="second2">
            <input
              onChange={e => this.handleChange(e)}
              type="text"
              placeholder="price"
              value={this.state.price}
            />
            <input
              onChange={e => this.handleChange(e)}
              type="text"
              placeholder="category"
              value={this.state.category}
            />
          </div>
          <div className="third2">
            <input
              onChange={e => this.handleChange(e)}
              type="text"
              placeholder="weight"
              value={this.state.weight}
            />
            <input
              onChange={e => this.handleChange(e)}
              type="text"
              placeholder="image"
              value={this.state.image}
            />
          </div>
          <div className="addItem">
            <button
              onClick={() => {
                this.props.addItemToGear(this.state);
                this.setState({
                  item: "",
                  description: "",
                  price: "",
                  category: "",
                  weight: "",
                  image: ""
                });
              }}
            >
              Add Item
            </button>
          </div>
        </div>
      </div>
    );
  }
}
