import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CartPage from './CartPage'
import ProductPage from './ProductPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={ProductPage} />
            <Route path='/cart' component={CartPage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
export default App
