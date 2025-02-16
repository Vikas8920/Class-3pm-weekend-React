import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {count:0}
    }
    increment = () =>{
        this.setState((prevState)=>({
            count: prevState.count+10
        }))
    }
  render() {
    return (
      <>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </>
    )
  }
}
