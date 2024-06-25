import React from 'react';
import CartView from './CartView.js';

const CheckOut = (props) => {
    return (
        <div className='CheckOut'>
            <h2>Check Out</h2>
            <h3>Your order:</h3>
            <CartView/>
            <button className='confirmOrder' onClick={props.confirmOrder}>Confirm to order</button>
        </div>
    );
};

export default CheckOut;