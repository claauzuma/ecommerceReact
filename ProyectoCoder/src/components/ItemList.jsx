import React from 'react'
import Item from './Item'
import './ItemListPost.css'

const ItemList = ({ productos}) => {


    console.log("Renderizado Productos")
    return (
        <>
            <div className='itemListContainer'>

                <h1>"Hola"</h1>

                {
                    productos.map((producto) => {
                        return (
                            <Item producto={producto}/>

                        )

                    })

                }
            </div>


        </>


    )
}

export default ItemList