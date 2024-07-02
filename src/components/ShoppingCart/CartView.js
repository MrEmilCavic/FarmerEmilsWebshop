import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../store/Cart.actions';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './CartView.css';
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

const CartItem = (props) => {
    const dispatch = useDispatch();

    function handleRemoveFromCart() {
        dispatch(removeItemFromCart(props.item));
}

    return (
        <div className='CartItem'>
            <div className='firstLine'>
            {
                (props.item.itemgroupid === 4) ?<img src={mead} /> :
                (props.item.itemgroupid === 3) ?<img src={cosmetics} /> :
                (props.item.itemgroupid === 2) ?<img src={candles} /> :
                <img src={honey} /> 
            }
                        <h3>{props.item.name}</h3> 
            </div>
            <div className="secondLine">
            price: {props.item.price} € |
            quantity: {props.item.quantity}
            <ThemeProvider theme={theme}>
                <Button variant="contained" onClick={handleRemoveFromCart}>
                    Remove
                </Button>
            </ThemeProvider>
            </div>
        </div>
    );
};

export default CartItem;