import React, {createContext,useState} from "react";
export const CartContext = createContext();


const CartProvider = ({children}) => {

    const[cart,setCart] =useState([])
    const[total,setTotal] =useState(0);
    const[totalQuantity, setTotalQuantity] = useState(0);


    const agregarCarrito = (producto,cantidad)=> {


    const nuevoProducto = {producto : producto, cantidad: cantidad};

     const productoExistenteIndex = cart.findIndex(prod => prod.producto.id == producto.id);

     if(productoExistenteIndex === -1) {
        //Si el producto no está en el carrito, lo agrego
        setCart([...cart,nuevoProducto]);


     }
     else {
     //Si el producto ya esta en el carrito, actualizo la cantidad
        const nuevoCart = [...cart];
        nuevoCart[productoExistenteIndex].cantidad += cantidad;
        setCart(nuevoCart)
        
     }

        setTotalQuantity(totalQuantity+cantidad)
        setTotal(total + producto.precio * cantidad)
  
        
   

    }

    const eliminarItem = (id) => {
        const index = cart.findIndex(prod => prod.producto.id === id);
 
        if (index !== -1) {
    
            const nuevoCart = cart.filter(prod => prod.producto.id !== id);
            
            setCart(nuevoCart);
        }
    
        setTotalQuantity(totalQuantity - cart[index].cantidad)
        setTotal(total - cart[index].producto.precio* cart[index].cantidad)
        
    

    }




    const vaciarCarrito = () => {
    setCart([])   
    setTotal(0)
    setTotalQuantity(0)

    }

    const cantidadCarrito = () => {

    }

    const totalCarrito = () => {
        


    }


    return(
        <CartContext.Provider value={{cart,setCart,agregarCarrito,eliminarItem,vaciarCarrito,
        cantidadCarrito, totalCarrito, total, totalQuantity}}>
            {children}


        </CartContext.Provider>
    )



}

export default CartProvider