import { React, useState } from 'react'
import { useCartContext } from '../components/context/CartContext'
import { useAppContext } from '../components/context/AppContext'
import { Link } from 'react-router-dom';



const ItemCount = ({ initial, stock, onAdd, id }) => {
  const [count, setCount] = useState(initial);

  const { addToCart } = useCartContext()
  const { productos } = useAppContext()

  const addCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  const restCount = () => {
    if (count > initial) {
      setCount(count - 1);
    } 
    

  }

  const handleClick = (id, cantidad) => {
    const findProducto = productos.find((producto) => producto.id === id)

    if (!findProducto) {
      alert("Error")
      return
    }

    addToCart(findProducto, cantidad)
    onAdd(count)
  }

  return (
    <div>
      {stock !== 0 ? (
        <div className='flex justify-between items-center'>
          <div className="flex justify-center p-1">
            <button className="btn btn-error border-solid border-2 border-indigo-600 m-1" onClick={restCount}> - </button>

            <p className='text-2xl flex place-items-center'>{count}</p>

            <button className="btn btn-accent border-solid border-2 border-indigo-600 m-1" onClick={addCount}> + </button>
          </div>
          <button className="btn btn-primary" onClick={() => handleClick(id, count)}>Agregar al carrito</button>
        </div>)
        :
        <div className='p-5'>
          <div className="alert alert-error shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>Producto sin stock, podes elegir otros acá:
                <Link to={'/'} className="btn btn-accent normal-case text-xl m-4">Heck Burgers</Link>
              </span>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default ItemCount