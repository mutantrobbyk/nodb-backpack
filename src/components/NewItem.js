import React, { Component } from 'react'

export default class NewItem extends Component {
    constructor() {
        super()
        this.state = {
            inpack: false  
        }
    }
   handleChange (e) {
       this.setState({[e.target.placeholder]: e.target.value})
   }
    render() {
        // console.log(this.props)
        return (
          <div>
            
            <div className="inputs">
              <div>
                <input onChange={e => this.handleChange(e)} type="text" placeholder='item'/>
                <input onChange={e => this.handleChange(e)} type="text" placeholder='description' />
                <input onChange={e => this.handleChange(e)} type="text" placeholder='price'/>
              </div>
              <div>
                <input onChange={e => this.handleChange(e)} type="text" placeholder='category'/>
                <input onChange={e => this.handleChange(e)} type="text" placeholder='weight'/>
                <input onChange={e => this.handleChange(e)} type="text" placeholder='image'/>
              </div>
              {/* <div class='dropdown'>
                  <span>In Pack? </span>
                  <div class='dropdown-content'>
                      <p>false</p>
                  </div>
              </div> */}
            <button onClick={() => this.props.addItemToGear(this.state)}>Add Item</button>
            </div>
              
            
          </div>
          
        );
    }
}