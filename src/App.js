import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Inventory from "./components/Inventory";
import Backpack from "./components/Backpack";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allGear: [],
      // gearPacked: []
    };
    this.addItemToGear = this.addItemToGear.bind(this);
    this.updateItem = this.updateItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    // this.packItem = this.packItem.bind(this)
  }
  componentDidMount() {
    axios.get("/api/backpack-items").then(res => {
      this.setState({ allGear: res.data });
    });
  }
  addItemToGear(body) {
    // console.log(body)
    axios.post(`/api/backpack-items`, body).then(res => {
      this.setState({ allGear: res.data });
    }).catch(function(error){(console.log(error))})
  }
  updateItem(id, body) {
    axios.put(`/api/backpack-items/${id}`, body).then(res => {
      this.setState({ allGear: res.data });
    }).catch(function(error){(console.log(error))})
  }
  
  deleteItem = async(id) =>  {
    let response = await axios.delete(`/api/backpack-items/${id}`) //Sam wrot this to solve my problem...
    this.setState({
      allGear: response.data
    }).catch(function(error){(console.log(error))})
  }
  // packItem (id){
    //     this.state.allGear.filter(() => {
      //       this.state.allGear.id == id
      //     })
      
      // }
      render() {
        console.log(this.state.allGear)
        
        return (
          <body>
        <div>
          <Backpack />
          <Inventory
            deleteItem={this.deleteItem}
            addItemToGear={this.addItemToGear}
            allGear={this.state.allGear}
            updateItem={this.updateItem}
            packItem={this.packItem}
          />
        </div>
      </body>
    );
  }
}
