import React , {useState, useContext} from 'react'
import ItemCount from './ItemCount'


const ItemCarrito = ({producto}) => {

    return (
    <>
  
    <h3>{producto.nombre}</h3>
    <img src={producto.img} alt={producto.nombre} />

   

  
  
    
    </>
    )
  }
  
export default ItemCarrito




