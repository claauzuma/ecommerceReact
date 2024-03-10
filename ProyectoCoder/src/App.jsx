
import './App.css'
import CartWidget from './components/CartWidget'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { useEffect, useState } from 'react' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemCount from './components/ItemCount'
import Error from './components/Error'
import ProductDetail from './components/ProductDetail'
import Carritos from './components/Carritos'
import Checkout from './components/Checkout'

import CartProvider from './context/CartContext'
import { getFirestore,collection,getDocs,query,where } from 'firebase/firestore'


function App() {


  const [estado, setEstado] = useState("feliz")
  const [cantidad, setCantidad] = useState(8)
  const [products,setProducts] = useState([])


  const frase = "Bienvenidos a mi e-commerce"


  return (
    <>
      <BrowserRouter>
        <CartProvider>

          
          <CartWidget/>

          <NavBar />
          <Routes>
 
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoryid' element={<ItemListContainer />} />
            <Route path='/detalle/:id' element={<ItemDetailContainer />} />
            <Route path='/carrito' element={<Carritos />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<Error />} />

          </Routes>



        </CartProvider>
      </BrowserRouter>


    </>
  )
}

export default App
