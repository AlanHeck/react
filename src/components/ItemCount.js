import {React, useState} from 'react'


const ItemCount = ({initial, stock}) => {
  const [count, setCount] = useState(initial);

  const addCount = () => {
    if(count < stock){
      setCount(count +1);
    }
  }

  const restCount = () => {
  if(count > initial){
    setCount(count -1)};
  }
  
  return (
    <div>
      <div className="flex justify-center p-1">
      <button className="btn btn-error border-solid border-2 border-indigo-600 m-1" onClick={restCount}> - </button>

      <p className='text-2xl flex place-items-center'>{count}</p>

      <button className="btn btn-accent border-solid border-2 border-indigo-600 m-1" onClick={addCount}> + </button>
      </div>
    </div>
  )
}

export default ItemCount