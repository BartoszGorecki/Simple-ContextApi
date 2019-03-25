import React from 'react'

export default React.createContext({
    products: [
        { id: 'p1', title: 'Wiedzmin', price: 29.99 },
        { id: 'p2', title: 'Need For Speed', price: 39.99 },
        { id: 'p3', title: 'Half 2', price: 39.99 },
        { id: 'p4', title: 'Tekken 4', price: 34.99 },
    ],
    cart: [],
    addProduct: product => {},
    removeProduct: id => {}
})
