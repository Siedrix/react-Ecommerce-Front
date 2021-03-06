import React, { Component } from 'react'

import './products.css'

class Products extends Component {
  constructor () {
    super()

    this.state = {
      designerChair: 0
    }
  }

  changeQuantity (product, diff) {
    const data = {}

    data[product] = this.state[product] + diff
    this.setState(data)
  }

  addProduct (product) {
    this.props.handleChange({product, quantity: this.state[product]})

    const data = {}

    data[product] = 0
    this.setState(data)
  }

  render () {
    return (
      <div className='containerProducts'>
        <span className='containerProducts__title'>Products</span>
        <br />
        <div className='containerProducts__catalog'>
          <div className='containerProducts__catalog--general'>
            <div className='containerProducts__catalog--box'>
              <center><img className='box__img' src={require('../../images/img1.png')} alt='Designer-Chair' /></center>
              <center><h4 className='box__h4'>Designer Chair</h4></center>
              <center><p className='box__p'>$ 799</p></center>
            </div>
            <div className='containerProducts__buttons'>
              <button onClick={() => this.addProduct('designerChair')} className='containerProducts__buttons--add'>Add Cart</button>
              <div className='containerProducts__buttons--group'>
                <button className='containerProducts__buttons--p' onClick={() => this.changeQuantity('designerChair', -1)}>-</button>
                <span> {this.state.designerChair} </span>
                <button className='containerProducts__buttons--s' onClick={() => this.changeQuantity('designerChair', 1)}>+</button>
              </div>
            </div>
          </div>

          <div className='containerProducts__catalog--general'>
            <div className='containerProducts__catalog--box'>
              <center><img className='box__img' src={require('../../images/img2.png')} alt='Designer-Chair' /></center>
              <center><h4 className='box__h4'>Table</h4></center>
              <center><p className='box__p'>$ 1599</p></center>
            </div>
            <div className='containerProducts__buttons'>
              <button className='containerProducts__buttons--add'>Add Cart</button>
              <div className='containerProducts__buttons--group'>
                <button className='containerProducts__buttons--p'>-</button>
                <span> 1 </span>
                <button className='containerProducts__buttons--s'>+</button>
              </div>
            </div>
          </div>

          <div className='containerProducts__catalog--general'>
            <div className='containerProducts__catalog--box'>
              <center><img className='box__img' src={require('../../images/img3.png')} alt='Designer-Chair' /></center>
              <center><h4 className='box__h4'>Chic Chair</h4></center>
              <center><p className='box__p'>$ 699</p></center>
            </div>
            <div className='containerProducts__buttons'>
              <button className='containerProducts__buttons--add'>Add Cart</button>
              <div className='containerProducts__buttons--group'>
                <button className='containerProducts__buttons--p'>-</button>
                <span> 1 </span>
                <button className='containerProducts__buttons--s'>+</button>
              </div>
            </div>
          </div>

          <div className='containerProducts__catalog--general'>
            <div className='containerProducts__catalog--box'>
              <center><img className='box__img' src={require('../../images/img4.png')} alt='Designer-Chair' /></center>
              <center><h4 className='box__h4'>Industrial</h4></center>
              <center><p className='box__p'>$ 299</p></center>
            </div>
            <div className='containerProducts__buttons'>
              <button className='containerProducts__buttons--add'>Add Cart</button>
              <div className='containerProducts__buttons--group'>
                <button className='containerProducts__buttons--p'>-</button>
                <span> 1 </span>
                <button className='containerProducts__buttons--s'>+</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default Products
