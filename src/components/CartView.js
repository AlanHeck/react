import React from 'react'
import { useCartContext } from './context/CartContext'
import { Link } from 'react-router-dom';


export const CartView = () => {
  const { cart, totalPrice, deleteFromCart, deleteCart } = useCartContext();



  if (cart.length === 0) {
    return (
      <div className='p-5'>
        <div className="alert alert-error shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Carrito vacio, vea nuestros productos aqui
              <Link to={'/'} className="btn btn-accent normal-case text-xl m-4">Heck Burgers</Link>
            </span>
          </div>
        </div>
      </div>
    )
  } else

    return (
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr className='italic'>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((producto) => (
                <tr key={producto.id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={producto.img} alt={producto.nombre} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{producto.nombre}</div>
                        <div className="text-sm opacity-50">Stock {producto.stock}</div>
                      </div>
                    </div>
                  </td>
                  <td className='italic'>$ {producto.precio}</td>
                  <td className='italic'>{producto.quantity}</td>
                  <th>
                    <button className="btn btn-error" onClick={() => deleteFromCart(producto)}>Eliminar</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>

        </div>


        <div>
          <span className='text-3xl'> Precio total: $  {totalPrice()}</span>
        </div>

        <div className='m-5 flex justify-center'>
          <button className="btn btn-error mx-5" onClick={() => deleteCart(cart)}>Vaciar carrito</button>

          <Link to={"/"} className="btn btn-success">Seguir comprando</Link>
        </div>

        <div>
          <Link to={"/checkout"} className="btn btn-success">Finalizar compra</Link>
        </div>

      </div>

    )
}

export default CartView