import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {





  return (
    

<>


<nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container">
  <span class="navbar-brand">ZUMA FIT</span>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-brand mb-0 h1"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink to={"/"}  class="nav-link active" aria-current="page">Inicio</NavLink>
         
        </li>
        <li class="nav-item">
        <NavLink to={"categoria/suplementos"}  class="nav-link" aria-current="page">Suplementos</NavLink>
      
        </li>
        <li class="nav-item">
        <NavLink to={"categoria/pesasrusas"}  class="nav-link" aria-current="page">Pesas Rusas</NavLink>
      
        </li>
        <li class="nav-item">
        <NavLink to={"categoria/ropa"}  class="nav-link" aria-current="page">Ropa</NavLink>
      
        </li>
        <li class="nav-item">
        <NavLink to={"carrito"}  class="nav-link" aria-current="page">Carrito</NavLink>
      
        </li>
        

        
        
   
      </ul>

    
      
    

          </div>
  </div>
</nav>




  




</>











  )
}

export default NavBar