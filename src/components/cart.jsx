import React from 'react';
import './styles.css'
import tasty from './Tasty.jpg'

const Cart = () => {
    return (<div>
        <div className="text-content">
            <div className='form'>
                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" name="Name" /><br />
                <label htmlFor="email">Email:</label><br />
                <input type="text" id="email" name="email" /><br />
                <label htmlFor="phone">Phone:</label><br />
                <input type="text" id="phone" name="phone" /><br />
                <label htmlFor="adress">Adress:</label><br />
                <input type="text" id="adress" name="adress" /><br />
            </div>
            <div className="cart">
                <div className="name-of-food">
                    <img src={tasty} alt="" />
                    <div className="dish">
                        <p>Big Burger</p>
                        <p>price:300</p>
                        <input type="number" id="amount" min="1" max="35" />
                    </div>
                    <img src={tasty} alt="" />
                    <div className="dish">
                        <p>Big Burger</p>
                        <p>price:</p>
                        <input type="number" id="amount" min="1" max="35" />
                    </div>
                    <img src={tasty} alt="" />
                    <div className="dish">
                        <p>Big Burger</p>
                        <p>price:</p>
                        <input type="number" id="amount" min="1" max="35" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Cart