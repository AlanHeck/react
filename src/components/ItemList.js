import React from 'react'
import Item from './Item'

const ItemList = ({list}) => {
  return (
    <div className='flex justify-between items-center flex-wrap m-1.5'>
      {list.map((producto) =>( <Item key={producto.id} producto={producto} />))}

    </div>
  )
}

export default ItemList