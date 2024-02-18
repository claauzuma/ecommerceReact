import React, {useState,useEffect} from 'react'

const ItemCount = ({initial, stock}) => {


const [contador,setContador] = useState(1)

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
    alert("Agregaste esta cantidad de productos " + contador)
}


  return (<>

   <p>{contador}</p>
   <button onClick={decrementar}> - </button>
   <button onClick={agregarCarrito}>Agregar al carrito</button>
   <button onClick={incrementar}> + </button>

  
  
  </>

  )
}

export default ItemCount