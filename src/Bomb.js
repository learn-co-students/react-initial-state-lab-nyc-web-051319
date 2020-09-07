// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
  render(){
      return (
        this.state.secondsLeft > 0
        ? (
          <div>
          {this.state.secondsLeft} seconds left before I go boom!
          </div>
        )
        : (
        <div>
          Boom!
        </div>
      )
      )
    }

    constructor(props) {
      super(props)
      // ...define initial state with a key of 'color' set to the 'value' prop
      this.state = { secondsLeft: this.props.initialCount }
    } // end constructor
  }
