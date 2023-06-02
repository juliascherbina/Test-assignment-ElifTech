import React from 'react';
import './App.css';
import './styles.css'
import Shop from './components/shop'
import Cart from './components/cart'
import { NavLink, Router, Routes, Route } from "react-router-dom"


function App() {
  return (<div className='App'>
    <h3>
      <NavLink to="/" end> Shop</NavLink>
    </h3>
    <h3>
      <NavLink to="/cart" end> Shopping cart</NavLink>
    </h3>
    <Routes>
      <Route exact path="/" element={<Shop />}>
      </Route>
      <Route path="/cart" element={<Cart />}>
      </Route>
    </Routes>
  </div>)
}
let shops = [
  {
    "name": "McDonalds",
    "menu": [
      {
        "name": "BigTasty",
        "image": "BigTasty.png"
      },
      {
        "name": "BigMac",
        "image": "BigMac.png"
      }
    ]
  },
  {
    "name": "KFC",
    "menu": [
      {
        "name": "ChefBurger",
        "image": "ChefBurger.png"
      },
      {
        "name": "Twister",
        "image": "Twister.png"
      }
    ]
  }
]

export default App;
