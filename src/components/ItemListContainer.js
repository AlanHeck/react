import React, {useState, useEffect} from 'react'
import dataProductos from '../data/dataProductos';
import ItemList from './ItemList';



const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const[isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProdData = new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(dataProductos);
        reject("salio mal");
      }, 2000);
    });
    getProdData
    .then((response) => setProductos(response))
    .catch ((err) => console.log (err))
    .finally(() => setIsLoading(false));
  })
  
  return (

    <div>
      {isLoading ? <h2>Loading...</h2> : <ItemList list={productos}/> }
      {props.contenedor}

    
    
    </div>
  )
}

export default ItemListContainer;