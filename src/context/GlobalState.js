import React, { useState } from 'react'
import ShopContext from './shop-context'

const GlobalState = props => {
        const products = [
          { id: 'p1', title: 'Wiedzmin', price: 29.99 },
          { id: 'p2', title: 'Need For Speed', price: 39.99 },
          { id: 'p3', title: 'Half 2', price: 39.99 },
          { id: 'p4', title: 'Tekken 4', price: 34.99 },
        ]
      const [cart, setCart] = useState([])
      const addProduct = product => {
        const updatedCart = [...cart]
        const updatedItemIndex = updatedCart.findIndex( item => item.id === product.id )
        if (updatedItemIndex === -1) {
          updatedCart.push({...product, quantity: 1})
        } else {
          const updatedItem = {...updatedCart[updatedItemIndex]}
          updatedItem.quantity++
          updatedCart[updatedItemIndex] = updatedItem
        }
        setCart(updatedCart)
      }
      const removeProduct = id => {
        const updatedCart = [...cart]
        const updatedItemIndex = updatedCart.findIndex( item => item.id === id ) 
        const updatedItem = { ...updatedCart[updatedItemIndex]}
        updatedItem.quantity--
        if (updatedItem.quantity <= 0) {
          updatedCart.splice(updatedItemIndex, 1)
        } else {
          updatedCart[updatedItemIndex] = updatedItem
        }
        setCart(updatedCart)
      }
        return (
            <ShopContext.Provider value={{
                products,
                cart,
                addProduct,
                removeProduct
            }}>
                {this.props.children}
            </ShopContext.Provider>
        )
}
export default GlobalState