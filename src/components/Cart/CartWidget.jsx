import { useState, useContext } from 'react';
import './CartWidget.css';
import { useNavigate } from "react-router-dom";
import { CartContext } from './CartContext';

const formatearNumero = (numero) => {
  return new Intl.NumberFormat('es-ES').format(numero);
};

function CartWidget() {
  const [mostrarCart, setMostrarCart] = useState(false);
  const { cartItems, removeFromCart } = useContext(CartContext);

  const toggleCart = () => {
    setMostrarCart(!mostrarCart);
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  //? Ir al checkout
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
    setMostrarCart(false);
  };

  return (
    <div className="contenedorCarrito">
      <button className="botonCarrito" onClick={toggleCart}>
        Carrito ({totalItems})
      </button>
      {mostrarCart && (
        <>
          <div className="superficie" onClick={toggleCart}></div>
          <div className="dropdown">
            <div className="contenidoDropdown">
              {cartItems.length > 0 ? (
                cartItems.map(item => (
                  <div key={item.id} className="itemCarrito">
                    <span>{item.name}</span>
                    <span className="cantidad">Cantidad: {item.quantity}</span>
                    <span className="precio">${formatearNumero(item.price * item.quantity)}</span>
                    <button className="botonEliminar" onClick={() => removeFromCart(item.id)}>X</button>
                  </div>
                ))
              ) : (
                <div className="noItems">No hay productos en el carrito</div>
              )}
              <div className="contenedorTotal">
                <span className="etiquetaTotal">Total:</span>
                <span className="precioTotal">${formatearNumero(totalPrice)}</span>
              </div>
              <button className="botonCheckout" onClick={handleCheckout}>
                Ir a Checkout
              </button>
              <button className="botonCerrar" onClick={toggleCart}>
                Cerrar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartWidget;
