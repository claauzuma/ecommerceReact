import React, { useContext, useState } from 'react'
import { collection, addDoc, updateDoc, doc, getDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from '../context/CartContext';




const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");
    const [telefono, setTelefono] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const { cart, total, totalCantidad, vaciarCarrito } = useContext(CartContext)
    const [completado, setCompletado] = useState(false)


    const manejadorFormulario = (event) => {

        event.preventDefault()
        if (!nombre || !apellido || !email || !emailConfirmation || !telefono) {
            setError("Completar los campos requeridos")
            return;
        }

        if (email != emailConfirmation) {
            setError("Los campos del email no coinciden")
        }

        const db = getFirestore();

        const orden = {
            items: cart.map((producto) => ({
                id: producto.producto.id,
                nombre: producto.producto.nombre,
                cantidad: producto.cantidad
            })),

            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "item", productoOrden.id);
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })

            })

        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setError("")
                        setOrdenId(docRef.id)
                        vaciarCarrito()
                        setCompletado(true)
                    })
                    .catch((error) => {
                        console.log(error)
                        setError("Se produjo un error al crear la orden")

                    })

            })
            .catch((error) => {
                console.log(error)
                setError("No se puede actualizar el stock")
            })
    }

    return (
        <>
            <div>Checkout</div>
            <h1>Ingresa tus datos</h1>

            <form onSubmit={manejadorFormulario}>
                {cart.map((producto) => (
                    <div key={producto.producto.id}>
                        <p>
                            {producto.producto.nombre} x {producto.cantidad}
                        </p>

                    </div>

                ))}

                <div>
                    <div>
                        <label htmlFor="Nombre">Nombre</label>
                        <input name="Nombre" type="text" onChange={(e) => { setNombre(e.target.value) }} />
                    </div>

                    <div>
                        <label htmlFor="Apellido">Apellido</label>
                        <input name="Apellido" type="text" onChange={(e) => { setApellido(e.target.value) }} />
                    </div>

                    <div>
                        <label htmlFor="Email">Email</label>
                        <input name="Email" type="email" onChange={(e) => { setEmail(e.target.value) }} />
                    </div>

                    <div>
                        <label htmlFor="EmailConfirmation">EmailConfirmation</label>
                        <input name="EmailConfirmation" type="email" onChange={(e) => { setEmailConfirmation(e.target.value) }} />
                    </div>

                    <div>
                        <label htmlFor="Telefono">Telefono</label>
                        <input name="Telefono" type="text" onChange={(e) => { setTelefono(e.target.value) }} />
                    </div>

                    {error && <p style={{ color: "red" }}>{error}</p>}

                    {ordenId && <strong> Se ha completado la compra con la orden {ordenId}</strong>}

                     {
                        !completado && <button type='submit'> Completar compra </button>

                     } 






                </div>









            </form>



        </>

    )
}

export default Checkout