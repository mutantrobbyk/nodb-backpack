import React, { Component } from 'react'

export default class NewItem extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        console.log(this.props)
        return (
          <div>
            <div className="shelf" />
            <div className="inputs">
              <div>
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
              <div>
                <input type="text" />
                <input type="text" />
                <input type="text" />
            <button onClick={() => this.props.addItemToGear()}>Add Item</button>
              </div>
            </div>
              
            
          </div>
          
        );
    }
}