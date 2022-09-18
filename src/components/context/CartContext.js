import React, { useContext, createContext, useState } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
  //Lógica
  const [cart, setCart] = useState([])

  //Validar si el item esta en el carrito
  const isInCart = (id) => cart.find((producto) => producto.id === id)

  //Agregar item al carrito
  const addToCart = (producto, cantidad) => {
    const newCart = [...cart]

    const productoEnCart = isInCart(producto.id)

    if (productoEnCart) {
      newCart[newCart.findIndex(producto => producto.id === productoEnCart.id)].quantity += cantidad

      setCart(newCart)
      return
    }

    producto.quantity = cantidad
    setCart([...newCart, producto])

  }

  //Borrar del carrito
  const deleteFromCart = (producto) => {
    const newCart = [...cart]

    const productoEnCart = isInCart(producto.id)

    if (!productoEnCart) {
      return
    }

    const deleteProduct = newCart.filter((prod) => prod.id !== producto.id)

    setCart(deleteProduct)
  }

  //Vaciar carrito
  const deleteCart = () => setCart([])

  //Total de productos
  const totalProducts = () => cart.reduce((collector, producto) => collector + producto.quantity, 0)

  //Precio Total
  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0)
  }

  console.log(cart)


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