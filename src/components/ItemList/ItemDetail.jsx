
import './ItemDetail.css'

const ItemDetail =({id,name,img,category,descripcion,precio,stock,onAdd})=>{
  return(
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">
          {name}
        </h2>
      </header>
        <picture>
          <img src={img} alt={name} className="ItemImg"/>        
        </picture>
      <section>
        <p className="info"> Categoría: {category} </p>
        <p className="info"> Descripción: {descripcion} </p>
        <p className="info"> Precio: ${precio} </p>
        <p className="info"> Stock: {stock} </p>
      </section>
      <footer className='ItemFooter'>
      </footer>
    </article>
  )
} 

export default ItemDetail;