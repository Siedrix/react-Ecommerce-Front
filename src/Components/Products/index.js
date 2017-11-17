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

                        <div className="containerProducts__catalog--general">
                            <div className="containerProducts__catalog--box">
                                <center><img className="box__img" src={require('../../images/img1.png')} alt="Designer-Chair" /></center>
                                <center><h4 className="box__h4">Designer Chair</h4></center>
                                <center><p className="box__p">$ 799</p></center>
                            </div>
                            <div className="containerProducts__buttons">
                                <button className="containerProducts__buttons--add">Add Cart</button>
                                <div className="containerProducts__buttons--group">
                                    <button className="containerProducts__buttons--p">-</button>
                                    <span> 1 </span>
                                    <button className="containerProducts__buttons--s">+</button>
                                </div>
                            </div>
                        </div>

                        <div className="containerProducts__catalog--general">
                            <div className="containerProducts__catalog--box">
                                <center><img className="box__img" src={require('../../images/img2.png')} alt="Designer-Chair" /></center>
                                <center><h4 className="box__h4">Designer Chair</h4></center>
                                <center><p className="box__p">$ 799</p></center>
                            </div>
                            <div className="containerProducts__buttons">
                                <button className="containerProducts__buttons--add">Add Cart</button>
                                <div className="containerProducts__buttons--group">
                                    <button className="containerProducts__buttons--p">-</button>
                                    <span> 1 </span>
                                    <button className="containerProducts__buttons--s">+</button>
                                </div>
                            </div>
                        </div>

                        <div className="containerProducts__catalog--general">
                            <div className="containerProducts__catalog--box">
                                <center><img className="box__img" src={require('../../images/img3.png')} alt="Designer-Chair" /></center>
                                <center><h4 className="box__h4">Designer Chair</h4></center>
                                <center><p className="box__p">$ 799</p></center>
                            </div>
                            <div className="containerProducts__buttons">
                                <button className="containerProducts__buttons--add">Add Cart</button>
                                <div className="containerProducts__buttons--group">
                                    <button className="containerProducts__buttons--p">-</button>
                                    <span> 1 </span>
                                    <button className="containerProducts__buttons--s">+</button>
                                </div>
                            </div>
                        </div>

                        <div className="containerProducts__catalog--general">
                            <div className="containerProducts__catalog--box">
                                <center><img className="box__img" src={require('../../images/img4.png')} alt="Designer-Chair" /></center>
                                <center><h4 className="box__h4">Designer Chair</h4></center>
                                <center><p className="box__p">$ 799</p></center>
                            </div>
                            <div className="containerProducts__buttons">
                                <button className="containerProducts__buttons--add">Add Cart</button>
                                <div className="containerProducts__buttons--group">
                                    <button className="containerProducts__buttons--p">-</button>
                                    <span> 1 </span>
                                    <button className="containerProducts__buttons--s">+</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Products
