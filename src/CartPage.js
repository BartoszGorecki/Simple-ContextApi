import React, { useEffect, useContext } from 'react'
import './CartPage.css'
import ShopContext from './context/shop-context'
import Navigation from './Navigation'

const CartPage = props => {
    const context = useContext(ShopContext)
    //static contextType = ShopContext
    // od teraz mozemy uzywac this.context
    useEffect( () => {

    }, [])
    return (
        <>
            <Navigation cartNumber={context.cart.reduce((count, value) => {
                return count + value.quantity
            }, 0)} />
            <div className='cart'>
                {context.cart.length === 0 && <p>No items in the cart!</p>}
                <ul>
                    {context.cart.map(item => (
                        <li key={item.id}>
                            <div>
                                <strong>{item.title}</strong> - ${item.price} ({item.quantity})
                                </div>
                            <div>
                                <button onClick={() => context.removeProduct(item.id)}>
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
export default CartPage