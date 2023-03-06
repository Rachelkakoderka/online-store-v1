import { createContext, useState, useEffect } from "react";

const StoreContext = createContext("");


function StoreContextProvider(props) {

  

    const [products, setProducts] = useState([]);
    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    return (
        <StoreContext.Provider value={{products}}>
            {props.children}
        </StoreContext.Provider>
    )
}



export {StoreContextProvider, StoreContext};