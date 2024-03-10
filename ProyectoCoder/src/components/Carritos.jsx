import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCarrito from './ItemCarrito'
import ItemCount from './ItemCount'


const Carritos = () => {

  const { cart,vaciarCarrito,total,eliminarItem } = useContext(CartContext)




  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? ( // Verifica si el carrito está vacío
        <>
          <h2>No hay productos en el carrito </h2>
          <Link to={"/"}>Llévame al inicio</Link>
        </>
      ) : (
        <>
          <h1>Lista del carrito</h1>
          <ul>

            {cart.map((producto) => (
              <div>
                <ItemCarrito producto = {producto.producto}/>
                <h1>{producto.cantidad} unidades </h1>
                <ItemCount descripcion={"Eliminar unidad"} initial={1} stock={producto.cantidad}/>
                <br/>
                <br/>
                
                <button onClick ={ ()=> eliminarItem(producto.producto.id)}>Eliminar Producto</button>
               

              </div>

            ))}
           
            <br/>
            <h2> El total de la compra es de : {total}</h2>

            <Link to= {"/checkout"}>
            Completar compra
            </Link>




            
            <button onClick={vaciarCarrito}> Vaciar carrito </button>

          </ul>
        </>
      )}
    </div>
  );
}


export default Carritos