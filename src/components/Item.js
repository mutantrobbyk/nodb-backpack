import React, { Component } from "react";

export default class Item extends Component {
  constructor() {
    super();
    this.state = {
      price: "",
      editing: false
    };
  }
  handleChange(e) {
    this.setState({ price: e.target.value });
    // console.log(this.state.price);
  }
  toggleEdit() {
    this.setState({ editing: !this.state.editing });
    // console.log(this.state.editing)
  }
  updatePrice(id) {
    this.props.updateItem(id, { price: this.state.price });
    this.toggleEdit();
  }

  render() {
    console.log(this.props.addToPack);
    return (
      <div className="itemBox">
        <div className="itemInfo">
          <img className="itemPic" src={this.props.el.image} alt="" />
          <div className="itemS">
            <p><b>{this.props.el.item}</b></p>
            <p>{this.props.el.description}</p>
            <p>Price: ${this.props.el.price}</p>
            <p>Weight: {this.props.el.weight}lbs</p>
          </div>
        </div>
        <div className="itemButtons">
          <button onClick={() => this.props.addToPack(this.props.el.id)}>
            add
          </button>
          {this.state.editing ? (
            <div>
              <input
                placeholder="price"
                onChange={e => {
                  this.handleChange(e);
                }}
                type="text"
                value={this.state.price}
              />
              <button onClick={() => this.updatePrice(this.props.el.id)}>
                Save
              </button>
              <button onClick={() => this.toggleEdit()}>Cancel</button>
            </div>
          ) : (
            <p onClick={() => this.toggleEdit()} />
          )}
          {!this.state.editing && (
            <button
              onClick={() => {
                this.toggleEdit();
              }}
            >
              edit
            </button>
          )}
          <button
            onClick={() => {
              this.props.deleteItem(this.props.el.id);
            }}
          >
            delete
          </button>
        </div>
      </div>
    );
  }
}
