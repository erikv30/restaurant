import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../contextAPI'
import '../components/Main.css'

export default class Cart extends Component {
    render() {
        return(
            <section className='row top'>
                <ProductConsumer>
                    {value => {
                        if(value.cartItems.length > 0) {
                            return (
                                <div>
                                    <h1 className='s-cart'>Shopping Cart</h1>
                                    {value.cartItems.map(item => {
                                        return (
                                            <div className="col-2">
                                                <ul>
                                                    <li key={item.id}>
                                                        <div className="row">
                                                            <div>
                                                                <img 
                                                                src={item.src} 
                                                                alt={item.productName}
                                                                className='small'/>
                                                            </div>
                                                            <div className='col-30'>
                                                                {item.productName}
                                                            </div>
                                                            <div>
                                                                ₡ {item.price}
                                                            </div>
                                                            <div className='qty'>
                                                                Qty: 
                                                                <button className='qty-btn' onClick={() => value.decrement(item.id)}>-</button>
                                                                    {item.count}
                                                                <button className='qty-btn' onClick={() => value.increment(item.id)}>+</button>
                                                            </div>
                                                            <div className='subtotal'>
                                                                SubTotal: ₡{item.total}
                                                            </div>
                                                            <div>
                                                                <button className='delete' onClick={() => value.removeItem(item.id)}>
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                    })}
                                    <div className='col-2'>
                                        <div className="card">
                                            <ul>
                                                <li>
                                                    <div className="total-cart">
                                                        <h2>
                                                            Total: ₡ {value.cartTotal}
                                                        </h2>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className='s-cart'>
                                    <h1>Shopping Cart</h1>
                                    <p>Your Cart is Empty. <Link to='/' className='link-back'>Go Shopping</Link></p>
                                </div>
                            )
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}