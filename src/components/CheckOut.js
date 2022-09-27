import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
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
                })
                .catch((error) => console.log(error))
        }
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
                    <h1>Muchas gracias por su compra</h1>
                    <h2>Su orden es: {orderId}</h2>
                    <Link to={"/"} className="btn btn-success">Ir a Home</Link>
                </div>
            )}
        </>


    )
}

export default CheckOut

