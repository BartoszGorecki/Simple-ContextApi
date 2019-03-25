import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CartPage from './CartPage'
import ProductPage from './ProductPage'
import GlobalState from './context/GlobalState'

const App = props => {
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
export default App
