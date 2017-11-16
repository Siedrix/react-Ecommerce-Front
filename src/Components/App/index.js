import React, { Component } from 'react'

import Cart from '../Cart'
import Orders from '../Orders'
import Products from '../Products'

class App extends Component {
    render() {
        return(
            <div>
                <Cart />
                <Orders />
                <Products />
            </div>
        )
    }
}

export default App