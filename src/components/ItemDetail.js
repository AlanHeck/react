import React from 'react'
import ItemCount from './ItemCount';

function ItemDetail({producto}) {
  return (
    <div>
         <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={producto.img} alt={producto.nombre} /></figure>
        <div className="card-body">
          <h2 className="card-title">{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p>$ {producto.precio}</p>
          <p>Stock {producto.stock}</p>
      <ItemCount initial={1} stock={producto.stock}/>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;