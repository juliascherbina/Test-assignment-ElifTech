import React, { useState } from 'react';
import './App.css';
import './styles.css'
import Shop from './components/shop'
import Cart from './components/cart'
import { NavLink, Routes, Route } from "react-router-dom"


function App() {
  let [shops] = useState(defaultShops)
  let [cart, setCart] = useState([])
  function addToCart(product) {
    let addedProduct = cart.find((e) => e.product === product)
    if (addedProduct === undefined) {
      let newItem = { product: product, count: 1 };
      setCart([...cart, newItem])
    }
    else {
      addedProduct.count++
      setCart(cart)
    }
  }
  function changeCartItem(product, count) {
    var newCart = cart.map(e => {
      if (e.product === product)
        return { product: e.product, count: count }
      else
        return e
    })
    setCart(newCart)
  }
  return (<div className='App'>
    <h3>
      <NavLink to="/" end> Shop</NavLink>
    </h3>
    <h3>
      <NavLink to="/cart" end> Shopping cart</NavLink>
    </h3>
    <Routes>
      <Route exact path="/" element={<Shop shops={shops} addToCart={addToCart} />}>
      </Route>
      <Route path="/cart" element={<Cart cart={cart} changeCartItem={changeCartItem} />}>
      </Route>
    </Routes>
  </div>)
}
let defaultShops = [
  {
    "name": "McDonalds",
    "menu": [
      {
        "name": "BigTasty",
        "image": "BigTasty.png",
        'price': 30
      },
      {
        "name": "BigMac",
        "image": "BigMac.png",
        'price': 30
      }
    ]
  },
  {
    "name": "KFC",
    "menu": [
      {
        "name": "ChefBurger",
        "image": "ChefBurger.png",
        'price': 30
      },
      {
        "name": "Twister",
        "image": "Twister.png",
        'price': 30
      }
    ]
  }
]




export default App;
