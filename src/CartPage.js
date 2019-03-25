import React, { Component } from 'react'
import './CartPage.css'
import ShopContext from './context/shop-context'
import Navigation from './Navigation'

class CartPage extends Component {
    static contextType = ShopContext
    // od teraz mozemy uzywac this.context
    componentDidMount() {
        console.log(this.context)
    }
    render() {
        return (
            <>
                <Navigation cartNumber={this.context.cart.reduce((count, value) => {
                    return count + value.quantity
                }, 0)} />
                <div className='cart'>
                    {this.context.cart.length === 0 && <p>No items in the cart!</p>}
                    <ul>
                        { this.context.cart.map( item => (
                            <li key={item.id}>
                                <div>
                                    <strong>{item.title}</strong> - ${item.price} ({item.quantity})
                                </div>
                                <div>
                                    <button onClick={() => this.context.removeProduct(item.id)}>
                                        Remove from cart
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    }
}
export default CartPage