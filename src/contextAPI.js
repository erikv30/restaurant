import React, { Component } from 'react';
import {productData} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: productData,
        cartItems: [],
        cartTotal: 0,
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    addToCart = (id) => {
        let tempProduct = [...this.state.products];
        const index = tempProduct.indexOf(this.getItem(id));
        const product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return {products: tempProduct, cartItems: [...this.state.cartItems, product]}
        }, () =>{this.makeTotal()})
    }

    increment = (id) => {
        let tempCart = [...this.state.cartItems];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(() => {
            return {cartItems: [...tempCart]}
        }, () => {
            this.makeTotal()
        
        })
    }

    decrement = (id) => {
        let tempCart = [...this.state.cartItems];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;
        product.total = product.count * product.price;
        this.setState(() => {
            return {cartItems: [...tempCart]}
        }, () => {
            this.makeTotal()
        
        })
    }

    makeTotal = () => {
        let subTotal = 0;
        this.state.cartItems.map(item => (subTotal += item.total));
        const total = subTotal;
        this.setState(() => {
            return {
                cartTotal: subTotal
            }
        })
    }

    removeItem = (id) => {
        let tempProduct = [...this.state.products];
        let tempCart = [...this.state.cartItems];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProduct.indexOf(this.getItem(id));

        let removeProd = tempProduct[index];

        removeProd.inCart = false;
        removeProd.total = 0;
        removeProd.count = 0;

        this.setState(() => {
            return {
                cartItems: [...tempCart],
                products: [...tempProduct]
            }
        }, () => {
            return this.makeTotal()
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                addToCart: this.addToCart,
                increment: this.increment,
                decrement: this.decrement,
                makeTotal: this.makeTotal,
                removeItem: this.removeItem,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};