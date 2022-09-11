import {React, useState} from 'react'
import {useCartContext} from '../components/context/CartContext'
import {useAppContext} from '../components/context/AppContext'


const ItemCount = ({initial, stock, onAdd, id}) => {
  const [count, setCount] = useState(initial);

 const {addToCart} =  useCartContext()
 const {productos} = useAppContext()

  const addCount = () => {
    if(count < stock){
      setCount(count +1);
    }
  }

  const restCount = () => {
  if(count > initial){
    setCount(count -1)};
  }
  
  const handleClick = (id, cantidad) => {
    const findProducto = productos.find((producto) => producto.id === id)

    if(!findProducto) {
      alert("Error")
      return
    }

    addToCart(findProducto, cantidad)
    onAdd(count)
  }

  return (
    <div className='flex justify-between items-center'>
      <div className="flex justify-center p-1">
      <button className="btn btn-error border-solid border-2 border-indigo-600 m-1" onClick={restCount}> - </button>

      <p className='text-2xl flex place-items-center'>{count}</p>

      <button className="btn btn-accent border-solid border-2 border-indigo-600 m-1" onClick={addCount}> + </button>
      </div>
      <button className="btn btn-primary" onClick={ () =>handleClick(id, count)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount