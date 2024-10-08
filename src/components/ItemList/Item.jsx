import React from 'react';

import AddToCart from '../Cart/AddToCart'; 

const Item = ({ producto }) => {
    return (
        <div className="item">
            <img className="imgList" alt={producto.name} src={producto.image} />
            <h4>{producto.name}</h4>
            <p>${producto.precio.toLocaleString("es-ES")}</p>
            <AddToCart product={producto} />
        </div>
    );
};

export default Item;