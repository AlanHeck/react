import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ producto, urlDetalle }) => {
  const { img, nombre, descripcion } = producto
  return (
    <div className="card w-96 bg-blue-100 shadow-2xl m-4 italic border-double border-4 border-indigo-600 block ">
      <figure><img className='max-w-full h-auto rounded-lg' src={img} alt={nombre} /></figure>
      <div className="card-body">
        <h2 className="card-title">{nombre}</h2>
        <p>{descripcion}</p>
        <div className="card-actions justify-end">
          <Link to={urlDetalle} className="btn btn-primary">Ver más</Link>
        </div>
      </div>
    </div>
  )
}

export default Item