const authRouter = require('./auth');
const cartRouter = require('./cart');
const itemRouter = require('./item');
const itemGroupRouter = require('./itemGroup');
const orderRouter = require('./order');
const userRouter = require('./user');

module.exports = (app, passport) => {
    authRouter(app, passport);
    cartRouter(app);
    itemRouter(app);
    itemGroupRouter(app);
    orderRouter(app);
    userRouter(app);
}