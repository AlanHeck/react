import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({producto, urlDetalle}) => {
  const {img, nombre, descripcion} = producto
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt={nombre} /></figure>
  <div className="card-body">
    <h2 className="card-title">{nombre}</h2>
    <p>{descripcion}</p>    
    <div className="card-actions justify-end">
     <Link to={urlDetalle}><button className="btn btn-primary">Ver más</button></Link> 
    </div>
  </div>
</div>
  )
}

export default Item