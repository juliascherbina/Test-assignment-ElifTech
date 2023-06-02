import React from 'react';
import './styles.css'
import tasty from './Tasty.jpg'
import { NavLink } from 'react-router-dom';


const Shop=()=>{
    return (
        <div>
          
          <div className="content">
            <div className="sidebar">
              <h3>Shops:</h3>
              <div className="title">
                <span>McDonald's</span>
              </div>
              <div className="title">
                <span>Namelaka</span>
              </div>
            </div>
            <div className="food-choices">
              <div className="units">
                <img src={tasty} alt=""/>
                  <p>Big Tasty</p>
                  <button>add to Cart</button>
              </div>
              <div className="units">
                <img src={tasty} alt=""/>
                  <p>Big Tasty</p>
                  <button>add to Cart</button>
              </div>
              <div className="units">
                <img src={tasty} alt=""/>
                  <p>Big Tasty</p>
                  <button>add to Cart</button>
              </div>
              <div className="units">
                <img src="" alt=""/>
                  <p>Big Tasty</p>
                  <button>add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      );
}
export default Shop