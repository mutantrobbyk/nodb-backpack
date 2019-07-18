import React, {Component} from 'react'
import NewItem from './NewItem'


export default class Inventory extends Component {
  render () {
      return (
          <NewItem addItemToGear={this.props.addItemToGear}/>
      )
  }
}