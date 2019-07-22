import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Inventory from "./components/Inventory";
import Backpack from "./components/Backpack";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allGear: []
    };
    this.addItemToGear = this.addItemToGear.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.searchItems = this.searchItems.bind(this);
    this.addToPack = this.addToPack.bind(this);
    this.removeFromPack = this.removeFromPack.bind(this);
  }
  componentDidMount() {
    axios.get("/api/backpack-items").then(res => {
      this.setState({ allGear: res.data });
    });
  }
  addItemToGear(body) {
    axios
      .post(`/api/backpack-items`, body)
      .then(res => {
        this.setState({ allGear: res.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  updateItem(id, body) {
    axios
      .put(`/api/backpack-items/${id}`, body)
      .then(res => {
        this.setState({ allGear: res.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  searchItems(item) {
    axios.get(`/api/backpack-items/search?item=${item}`).then(res => {
      this.setState({ allGear: res.data });
    });
  }
  deleteItem = async id => {
    let response = await axios.delete(`/api/backpack-items/${id}`); //Sam wrot this to solve my problem...
    this.setState({
      allGear: response.data
    });
  };
  addToPack(id) {
    axios.put(`/api/backpack-items/${id}`, { inpack: true }).then(res => {
      this.setState({
        allGear: res.data
      });
    });
  }
  removeFromPack(id) {
    axios.put(`/api/backpack-items/${id}`, { inpack: false }).then(res => {
      this.setState({
        allGear: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          <Backpack
            allGear={this.state.allGear}
            removeFromPack={this.removeFromPack}
          />
          <Inventory
            deleteItem={this.deleteItem}
            addItemToGear={this.addItemToGear}
            allGear={this.state.allGear}
            updateItem={this.updateItem}
            searchItems={this.searchItems}
            addToPack={this.addToPack}
          />
        </div>
      </div>
    );
  }
}
