import React, { useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/userProducts';
import { addToDb, getLocalStorage } from '../../utilities/fakeDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleAddtoCart = product => {
        let newCart = [];
        const exists = cart.find(cartProduct => cartProduct.id === product.id);

        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            const rests = cart.filter(cartProduct => cartProduct.id !== product.id);
            exists.quantity += 1;
            newCart = [...rests, exists]
        }
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddtoCart={handleAddtoCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;