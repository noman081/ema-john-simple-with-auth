import React from 'react';
import './Product.css';
const Product = (props) => {
    const { handleAddtoCart, product } = props;
    const { name, price, img, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h5 className=''>{name}</h5>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} Star</p>
            </div>
            <button onClick={() => handleAddtoCart(product)} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;