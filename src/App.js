import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CartPage from './CartPage'
import ProductPage from './ProductPage'
import GlobalState from './context/GlobalState'

class App extends Component {
  
  render() {
    return (
      <GlobalState>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path='/' exact component={ProductPage} />
              <Route path='/cart' component={CartPage} />
            </Switch>
          </BrowserRouter>
        </div>
      </GlobalState>
    )
  }
}
export default App
