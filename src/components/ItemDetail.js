import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

function ItemDetail({ producto }) {
  const { img, nombre, descripcion, stock, precio, id } = producto

  const [terminar, setTerminar] = useState(false);

  const onAdd = (count) => {
    setTerminar(true)
    console.log(count)

  }
  return (
    <div>
      <div className="card w-96 bg-blue-100 shadow-xl m-5 italic">
        <figure><img src={img} alt={nombre} /></figure>
        <div className="card-body">
          <h2 className="card-title">{nombre}</h2>
          <p>{descripcion}</p>
          <p>$ {precio}</p>
          <p>Stock {stock}</p>
          <div className="card-actions justify-end">
            {terminar ? (<Link to="/cart"
              className="btn btn-primary">Terminar compra</Link>)
              : (
                <ItemCount initial={1} stock={stock} onAdd={onAdd} id={id} />

              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;