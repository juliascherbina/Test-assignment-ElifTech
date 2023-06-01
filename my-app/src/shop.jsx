import React from 'react';
import './styles.css'
import tasty from './Tasty.jpg'


const Shop=()=>{
    return (
        <div className="App">
          <h3>
            <a href=""> Shop</a>
          </h3>
          <h3>
            <a href=""> Shopping cart</a>
          </h3>
          <div className="content">
            <div class="sidebar">
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