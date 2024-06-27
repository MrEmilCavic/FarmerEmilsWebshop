import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from './util/banner-logo.png';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';

function Header() {

    const { isAuthenticated } = useSelector(state => state.auth);
    const { cart } = useSelector(state => state.cart);
    const { user } = useSelector(state => state.user);
    console.log(`cart in header is `, cart);

    return (
        <div className = "Header">
            <Link to='/'>
            <img src={Logo} width='300rem' height='auto' alt='Farmer Emils Webshop Logo' />
            </Link>
            <div className ="utils">
                { !isAuthenticated && 
                <Link to={'/login'}>
                <LoginIcon alt="Login"/>
                </Link>
                }
                { isAuthenticated &&
                <p>Welcome, {user.name}!</p>
                }
                <Link to={'/cart'}>
                <Badge badgeContent={cart?.length || 0}>
                <ShoppingBagIcon alt="Your shopping cart" />
                </Badge>
                </Link>
            </div>
            <div className ="searchBar">
                <SearchIcon />
            </div>
        </div>
    );
};

export default Header;