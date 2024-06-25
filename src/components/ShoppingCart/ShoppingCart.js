import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CartView from './CartView.js';

function ShoppingCart () {
    const items = useSelector(state => state.cart);

    function calcTotal() {
        return Object.keys(items).reduce((total, { quantity, price }) => {
            return total += quantity * price
        }, 0 )
    }

    console.log(`shoppingcart is `, items);

    return (
        <div className='ShoppingCart'>
            <p>Your Shopping Bag</p>
            {Object.keys(items).map(item => { 
                return (<CartView {...item} />)
                })
            }
        <div className="cartSummary">
            <p>Subtotal {calcTotal()}</p>
            <p>VAT -</p>
            <p>Total {calcTotal()}</p>
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