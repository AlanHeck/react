import React from 'react'

const Item = ({producto}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={producto.img} alt={producto.nombre} /></figure>
  <div className="card-body">
    <h2 className="card-title">{producto.nombre}</h2>
    <p>{producto.descripcion}</p>    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Ver más</button>
    </div>
  </div>
</div>
  )
}

export default Item