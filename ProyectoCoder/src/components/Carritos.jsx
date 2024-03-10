import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCarrito from './ItemCarrito'
import ItemCount from './ItemCount'

const Carritos = () => {
  const { cart, vaciarCarrito, total, eliminarItem } = useContext(CartContext)

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <>
          <h2>No hay productos en el carrito </h2>
          <Link to={"/"}>Llévame al inicio</Link>
        </>
      ) : (
        <>
          <h1>Lista del carrito</h1>
          <ul>
            {cart.map((producto) => (
              <div key={producto.producto.id}>
                {producto.cantidad === 0 ? null : 
                (
                  <>
                    <ItemCarrito producto={producto.producto} />
                    <h3>{producto.cantidad} {producto.cantidad > 1 ? "unidades" : "unidad"}</h3>
             
                    <br />
                    <br />
                    <button onClick={() => eliminarItem(producto.producto.id)}>Eliminar Producto</button>
                  </>
                )
                
                }
              </div>
            ))}
            <br />
            <h3>El total de la compra es de: {total}</h3>
            <Link to={"/checkout"}>
              Completar compra
            </Link>
            <br />
            <br />
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
          </ul>
        </>
      )}
    </div>
  );
}

export default Carritos