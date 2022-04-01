import React from 'react';
import './CartProduct.css';
const CartProduct = (props) => {
    const { name, img, quantity } = props.cart;
    return (
        <div className='cart-product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <div className=''>
                    <p>{name}</p>
                    <p>
                        <small>Quantity: {quantity}</small>
                    </p>
                </div>
                <div>
                    <button className='delete-btn'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;