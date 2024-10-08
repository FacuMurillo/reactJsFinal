import { useEffect, useState , useContext } from "react"; //? importamos los hooks 
import { useParams } from "react-router-dom";  //? importamos el hook para obtener las url
import { productosPorCategoria } from "../api";
import { CartContext } from '../Cart/CartContext'; 
import Swal from 'sweetalert2';
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
    
    const { id, category } = useParams(); 
    const [producto, setProducto] = useState(null);  
    const { agregarAlCarrito } = useContext(CartContext); // Usa el contexto

    useEffect(() => {
        const cargarProducto = async () => {
            Swal.fire({
                title: 'Cargando...',
                text: 'Por favor, espera mientras se obtienen los datos.',
                didOpen: () => {
                    Swal.showLoading(); 
                }
            });
            try {
                const productos = await productosPorCategoria(category);
                const productoEncontrado = productos.find(item => item.id === parseInt(id));
                console.log("Productos:", productos);
                console.log("Producto encontrado:", productoEncontrado);
                setProducto(productoEncontrado);
            } catch (error) {
                console.error("Error al cargar el producto:", error);
            } finally {
                Swal.close();
            }
        };

        cargarProducto();
    }, [id, category]);
   
    if (!producto) return <div>Cargando...</div>;

    return (
        <div className="contenedorProducto">
            <h2>Detalle de Producto</h2>
            <h3>Nombre: {producto.name}</h3>
            <img className="imgDetail" src={producto.image} alt="" />
            <h4>Precio: ${producto.precio}</h4>
            <button className="botonAgregar" onClick={() => agregarAlCarrito({ id: producto.id, name: producto.name, price: producto.precio, quantity: 1 })}>
                Agregar al carrito
            </button>
        </div>
    );
}

export default ItemDetailContainer;