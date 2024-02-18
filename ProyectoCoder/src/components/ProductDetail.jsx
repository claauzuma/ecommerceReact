

import React, {useState,useEffect} from 'react'
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';


const ProductDetail = () => {


    const [producto,setProducto] = useState([]);

    const {idProducto} = useParams();

    useEffect(() => {
      }, []) 



  return (
    <>

    <div>

    <ItemDetail producto={producto}/>      




    </div>
   

    </>




  )
}

export default ProductDetail