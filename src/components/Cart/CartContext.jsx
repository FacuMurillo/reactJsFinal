import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const agregarAlCarrito = (nuevoProducto) => {
        setCartItems(prevItems => {
            const productoExistente = prevItems.find(item => item.id === nuevoProducto.id);

            if (productoExistente) {
                return prevItems.map(item =>
                    item.id === nuevoProducto.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...nuevoProducto, quantity: 1 }]; // Asegúrate de establecer la cantidad inicial
            }
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, agregarAlCarrito, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
