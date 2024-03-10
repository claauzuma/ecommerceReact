import React , {useState, useContext} from 'react'
import ItemCount from './ItemCount'


const ItemCarrito = ({producto}) => {

    return (
    <>
  
    <h1>{producto.nombre}</h1>
    <img src={producto.img} alt={producto.nombre} />

   

  
  
    
    </>
    )
  }
  
export default ItemCarrito




