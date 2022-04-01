import React from 'react';
import './Cart.css';
const Cart = (props) => {

    const { cart } = props;
    // console.log(cart);
    let price = 0;
    let shipping = 0;
    let quantity = 0;
    // console.log(cart);
    for (const product of cart) {
        quantity += product.quantity;
        price += product.price * product.quantity;
        shipping += product.shipping * product.quantity;
    }
    const tax = parseFloat((price * .1).toFixed(2));
    const total = price + shipping + tax;
    return (
        <div className='cart'>
            <div className='cart-info'>
                <h4>Order Summary</h4>
                <p>Selected Item: {quantity}</p>
                <p>Total Price: {price}</p>
                <p>Total Shipping: {shipping}</p>
                <p>Tax: {tax}</p>
                <h5>Grand Total: {total}</h5>
            </div>
        </div>
    );
};

export default Cart;