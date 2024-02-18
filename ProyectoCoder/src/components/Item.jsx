import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = ({ producto ,url, setProductos}) => {

 

    return (
        <>

        <Link to= {`/detalle/${producto.id}`}>

            <div key={producto.id} className='container'> 
                <img src={producto.img} alt={producto.nombre} />
                <h2>{producto.nombre}</h2>
                <h2>{producto.precio}</h2>
                <h2>{producto.stock}</h2>
                <p>{producto.description}</p>
     
            </div>

            </Link>
           
        </>
    )
}

export default Item