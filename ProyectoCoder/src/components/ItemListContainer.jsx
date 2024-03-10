import React from 'react'
import "./ItemListContainer.css"
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import './ItemList.css'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const { categoryid } = useParams();


  useEffect(() => {
    const db = getFirestore()

    const misProductos = categoryid ? query(collection(db, "item"), where("categoria", "==", categoryid))
      :
      collection(db, "item")

    getDocs(misProductos).then((res) => {
      const nuevosProductos = res.docs.map((doc) => {
        const data = doc.data()
        return { id: doc.id, ...data }
      })
      setProductos(nuevosProductos)
      console.log(nuevosProductos[1])
    })
      .catch((error) => console.log(error))
      


  }, [categoryid])

  



  return (

    <>
  
      <div className='itemContainer'>

        {productos.length == 0 ? <h1> CARGANDO </h1> :

          <ItemList productos={productos} />

        }


      </div>




    </>


  )
}

export default ItemListContainer