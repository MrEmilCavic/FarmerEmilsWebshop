import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../store/Cart.actions';
import Button from '@mui/material/Button';

const CartItem = (props) => {
    const dispatch = useDispatch();

    function handleRemoveFromCart() {
        console.log(`handleremove props item is `, props.item);
        dispatch(removeItemFromCart(props.item));
}

    return (
        <div className='CartItem'>
            <h3>{props.item.name}</h3>
            <h3>{props.item.price}</h3>
            <Button type="contained" onClick={handleRemoveFromCart}>
                Remove from cart
            </Button>
        </div>
    );
};

export default CartItem;