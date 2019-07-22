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
    let {el, deleteItem, addToPack} = this.props
    return (
      <div className="itemBox">
        <div className="itemInfo">
          <img className="itemPic" src={el.image} alt="" />
          <div className="itemS">
            <p><b>{el.item}</b></p>
            <p>{el.description}</p>
            <p>Price: ${el.price}</p>
            <p>Weight: {el.weight}lbs</p>
          </div>
        </div>
        <div className="itemButtons">
          <button className='add' onClick={() => addToPack(el.id)}>
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
              <button onClick={() => this.updatePrice(el.id)}>
                Save
              </button>
              <button onClick={() => this.toggleEdit()}>Cancel</button>
            </div>
          ) : (
            null
          )}
          {!this.state.editing && (
            <button
              className='edit'
              onClick={() => {
                this.toggleEdit();
              }}
            >
              edit
            </button>
          )}
          <button
            className='delete'
            onClick={() => {
              deleteItem(el.id);
            }}
          >
            delete
          </button>
        </div>
      </div>
    );
  }
}
