import React, {useState} from 'react';
import './styles.css'
import { NavLink } from 'react-router-dom';


const Shop = (props) => {
  
  let [activeShop, setActiveSho] = useState(props.shops[0]);
  return (
    <div>
      <div className="content">
        <div className="sidebar">
          <h3>Shops:</h3>
          {props.shops.map(sp =>
            <div onClick={()=>setActiveSho(sp)} className="title">
              <span >{sp.name}</span>
            </div>)}
        </div>
        <div className="food-choices">
        {activeShop.menu.map(e=>
          <div className="units">
            <img src={"images/"+e.image} alt="" />
            <p>{e.name}</p>
            <button onClick={()=>props.addToCart(e)}>add to Cart</button>
          </div>)}
         
        </div>
      </div>
    </div>
  );
}
export default Shop