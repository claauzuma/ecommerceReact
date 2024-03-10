import React, {useState,useEffect, useContext} from 'react'
import { CartContext } from '../context/CartContext'

const ItemCount = ({descripcion ,initial, producto, onAdd}) => {



const [contador,setContador] = useState(1)
const[carrito,setCarrito] = useState([]);

const decrementar=() => {
    if(contador>initial) {
        setContador(contador-1)
    }
}

const incrementar=() => {
    if(descripcion != "Eliminar unidad") {
        if(contador<producto.stock) {
            setContador(contador+1)
        }

    }
    else {
        if(contador<producto.cantidad) {
            setContador(contador+1)
        }

    }
 
}

const ejecutar = () => {
    if(descripcion !="Eliminar unidad") {
        onAdd(contador)
    }
    else 
    {

        alert("Se eliminan unidades")
        producto.cantidad = producto.cantidad - contador
        
        
    }
    
}


  return (<>
   <p>{contador}</p>

   <button onClick={decrementar}> - </button>
   <button onClick={ejecutar}>{descripcion}</button>
   <button onClick={incrementar}> + </button>
  


  
  </>

  )
}

export default ItemCount