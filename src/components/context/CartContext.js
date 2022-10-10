import React, { useContext, createContext, useState } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
  //Lógica
  const [cart, setCart] = useState([])

  //Validar si el item esta en el carrito
  const findInCart = (id) => cart.find((orden) => orden.producto.id === id)

  //Agregar item al carrito
  const addToCart = (producto, cantidad) => {
    const newCart = [...cart]

    const ordenInCart = findInCart(producto.id)

    if (ordenInCart) {
      newCart[newCart.findIndex(producto => producto.id === ordenInCart.producto.id)].quantity += cantidad

      setCart(newCart)
      return
    }

    const orden = {
      producto: producto,
      quantity: cantidad,
    }
    setCart([...newCart, orden])

  }

  //Borrar del carrito
  const deleteFromCart = (producto) => {
    const newCart = [...cart]

    const ordenInCart = findInCart(producto.id)

    if (!ordenInCart) {
      return
    }

    const deleteProduct = newCart.filter((orden) => orden.producto.id !== producto.id)

    setCart(deleteProduct)
  }

  //Vaciar carrito
  const deleteCart = () => setCart([])

  //Total de productos
  const totalProducts = () => cart.reduce((collector, orden) => collector + orden.quantity, 0)

  //Precio Total
  const totalPrice = () => {
    return cart.reduce((totalPrice, orden) => totalPrice + orden.quantity * orden.producto.precio, 0)
  }



  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      deleteFromCart,
      deleteCart,
      setCart,
      totalProducts,
      totalPrice,

    }}>
      {children} </CartContext.Provider>
  )
}

export default CartContextProvider