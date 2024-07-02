import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';
import Banner from './util/fews_beebg.png';
import Logo from './util/fewslogo.png';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';

function Header() {

    const { isAuthenticated } = useSelector(state => state.auth);
    const { cart } = useSelector(state => state.cart);
    const { user } = useSelector(state => state.user);

    return (
        <div className = "Header">
        
            <Link to='/'>
            <img src={Logo} className="Logo" alt='Farmer Emils Webshop Logo' />
            </Link>
            <div className="Bannerdiv">
                <h1>Farmer Emil's</h1>
                <span className="title2">
                    <h2>Quality Honey and Bee Product Specialities</h2>
                    <h3>since 2024!</h3>
                </span>
            </div>
            <div className ="utils">
                { !isAuthenticated && 
                <Link to={'/login'}>
                <LoginIcon alt="Login"/>
                </Link>
                }
                { isAuthenticated &&
                <p>Welcome, {user.name}!</p>
                }
                <SearchIcon />
                <Link to={'/cart'}>
                <Badge badgeContent={cart?.length || 0}>
                <ShoppingBagIcon alt="Your shopping cart" />
                </Badge>
                </Link>
            </div>
            <div className ="searchBar">

            </div>
        </div>
    );
};

export default Header;