import React from 'react'

function ItemDetail({producto}) {
  return (
    <div>
         <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={producto.img} alt={producto.nombre} /></figure>
        <div className="card-body">
          <h2 className="card-title">{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p>$ {producto.precio}</p>
          <p>Stock {producto.stock}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;