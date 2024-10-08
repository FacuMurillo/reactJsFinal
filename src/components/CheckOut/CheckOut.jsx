import React, { useState } from 'react';
import Swal from 'sweetalert2'; 
import './CheckOut.css';

function Checkout() {
    const [formValues, setFormValues] = useState({
        nombre: '',
        direccion: '',
        tarjeta: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Compra realizada!',
            text: 'Tu compra ha sido completada con éxito',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }).then(() => {
            setFormValues({
                nombre: '',
                direccion: '',
                tarjeta: ''
            });
        });
    };

    return (
        <div className="checkout-container">
            <h2>Formulario de compra</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre Completo:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formValues.nombre}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="direccion">Dirección de Envío:</label>
                    <input
                        type="text"
                        id="direccion"
                        name="direccion"
                        value={formValues.direccion}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tarjeta">Numero de Tarjeta:</label>
                    <input
                        type="text"
                        id="tarjeta"
                        name="tarjeta"
                        value={formValues.tarjeta}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn-comprar">Comprar</button>
            </form>
        </div>
    );
}

export default Checkout;
