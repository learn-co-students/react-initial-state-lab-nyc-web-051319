import React from 'react'
import ImageSlider from './ImageSlider.js'

export default class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }
    
    render(){
        return(
            <div>
            {this.props.initialCount === 0
            ? <div>Boom!</div>
            : <div>{this.props.initialCount} seconds left before I go boom!</div>
            }
            </div>
        )
    }
}