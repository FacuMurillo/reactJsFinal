import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const AddToCart = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <button onClick={handleAddToCart}>
            Agregar al Carrito
        </button>
    );
};

export default AddToCart;
