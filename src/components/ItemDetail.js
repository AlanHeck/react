import React from 'react'
import ItemCount from './ItemCount';

function ItemDetail({producto}) {
  const {img, nombre, descripcion, stock, precio} = producto
  return (
    <div>
         <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt={nombre} /></figure>
        <div className="card-body">
          <h2 className="card-title">{nombre}</h2>
          <p>{descripcion}</p>
          <p>$ {precio}</p>
          <p>Stock {stock}</p>
      <ItemCount initial={1} stock={stock}/>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;