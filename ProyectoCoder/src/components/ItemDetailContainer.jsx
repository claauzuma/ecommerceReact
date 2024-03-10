

import React, {useState,useEffect,useContext} from 'react'
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { getFirestore,doc,getDoc } from 'firebase/firestore';



const ItemDetailContainer = () => {


    const [producto,setProducto] = useState([]);
    const {id} = useParams();


    useEffect(() => {

      const db = getFirestore();

      //generamos el llamado al documento determinado
      const nuevoDoc = doc(db,"item",id)

      //Hacemos el llamado al doc y lo renderizamos en pantalla
      getDoc(nuevoDoc).then(res => {
        const data = res.data()
        const nuevoProducto = {id: res.id,...data}
        setProducto(nuevoProducto)
      })
      .catch(error => console.log(error))

      }, [id])



  return (
    <>
    <ItemDetail producto={producto}/>
        

    </>




  )
}

export default ItemDetailContainer