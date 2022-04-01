import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/userProducts';
import Cart from '../Cart/Cart';
import CartProduct from '../CartProduct/CartProduct';

const Orders = (props) => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div className='shop-container'>
            <div>
                {
                    cart.map(pd => <CartProduct key={pd.id} cart={pd}></CartProduct>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;