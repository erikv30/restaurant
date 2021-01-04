import React from 'react'

function Card({src, alt, productName, price}) {
    return (
        <div className='card'>
            <img className='medium' src={src} alt={alt}/>
            <div className='card-body'>
                <h2>{productName}</h2>
                <div className="price">₡ {price}</div>
                <div className='button-add'>
                    <button className='add'>Add to Cart</button>
                </div>
            </div>
            
        </div>
    )
}

export default Card
