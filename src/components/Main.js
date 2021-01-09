import React, { Component } from 'react'
import Card from './Card'
import './Main.css'
import { ProductConsumer } from '../contextAPI'

export default class Main extends Component {
    render() {
        return(
            <main className='main'>
            <ProductConsumer>
                {(value) => {
                    return value.products.map(product => {
                        return <Card key={product.id} product={product} />
                    })
                }}
            </ProductConsumer>
        </main>
        )
    }
}

