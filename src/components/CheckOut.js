import { addDoc, collection, serverTimestamp, doc, updateDoc} from 'firebase/firestore'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase/Firebase'
import { useCartContext } from './context/CartContext'

const CheckOut = () => {
    const [comprador, setComprador] = useState({});
    const { cart, totalPrice, deleteCart } = useCartContext();
    const [ orderId, setOrderId] = useState("");

    const datosComprador = (e) => {
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })

    }


    const finalizarCompra = (e) => {
        e.preventDefault()
        if (Object.values(comprador).length !== 3) {
            alert('todos los campos son obligatorios')
        } else {
            const ventasCollection = collection(db, "ventas")
            addDoc(ventasCollection, {
                comprador,
                productos: cart,
                total: totalPrice(),
                fecha: serverTimestamp(),
            })
            .then((res) => {
                setOrderId(res.id);
                deleteCart();
                updateStock();
                })
        }    
    }
    const updateStock = () => {  
        cart.forEach(prod => {
            const docRef = doc(db, 'productos', prod.producto.id)
            const updateStock = (prod.producto.stock + prod.cantidad) - prod.cantidad;
            updateDoc(docRef, {
                stock: updateStock
            })
        })
    }
    return (
        <>{!orderId ? (
            <div>
                <h1>CheckOut</h1>
                <form onSubmit={finalizarCompra} className="m-5">
                    <input type="text" placeholder='Nombre y apellido' name='name' onChange={datosComprador} className="input input-bordered" ></input>
                    <input type="number" placeholder='Numero de telefono' name='phone' onChange={datosComprador} className="input input-bordered" ></input>
                    <input type="email" placeholder='info@site.com' name='email' onChange={datosComprador} className="input input-bordered" ></input>
                    <button type='submit' className="btn btn-success">Comprar</button>
                </form>
            </div>)
            : (
                <div>
                    <span className='italic text-4x1 m-5'>Muchas gracias por su compra</span>
                    <p className='italic text-3x1'>Su orden es: {orderId}</p>
                    <Link to={"/"} className="btn btn-success">Ir a Home</Link>
                </div>
            )}
        </>


    )
}

export default CheckOut

