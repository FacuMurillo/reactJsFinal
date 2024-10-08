import React, { useContext } from "react"; 
import "./NavBar.css";
import CartWidget from "../Cart/CartWidget";
import { Link } from "react-router-dom";
import { CartContext } from '../Cart/CartContext'; 

function NavBar() {
    const { cartItems } = useContext(CartContext); 

    return (
        <div className="contenedorNavBar">
            <h1><Link to="/">STOREFACU</Link></h1>
            <ul className="NavBar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category/monitores">Monitors</Link></li>
                <li><Link to="/category/placas">Graphics Cards</Link></li>
            </ul>
            <CartWidget cartItems={cartItems} /> 
        </div>
    );
}

export default NavBar;
