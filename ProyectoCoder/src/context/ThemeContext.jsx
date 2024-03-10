import React, {useState, createContext } from 'react';
export const ThemeContext = createContext();


const ThemeProvider = ({children}) => {

  const [isDarkMode,setIsDarkMode] = useState(false);

  const [cart,setCart] = useState([])



    return (
        <ThemeContext.Provider value={{isDarkMode,setIsDarkMode,cart,setCart}}>
            {children}


        </ThemeContext.Provider>
    )



}


export default ThemeProvider
