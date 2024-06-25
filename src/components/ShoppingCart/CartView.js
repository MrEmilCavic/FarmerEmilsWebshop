import React from 'react';

const CartItem = (props) => {
    return (
        <div className='CartItem'>
            <h3>{props.item.name}</h3>
            <h3>{props.item.price}</h3>
        </div>
    );
};

export default CartItem;