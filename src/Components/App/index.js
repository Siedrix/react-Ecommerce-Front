import React, { Component } from 'react'

import Cart from '../Cart'
import Orders from '../Orders'
import Products from '../Products'

import './app.css'

class App extends Component {
    render() {
        return(
            <div className="container">
                <div className="container__body">
                    <Products />
                    <Cart />
                    <Orders />
                </div>
            </div>
        )
    }
}

export default App