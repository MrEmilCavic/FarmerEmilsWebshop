import { combineReducers } from 'redux';
import authReducer from './Auth.reducers';
import cartReducer from './Cart.reducers';
import itemReducer from './Items.reducers';
import itemGroupReducer from './ItemGroups.reducers';
import orderReducer from './Orders.reducers';
import userReducer from './User.reducers';

export default combineReducers({
    auth: authReducer,
    cart: cartReducer,
    item: itemReducer,
    itemGroup: itemGroupReducer,
    user: userReducer,
    order: orderReducer
});
