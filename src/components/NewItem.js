import React, {Component} from 'react'

export default class NewItem extends Component {
    constructor () {
        super()
        this.state = {

        }
    }
    render () {
        console.log(this.props)
        return (
            <button onClick={() => this.props.addItemToGear()}>Item</button>
        )
    }
}