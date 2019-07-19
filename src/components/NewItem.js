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
            
            <div className="inputs">
              <div>
                <input type="text" placeholder='item'/>
                <input type="text" placeholder='description' />
                <input type="text" placeholder='price'/>
              </div>
              <div>
                <input type="text" placeholder='category'/>
                <input type="text" placeholder='weight'/>
                <input type="text" placeholder='image'/>
              </div>
              <div class='dropdown'>
                  <span>In Pack? </span>
                  <div class='dropdown-content'>
                      <p>false</p>
                  </div>
              </div>
            <button onClick={() => this.props.addItemToGear()}>Add Item</button>
            </div>
              
            
          </div>
          
        );
    }
}