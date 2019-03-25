import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CartPage from './CartPage'
import ProductPage from './ProductPage'
import ShopContext from './context/shop-context'

class App extends Component {
  state = {
    products: [
      { id: 'p1', title: 'Wiedzmin', price: 29.99 },
      { id: 'p2', title: 'Need For Speed', price: 39.99 },
      { id: 'p3', title: 'Half 2', price: 39.99 },
      { id: 'p4', title: 'Tekken 4', price: 34.99 },
    ],
    cart: []
  }
  addProduct = product => {
    const updatedCart = [...this.state.cart]
    const updatedItemIndex = updatedCart.findIndex( item => item.id === product.id )
    if (updatedItemIndex === -1) {
      updatedCart.push({...product, quantity: 1})
    } else {
      const updatedItem = {...updatedCart[updatedItemIndex]}
      updatedItem.quantity++
      updatedCart[updatedItemIndex] = updatedItem
    }
    this.setState({
      cart: updatedCart
    })
  }
  removeProduct = id => {
    const updatedCart = [...this.state.cart]
    const updatedItemIndex = updatedCart.findIndex( item => item.id === id ) 
    const updatedItem = { ...updatedCart[updatedItemIndex]}
    updatedItem.quantity--
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1)
    } else {
      updatedCart[updatedItemIndex] = updatedItem
    }
    this.setState({
      cart: updatedCart
    })
  }
  render() {
    return (
      <ShopContext.Provider value={{
        products: this.state.products,
        cart: this.state.cart,
        addProduct: this.addProduct,
        removeProduct: this.removeProduct
      }}>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path='/' exact component={ProductPage} />
              <Route path='/cart' component={CartPage} />
            </Switch>
          </BrowserRouter>
        </div>
      </ShopContext.Provider>
    )
  }
}
export default App
