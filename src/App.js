import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Inventory from './components/Inventory'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      allGear: []
    }
  this.addItemToGear = this.addItemToGear.bind(this)
  }
  componentDidMount () {
    axios.get('/api/backpack-items').then(res => {
      this.setState({ allGear: res.data })
    })
  }
  addItemToGear (item, body) {
    console.log('addItemToGear')
    axios.put(`/api/backpack-items/${item}`,body).then(res => {
      this.setState({allGear: res.data})
    })
  }
 
  render() {
    console.log(this.state.allGear)
    return (
      <div>
        <Inventory addItemToGear={this.addItemToGear}/>
      </div>
    )
  }
}


