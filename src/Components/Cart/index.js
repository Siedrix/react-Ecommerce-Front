import React, { Component } from 'react'

import './cart.css'

class Cart extends Component {
    render() {
        return(
            <div className="containerCart">
                <div>
                    <h2 className="containerCart__h2">Shopping Cart</h2>
                </div>
                <div className="containerCart__box">



                    <div className="containerCart__box--product">
                        <div className="containerCart__box--img">
                            <img className="containerCart__img" src={require('../../images/img1.png')} alt="product" />
                            <div className="containerCart__box--text">
                                <h2 className="containerCart__box--h2">Designer Chair</h2>
                                <p className="containerCart__box--p">Quantity: 1</p>
                                <button className="containerCart__box--buttom">Delete</button>
                            </div>
                        </div>
                        <div className="containerCart__box--price">
                            <p className="containerCart__box--number">$ 799</p>
                        </div>
                    </div>

                    <div className="containerCart__box--product">
                        <div className="containerCart__box--img">
                            <img className="containerCart__img" src={require('../../images/img2.png')} alt="product" />
                            <div className="containerCart__box--text">
                                <h2 className="containerCart__box--h2">Chic Chair</h2>
                                <p className="containerCart__box--p">Quantity: 2</p>
                                <button className="containerCart__box--buttom">Delete</button>
                            </div>
                        </div>
                        <div className="containerCart__box--price">
                            <p className="containerCart__box--number">$ 1399</p>
                        </div>
                    </div>

                    





                    <div className="containerCart__checkbox">
                        <div className="containerCart__button">
                            <button className="containerCart__button--click">Check-Out</button>
                            <p className="containerCart__button--text">1-Month Money-back Guarantee</p>
                        </div>
                        <div className="containerCart__results">
                            <p>Sub Total $2197</p>
                            <p>Shipping Charges <span className="containerCart__results--free">FREE</span></p>
                            <p>Taxes $330</p>
                            <b><p>Total $2527</p></b>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default Cart