import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = ({ cartNumber }) => {
    return (
        <div className='main-nav'>
            <li>
                <NavLink to='/'>Products</NavLink>
            </li>
            <li>
                <NavLink to='/cart'>Cart { cartNumber !== 0 && <span>({cartNumber})</span> }</NavLink>
            </li>
        </div>
    )
}
export default Navigation