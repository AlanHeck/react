import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import dataProductos from '../data/dataProductos';
import { useParams } from 'react-router-dom';

function ItemDetailContainer () {

  const {id} = useParams()

const [productos, setProductos] = useState()


    const getProdData = () => new Promise((resolve) => {
        setTimeout(() => resolve(dataProductos.find(producto => producto.id === Number(id))),2000)
    })

   useEffect(() => {
    getProdData()
    .then(response => setProductos(response))
   },[])



  return (
    <div className='flex justify-center m-1 ' >{productos ? < ItemDetail producto={productos}/> : <h1>Loading...</h1>}
    </div>
  )
}

export default ItemDetailContainer;