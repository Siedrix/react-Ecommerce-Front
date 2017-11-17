import React, { Component } from 'react'

import './products.css'

class Products extends Component {
    render() {
        return(
            <div className="containerProducts">
                <div className="containerProducts__body">
                    <div>
                        <h2 className="containerProducts__body--h2">Products</h2>
                    </div>
                    <div className="containerProducts__catalog">
                        <div className="containerProducts__catalog--box">
                            <center><img className="box__img" src={require('../../images/img1.png')} alt="Designer-Chair" /></center>
                            <center><h4 className="box__h4">Designer Chair</h4></center>
                            <center><p className="box__p">$ 799</p></center>
                        </div>
                        <div className="containerProducts__catalog--box">
                            <center><img className="box__img" src={require('../../images/img2.png')} alt="Designer-Chair" /></center>
                            <center><h4 className="box__h4">Table</h4></center>
                            <center><p className="box__p">$ 1599</p></center>
                        </div>
                        <div className="containerProducts__catalog--box">
                            <center><img className="box__img" src={require('../../images/img3.png')} alt="Designer-Chair" /></center>
                            <center><h4 className="box__h4">Chic Chair</h4></center>
                            <center><p className="box__p">$ 699</p></center>
                        </div>
                        <div className="containerProducts__catalog--box">
                            <center><img className="box__img" src={require('../../images/img4.png')} alt="Designer-Chair" /></center>
                            <center><h4 className="box__h4">Industrial</h4></center>
                            <center><p className="box__p">$ 299</p></center>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Products
