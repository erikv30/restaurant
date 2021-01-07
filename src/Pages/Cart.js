import React from 'react'
import { Link } from 'react-router-dom'
import { getCartItemsTotal } from '../reducer';
import { useStateValue } from '../StateProvider'

function Cart(id, item, props) {
    const [{cartItems}, dispatch] = useStateValue();
    const removeFromCartHandler = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }
    const checkOutHandler = () => {
        props.history.push('/checkout')
    }
    return (
        <div className='row top'>
            <div className="col-2">
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (<p>Cart is Empty. <Link to='/' className='link-back'>Go Shopping</Link></p>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <div className="row">
                                    <div>
                                        <img 
                                        src={item.images}
                                        alt={item.productName}
                                        className='small' />
                                    </div>
                                    <div className="min-30">
                                        {item.productName}
                                    </div>
                                    <div>₡ {item.price}</div>
                                    <div>
                                    <button className='delete' onClick={removeFromCartHandler}>
                                        Delete
                                    </button>
                                </div>
                                </div>
                                
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>
                                Subtotal ({cartItems.length} items) : <span>₡ {getCartItemsTotal(cartItems)}</span>
                            </h2>
                        </li>
                        <li>
                            <button onClick={checkOutHandler} className='check block' disabled={cartItems.length === 0}>
                                Proceed to Checkout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cart