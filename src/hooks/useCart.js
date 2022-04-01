import { useState, useEffect } from 'react';
import { getLocalStorage } from '../utilities/fakeDb';
const useCart = products => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedData = getLocalStorage();
        let selectedProduct = [];
        for (const id in storedData) {
            const quantity = storedData[id];
            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                addedProduct.quantity = quantity;
                selectedProduct.push(addedProduct);
            }
        }
        setCart(selectedProduct);
    }, [products]);
    return [cart, setCart];
}

export default useCart;