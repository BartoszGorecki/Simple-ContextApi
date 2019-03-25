import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

class Navigation extends Component {
    render() {
        return (
            <div className='main-nav'>
                <li>
                    <NavLink to='/'>Products</NavLink>
                </li>
                <li>
                    <NavLink to='/cart'>Cart</NavLink>
                </li>
            </div>
        )
    }
}
export default Navigation