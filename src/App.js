import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Inventory from './components/Inventory'
import Backpack from './components/Backpack'


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
  displayGear() {
    
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
      <body>
      <div>
        <Backpack/>
        <Inventory 
        addItemToGear={this.addItemToGear}
        allGear={this.state.allGear}
        />
      </div>
      </body>
    )
  }
}


