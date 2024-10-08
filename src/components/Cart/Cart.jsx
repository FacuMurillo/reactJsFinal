import React from 'react';

function Cart({ cartItems = [] , onClose }) {
    return (
        <div className="cart-dropdown">
            <h4>Carrito:</h4>
            <ul>
                {cartItems.length === 0 ? (
                    <li>No hay productos en el carrito.</li>
                ) : (
                    cartItems.map(item => (
                        <li key={item.id}>
                            {item.name} - Cantidad: {item.quantity}
                        </li>
                    ))
                )}
            </ul>
            <button onClick={onClose}>Cerrar</button>
        </div>
    );
}

export default Cart;
