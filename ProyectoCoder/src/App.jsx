
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




function App() {


  const [estado, setEstado] = useState("feliz")
  const [cantidad, setCantidad] = useState(8)


  const frase = "Bienvenidos a mi e-commerce"


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoryid' element={<ItemListContainer/>}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
          <Route path='*' element={<Error />} />

        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
