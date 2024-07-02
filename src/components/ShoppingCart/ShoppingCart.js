import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CartView from './CartView.js';

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

function ShoppingCart () {
    const { cart } = useSelector(state => state.cart);

    function calcTotal() {
        return cart.reduce((total, { quantity, price }) => {
             return total += quantity * price
        }, 0 )
    }  

    return (
        <div className='ShoppingCart'>
            <h1>Your Shopping Bag</h1>
            { cart.length > 0 &&
                Object.keys(cart).map((key) => {
                    const item = cart[key];
                    return <CartView item={item} key={item.id} />
                }) 
                
            }
            { cart.length > 0 &&
                <div className="cartSummary">
                <h3>
                    <p>Subtotal {calcTotal()} €</p>
                    <p>VAT -</p>
                    <p>Total: {calcTotal()} €</p>
                </h3>
                <ThemeProvider theme={theme}>
                    <Button
                        variant="contained"
                        component={Link}
                        to="/checkout">
                            Order now!
                    </Button>
                </ThemeProvider>
                </div>
            }     
            { cart.length <= 0 &&
                <h3>Looks like your shopping bag is empty! :(</h3>
            }
        </div>
    );
};

export default ShoppingCart;