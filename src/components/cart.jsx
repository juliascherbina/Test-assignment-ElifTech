import React from 'react';
import './styles.css'

const Cart = (props) => {



    return (



        <div>
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
                        {props.cart.map(e => {
                            return <div>
                                <img src={"images/" + e.product.image} alt="" />
                                <div className="dish">
                                    <p>{e.product.name}</p>
                                    <p>{e.product.price}</p>
                                    <input onChange={(event) => props.changeCartItem(e.product, Number(event.target.value))} type="number" id="amount" min="1" max="35" value={e.count} />
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cart