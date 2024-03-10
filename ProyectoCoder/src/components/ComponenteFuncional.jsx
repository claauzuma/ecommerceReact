import React from 'react'

const ComponenteFuncional = () => {

const handleClick =() => {
    alert("Hola Click")
}


  return (
    <div>

<h1>
    Componente con evento click

    <button onClick={handleClick}> Haz Click  </button>
</h1>

    </div>
  )
}

export default ComponenteFuncional