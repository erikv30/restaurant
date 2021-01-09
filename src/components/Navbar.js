import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { ProductConsumer } from '../contextAPI'

export default class Navbar extends Component {
    render() {
        return(
            <header className='nav'>
                <div>
                    <Link to="/" className="brand"><i className="fas fa-hamburger"></i> Erick's Burgers</Link>
                </div>
                <ProductConsumer>
                    {(value) => {
                        return (
                            <div className='basket-content'>
                                <Link to="/cart"><i className="fas fa-shopping-bag"></i> <span className='basket'>{value.cartItems.length}</span></Link>
                            </div>
                        )
                    }}
                </ProductConsumer>
            </header>
        )
    }
}

