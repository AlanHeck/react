import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import dataProductos from '../data/dataProductos';

function ItemDetailContainer () {
const [productos, setProductos] = useState({})

    const getProdData = () => new Promise((resolve) => {
        setTimeout(() => resolve(dataProductos.find(producto => producto.id === 1)),2000)
    })

   useEffect(() => {
    getProdData()
    .then(response => setProductos(response))
   },[])

  return (
    <div className='flex justify-center' ><ItemDetail producto={productos}/>
    </div>
  )
}

export default ItemDetailContainer;