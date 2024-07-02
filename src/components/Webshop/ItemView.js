import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartInc } from '../../store/Cart.actions';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './ItemView.css';
import honey from '../../bin/honey.png'
import candles from '../../bin/candles.png'
import cosmetics from '../../bin/cosmetics.png'
import mead from '../../bin/mead.png'

const theme = createTheme({
    palette: {
      primary: {
        main: '#ecb35c',
        contrastText: '#fff'
      },
      raisedButton: {
        textColor: '#fff'
      },
    },
  });



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
            dispatch(addToCartInc(shoppingItem));
    }

    return (
        <div className='ItemView'>
                                  {
                (item.itemgroupid === 4) ?<img src={mead} /> :
                (item.itemgroupid === 3) ?<img src={cosmetics} /> :
                (item.itemgroupid === 2) ?<img src={candles} /> :
                <img src={honey} /> 
            }
            <h3>{item.name}</h3>
            <h4>{item.description}</h4>
            <h3>{item.price} €</h3>
            <ThemeProvider theme={theme}>
                <div className="utilWrapper">
                    {quantity}              
                    <Button variant="contained" size="small"
                    color="primary" onClick={handleIncrement}>
                        +
                    </Button>
                    <Button variant="contained" size="medium"
                    color="primary" onClick={handleDecrement}>
                        -
                    </Button>
                    </div>
                <Button variant="contained"
                    color="primary" onClick={handleAddToCart}>
                    Add to cart
                </Button>
            </ThemeProvider>
        </div>
    );
};

export default ItemView;