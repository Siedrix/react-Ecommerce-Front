import React, { Component } from 'react'

import Cart from '../Cart'
import Orders from '../Orders'
import Products from '../Products'

import './app.css'

class App extends Component {
  constructor () {
    super()

    this.state = {
      items: []
    }
  }

  handleChange (data) {
    this.state.items.push(data)

    this.setState({
      items: this.state.items
    })
  }

  render () {
    return (
      <div className='container'>
        <div className='container__body'>
          <Products handleChange={(data) => this.handleChange(data)} />
          <div className='containerDouble'>
            <Cart items={this.state.items} />
            <Orders />
          </div>
        </div>
      </div>
    )
  }
}

export default App
