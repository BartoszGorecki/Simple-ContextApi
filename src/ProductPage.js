import React, { Component } from 'react'
import Navigation from './Navigation'
import './ProductPage.css'
import ShopContext from './context/shop-context'

class ProductPage extends Component {
    render() {
        return (
            <ShopContext.Consumer>
                { ({ cart, products, addProduct }) => (
                    <>
                        <Navigation cartNumber={cart.reduce( (count, value) => {
                            return count + value.quantity
                        }, 0)} />
                        <div className='products'>
                            <ul>
                                { products.map( product => (
                                    <li key={product.id}>
                                        <div>
                                            <strong>{product.title}</strong> - ${product.price}
                                        </div>
                                        <div>
                                            <button onClick={() => addProduct(product)}>
                                                Add to Cart
                                            </button>
                                        </div>
                                    </li>
                                )) }
                            </ul>
                        </div>
                    </>
                )}
            </ShopContext.Consumer>
        )
    }
}
export default ProductPage