import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {
  return (
  <>

  <h1>{producto.nombre}</h1>
  <img src={producto.img} alt={producto.nombre} />
  <h3>{producto.precio}</h3>
  <h3>{producto.stock}</h3>
  <h3>{producto.description}</h3>


  <ItemCount initial={1} stock={producto.stock}/>

  
  
  </>
  )
}

export default ItemDetail