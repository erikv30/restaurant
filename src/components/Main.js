import React from 'react'
import Card from './Card'
import './Main.css'
import data from '../data'


function Main() {
    return (
        <main className='main'>
            {data.products.map((product) => (
                <Card 
                key={product._id}
                src={product.images} 
                alt={product.name}
                productName={product.name}
                price={product.price} />
            ))}
        </main>
    )
}

export default Main
