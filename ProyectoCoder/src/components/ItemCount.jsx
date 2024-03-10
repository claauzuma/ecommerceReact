import React, {useState,useEffect} from 'react'

const ItemCount = ({descripcion ,initial, stock, onAdd}) => {


const [contador,setContador] = useState(1)
const[carrito,setCarrito] = useState([]);

const decrementar=() => {
    if(contador>initial) {
        setContador(contador-1)
    }
}

const incrementar=() => {
    if(contador<stock) {
        setContador(contador+1)
    }
}

const agregarCarrito = () => {
    onAdd(contador)
}


  return (<>

   <p>{contador}</p>
   <button onClick={decrementar}> - </button>
   <button onClick={agregarCarrito}>{descripcion}</button>
   <button onClick={incrementar}> + </button>

  
  
  </>

  )
}

export default ItemCount