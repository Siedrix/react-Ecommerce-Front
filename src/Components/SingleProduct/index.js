import React, { Component } from 'react'

class SingleProduct extends Component {
    render() {
        return(
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
        )
    }
}

export default SingleProduct