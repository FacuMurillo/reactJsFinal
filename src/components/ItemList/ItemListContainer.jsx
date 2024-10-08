

import { useEffect, useState } from "react";
import { useParams ,Link } from "react-router-dom";
import { productosPorCategoria , productos} from  "../api";
import "./ItemListContainer.css"
// import {collection, getDocs, getFirestore} from 'firebase/firestore';


function ItemListContainer({ mensaje }) {
    const { id } = useParams()
    const [productosList, setProductosList] = useState([]);
    const [cargando, setCargando] = useState(true);

//!        OBTENEMOS DATOS, LO GUARDAMOS EN EL ESTADO Y DE ESE ESTADO PRODUCIMOS UNA VISTA
//TODO       OBTENEMOS DATOS
useEffect(() => {
    const cargarProductos = async () => {
        let productosList = [];
        if (id) {
            productosList = await productosPorCategoria(id); 
        } else {
            productosList = await productos(); 
        }
        setProductosList(productosList);
        setCargando(false); 
    };
    
    cargarProductos();
}, [id]);

if (cargando) return <div>Cargando...</div>;
 

    // useEffect(() => {

    //* nos crea una instancia de la base de datos
    //     const db = getFirestore()

    //? ahora necesitamos la instancia de la collecion / le pasamos dos parametros uno es el "db" que es el nombre de la base de datos y el NOMBRE DE LA COLECCION  "items".
    //     const itemsCollection = collection(db, "items")

    //* getDocs es una funcion que recibe la colecion y nos retorna una PROMESA
    //? getDocs es un metodo asincrono
    //     getDocs(itemsCollection)
//TODO    AQUI GUARDAMOS EL ESTADO CON .THEN 
    //     .then((snapshot) => {
    //         setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
    //         setProductos(true)
    //     })
    // }, [])
//TODO     RENDERIZAMOS UNA VISTA
    return (
        <div>
            {/* <h3 className="mensajeProps animate__animated animate__jackInTheBox">
                {mensaje}
            </h3> */}
            <h2>{mensaje}</h2>
            <div className="catalogo"> 
                <ul className="listaProductos">
                    {productosList.map((producto) => (
                        <div className="card" key={producto.id}>
                            <img className="imgList" alt="" src={producto.image} />
                            <li>
                                <Link to={`/category/${producto.category}/id/${producto.id}`}>{producto.name}</Link>
                            </li>
                            <h4>${producto.precio.toLocaleString("es-ES")}</h4>  
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ItemListContainer;

