import React, { Component } from "react"

export default class BackpackItem extends Component {
  render() {
    return (
      <div className="backpack">
        <img
          className="packpic"
          src="https://cdn.shopify.com/s/files/1/0057/0556/4227/products/Ranger-Green-5500-3_1200x1843.jpg?v=1548851546"
          alt=""
        />
        <div className="calculations">
          <div className="weight">weight: <br/>{this.props.allGear.filter(el => el.inpack === true).reduce((acc, el) => (
            acc + el.weight
          ), 0)}lbs</div>
          <div className="value">value: <br/>${this.props.allGear.filter(el => el.inpack === true).reduce((acc, el) => (
             acc + el.price), 0
          
          )}</div>
          <div className="itemNumber">items: <br/>{this.props.allGear.filter(el => el.inpack === true).length}</div>
        </div>
        
        <div className="visual" >{this.props.allGear.filter(el => el.inpack === true).map((el) => {
          return <div className='pack' key={el.id}>

          <div className='item1'>
            <p>{el.item}</p>
            </div>
            <button className='remove' onClick={() => this.props.removeFromPack(el.id)}>remove</button>
          </div>
        })}</div>
      </div>
    );
  }
}
