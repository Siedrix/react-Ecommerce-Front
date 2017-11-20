import React, { Component } from 'react'

import Cart from '../Cart'
import Orders from '../Orders'
import Products from '../Products'
import SingleProduct from '../SingleProduct'


import './app.css'

class App extends Component {

    constructor() {
        super()
        this.state = {
            data: [{
                display: false,
            }]
        }
    }

    insertDIV(event) {

        this.setState({ display: true })
    }

    renderDIV() {
        if (this.state.display) {
            return <div className="containerCart__box"><SingleProduct /></div>
        }
    }

    render() {
        return (
            <div className="container">
                <div className="container__body">
                    <Products />
                    <div className="containerDouble">
                        <Cart />
                        <Orders
                            displayDIV={this.insertDIV.bind(this)}
                        />
                        {this.renderDIV()}
                    </div>
                </div>
            </div>
        )
    }
}

export default App