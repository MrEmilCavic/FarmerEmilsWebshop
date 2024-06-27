import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CartView from './CartView.js';

function ShoppingCart () {
    const { cart } = useSelector(state => state.cart);

    function calcTotal() {
        return cart.reduce((total, { quantity, price }) => {
             return total += quantity * price
        }, 0 )
    }  

    return (
        <div className='ShoppingCart'>
            <p>Your Shopping Bag</p>
            { cart && 
                Object.keys(cart).map((key) => {
                    const item = cart[key];
                    return <CartView item={item} key={item.id} />
                })}
        <div className="cartSummary">
            <h3>
                <p>Subtotal {calcTotal()}</p>
                <p>VAT -</p>
                <p>Total {calcTotal()}</p>
            </h3>
        </div>
            <Button
                variant="contained"
                component={Link}
                to="/checkout">
                    Order now!
                </Button>
        </div>
    );
};

export default ShoppingCart;