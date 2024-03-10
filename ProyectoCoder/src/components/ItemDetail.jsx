import React , {useState, useContext} from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({producto}) => {

  const [cart,setCart] =useState(false)
  const {agregarCarrito} = useContext(CartContext)


  const onAdd =  (count)=> {
  setCart(true)
  agregarCarrito(producto,count)
  console.log(producto)
  console.log(count)
  }


  return (
  <>

  <h1>{producto.nombre}</h1>
  <img src={producto.img} alt={producto.nombre} />
  <h3>{producto.precio}</h3>
  <h3>{producto.stock}</h3>
  
  {producto.stock == 0 ? <h2> El producto no tiene stock </h2> : ( cart ? <Link to={'/carrito'}>Ir al carrito </Link> :  <ItemCount descripcion= {"Agregar al carritoo"} initial={1} stock={producto.stock} onAdd = {onAdd}/>)}
  <h3>{producto.description}</h3>


    

  
  
  </>
  )
}

export default ItemDetail