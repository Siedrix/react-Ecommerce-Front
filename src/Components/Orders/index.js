import React, { Component } from 'react'

import './orders.css'

class Orders extends Component {
    render() {
        return(
            <div className="containerOrders">
                <div className="containerOrders__body">
                    <h2 className="containerOrders__body--h2">Orders</h2>
                </div>


                <div className="containerOrders__box">
                    <div className="containerOrders__body--order">
                        <div className="containerOrders__orderNumber">
                            <p className="containerOrders__nOrder">Order 001</p>
                            <button className="containerOrders__cancel">Cancel</button>
                        </div>
                        <div className="containerOrders__orderTotal">
                            <p className="containerOrders__price">$2527</p>
                            <p className="containerOrders__total">Total</p>
                        </div>
                    </div>

                </div>

                

                


            </div>
        )
    }
}

export default Orders