import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <>
      <p>Carrito</p>
      <p>{totalQuantity}</p>
    </>
  );
};

export default CartWidget;
