import React, { useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/Profile/LogIn';
import SignUp from './components/Profile/SignUp';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import CheckOut from './components/ShoppingCart/CheckOut';
import Webshop from './components/Webshop/Webshop';
import Footer from './components/Footer/Footer';

import { checkLogin } from './store/Auth.actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function isLoggedIn() {
      dispatch(checkLogin());
    }
    isLoggedIn();
  }, [dispatch]);

  const PrivateRoute = ({ auth: { isLoggedIn }, children }) => {
    return isLoggedIn ? children : <Navigate to='/login' />;
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/webshop/:itemGroupId' element={<Webshop />} />
          <Route path='/cart' element={<ShoppingCart />} />
          <Route path='/checkout' element={<PrivateRoute><CheckOut /></PrivateRoute>} />

          <Route path='*' element={<Navigate to='/' replace={true} />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
