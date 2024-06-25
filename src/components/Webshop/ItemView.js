import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../store/Cart.actions';
import { addToCart } from '../../store/Cart.reducers';
import Button from '@mui/material/Button';


function ItemView(props) {
    const { item } = props;
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    //const [ loggedIn, setLoggedIn ] = useState(false);
    const [ quantity, setQuantity ] = useState(1);
/*
    useEffect(() => {
        async function isLoggedIn() {
          dispatch(checkLogin());
        }
        setLoggedIn(isLoggedIn());
      }, [dispatch]);
*/

    console.log(`cart in itemview is `, cart);
    function handleIncrement() {
        setQuantity(quantity + 1);
    }

    function handleDecrement() {
        if ( quantity === 1) {
            return;
        }
        setQuantity (quantity - 1);
    }

    function handleAddToCart() {
            const shoppingItem = { ...item, quantity: quantity};
            console.log(`shoppingitem is `, shoppingItem);
            dispatch(addToCart(shoppingItem));
            console.log(`cart in itemview after dispatch is `, cart);
    }

    return (
        <div className='ItemView'>
            <img src="" alt={item.name} />
            <h3>{item.name}</h3>
            <h4>{item.description}</h4>
            <h4>{item.price} €</h4>
            <h3>Quantity: {quantity}</h3>
            <Button type="contained" onClick={handleIncrement}>
                +
            </Button>
            <Button type="contained" onClick={handleDecrement}>
                -
            </Button>
            <Button type="contained" onClick={handleAddToCart}>
                Add to cart
            </Button>
        </div>
    );
};

export default ItemView;