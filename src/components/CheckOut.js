import { addDoc, collection, serverTimestamp, doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase/Firebase'
import { useCartContext } from './context/CartContext'
import Swal from 'sweetalert2'

const CheckOut = () => {
    const [comprador, setComprador] = useState({});
    const { cart, totalPrice, deleteCart } = useCartContext();
    const [orderId, setOrderId] = useState("");

    const datosComprador = (e) => {
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })
    }



    const sweetAlert = () => {
        Swal.fire("Todos los campos son obligatorios")
    }



    const finalizarCompra = (e) => {
        e.preventDefault()
        if (Object.values(comprador).length !== 3) {
            sweetAlert()
//crea ticket de compra            
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

    //Descuenta stock de firebase
    const updateStock = () => {
        cart.forEach(orden => {
            const docRef = doc(db, 'productos', orden.producto.id)
            const updateStock = orden.producto.stock - orden.quantity;
            updateDoc(docRef, {
                stock: updateStock
            })
        })
    }
    return (
        <>{!orderId ? (
            <div className="m-5">
                <p className='text-3xl m-5'>Complete sus datos para la facuración:</p>
                <form onSubmit={finalizarCompra} className="m-5">
                    <p className='text-2xl'>Nombre completo:</p>
                    <input type="text" placeholder='Nombre y apellido' name='name' onChange={datosComprador} className="input input-bordered mb-5" ></input>
                    <p className='text-2xl'> Numero de tel:</p>
                    <input type="number" placeholder='Numero de telefono' name='phone' onChange={datosComprador} className="input input-bordered mb-5" ></input>
                    <p className='text-2xl'>Email:</p>
                    <input type="email" placeholder='info@site.com' name='email' onChange={datosComprador} className="input input-bordered mb-5" ></input>
                    <div><button type='submit' className="btn btn-success">Comprar</button></div>
                </form>
            </div>)
            : (
                <div className='p-5'>
                    <div className="alert alert-info shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>
                                <p className='text-3xl m-5'>Muchas gracias por su compra, en 30 minutos podes pasar a buscarla por nuestro local</p>
                                <p className='text-3xl m-5'>Su orden es: {orderId}</p>
                                <Link to={"/"} className="btn btn-success flex justify-center">Ir a Home</Link>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>


    )
}

export default CheckOut

