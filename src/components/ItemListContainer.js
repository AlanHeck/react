import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {
  return (
    <div>{props.contenedor}
    <ItemCount initial={1} stock={5}/>
    </div>

  )
}

export default ItemListContainer
