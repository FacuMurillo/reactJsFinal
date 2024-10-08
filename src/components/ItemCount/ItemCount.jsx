
import "./ItemCount.css";
import { useState } from "react";


function ItemCount(){


        //? inicializar el useState
        const [contadorUno, setContadorUno] = useState(0);

        //? funcion para agregar al carrito
        const onAdd = () => {
            console.log(`Cantidad agregada al carrito: ${contadorUno}`);
        }

        //? funcion para no permitir numeros negativos
        const handleDecrement = () => {
            if ( contadorUno > 0 ) {
                setContadorUno( contadorUno - 1 );
            }
        }

        return(
            <div className="contenedor">
                <div className="contenedorButton">
                    <button className="Button"  onClick={() => setContadorUno(contadorUno + 1)}>+</button>
                    <p>{contadorUno}</p>
                    <button className="Button"  onClick={handleDecrement}>-</button>
                </div>
                <div>
                    <button className="Button" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        )
};

export default ItemCount;


