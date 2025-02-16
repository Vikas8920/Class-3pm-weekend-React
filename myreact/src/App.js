import React, { Component } from 'react'
import HelloWorld from './Component/HelloWorld'
import Counter from './Component/Counter'
import Logger from './Component/Logger'
import Counter2 from './Component/Counter2'

export default class App extends Component {
  render() {
    return (
      <>
        <HelloWorld name={'Vikas'}/>
        <HelloWorld name={'Sameer'}/>

        <hr/>

        <Counter/>
        <hr/>
        <Logger/>
        <hr/>
        <Counter2/>
      </>
    )
  }
}


