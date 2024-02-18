import React from 'react'
import "./ItemListContainer.css"
import { useState,useEffect } from 'react'
import ItemList from './ItemList'
import './ItemList.css'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([])
  const {categoryid} = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/productos.json");
        const data = await response.json()
        console.log(data[0].categoria)
        console.log("La categoria es " + categoryid)

        if(categoryid) {
          const filteredProducts = data.filter((p)=>p.categoria == categoryid)
          setProductos(filteredProducts)

        }else {

          setProductos(data);

        }
      
      }
      catch (error) {
        console.log("Error en el fetch " + error)
      }
    }
    fetchData()
  }, [categoryid])




  return (

    <>
     <h1>"Hola"</h1>
    <div className='itemContainer'>


   { productos.length == 0 ? <h1> CARGANDO </h1> : 
  
   <ItemList productos = {productos} />

     }

  
    </div>

    
 

   </>
    

  )
}

export default ItemListContainer