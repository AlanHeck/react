import React, { createContext, useContext, useEffect, useState } from 'react'
import dataProductos from '../../data/dataProductos'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const getProdData = new Promise((resp) => {
      resp(dataProductos)
    }, 2000)
    getProdData
      .then((resp) => setProductos(resp))
    return () => {
      setProductos([])
    }
  }, []
  )

  return <AppContext.Provider value={{ productos }}>{children}</AppContext.Provider>


}

export default AppContextProvider
