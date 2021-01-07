import React from 'react'
import { useStateValue } from '../StateProvider'

function Card({id, src, alt, productName, price}) {
    const [{cartItems}, dispatch] = useStateValue()
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                productName: productName,
                images: src,
                alt: alt,
                price: price,
            },
        })
    }
    return (
        <div id={id} className='card'>
            <img className='medium' src={src} alt={alt}/>
            <div className='card-body'>
                <div className='h2-center'><h2>{productName}</h2></div>
                <div className="price">₡ {price}</div>
                <div className='button-add'>
                    <button className='add' onClick={addToCart} >Add to Cart</button>
                </div>
            </div>
            
        </div>
    )
}

export default Card
