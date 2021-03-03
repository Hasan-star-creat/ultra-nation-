import React from 'react';

const Cart = (props) => {
     const cart = props.cart;
    let population = 0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        population = population + country.population;
    }
    return (
        <div>
            <p>add: {cart.length}</p>
            <h2>Population: {population}</h2>
        </div>
    );
};

export default Cart;