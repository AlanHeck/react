import React, {useState, useEffect} from 'react'
import dataProductos from '../data/dataProductos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const {categoria} = useParams()


  useEffect(() => {
    const getProdData = new Promise ((resolve, reject) => {
      if (categoria) {
      setTimeout(() => {
        resolve(dataProductos.filter(item => item.categoria === categoria));
        reject("salio mal");
      }, 2000);
    }else{
      setTimeout(() => resolve(dataProductos), 2000)
    }
    });
    getProdData
    .then((response) => setProductos(response))
    .catch ((err) => console.log (err))
    return () => {
      setProductos([])
    }
  }, [categoria])
  
  return (

    <div>
      {productos.length ? <ItemList list={productos} />: <h1>Loading...</h1>  }
      {props.contenedor}

    
    
    </div>
  )
}

export default ItemListContainer;