const express = require('express');
const router = express.Router();

const AuthService = require('../services/AuthService');
const AuthServiceInstance = new AuthService();

const UserService = require('../services/UserService');
const UserServiceInstance = new UserService();

const CartService = require('../services/CartService');
const CartServiceInstance = new CartService();

module.exports = ( app, passport) => {
    app.use('api/auth', router);

    router.post('/register', async (req, res, next) => {
        try {
            const data = req.body;
            const response = await AuthServiceInstance.register(data);
            res.status(200).send(response);
        } catch(err) {
            next(err);
        }
    });

    router.post('/login', passport.authenticate('local'), async (req, res, next) => {
        try {
            const { username, password } = req.body;
            const response = await AuthServiceInstance.login({ email: username, password});
            res.status(200).send(response);
        } catch(err) {
            next(err);
        }
    });

    router.get('/logged_in', async (req, res, next) => {
        try {
            const { id } = req.user;
            const user = await UserServiceInstance.get({ id }); 
            const cart = await CartServiceInstance.loadCart(id);
            res.status(200).send({
                cart,
                loggedIn: true,
                user
            });
        } catch(err) {
            next(err);
        }
    });
}