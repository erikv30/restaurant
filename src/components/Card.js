import React, { Component } from 'react'
import { ProductConsumer } from '../contextAPI'

export default class Card extends Component {
    render() {
        const {id, src, productName, price, inCart} = this.props.product
        return(
           <ProductConsumer>
            {(value) => (
                <div id={id} className='card'>
                    <img className='medium' src={src} alt={productName}/>
                    <div className='card-body'>
                        <div className='h2-center'><h2>{productName}</h2></div>
                        <div className="price">₡ {price}</div>
                        <div className='button-add'>
                            <button className='add' disabled={inCart} onClick={()=>{value.addToCart(id)}} >
                                {inCart === true ? (<span>In Cart</span>) : (<span>Add to Cart</span>)}
                            </button>
                        </div>
                    </div>
                </div>
            )}
            </ProductConsumer>
        )
    }
}


