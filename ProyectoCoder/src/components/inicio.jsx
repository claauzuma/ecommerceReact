import React from 'react'



const inicio = () => {

    const { user, setUser } = useAuth();

  return (
    <>
    <h1>BIENVENIDO {user.nombre}</h1>
    </>
  )
}

export default inicio