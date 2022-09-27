import React, { createContext, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/Firebase';


const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([])

  const { categoria } = useParams()




  useEffect(() => {
    const q = categoria
      ? query(collection(db, 'productos'), where('categoria', '==', categoria))
      : collection(db, 'productos')
      
    getDocs(q)
      .then((res) => {
        const lista = res.docs.map((producto) => {
          return {
            id: producto.id,
            ...producto.data()
          }
        })
        setProductos(lista)
      }
      )

  }, [categoria])

  

  return <AppContext.Provider value={{ productos }}>{children}</AppContext.Provider>


}

export default AppContextProvider
