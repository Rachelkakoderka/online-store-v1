import { createContext } from "react";

const {Provider, Consumer} = createContext("");

function StoreContextProvider(props) {
    return (
        <Provider value="">
            {props.children}
        </Provider>
    )
}



export {StoreContextProvider, Consumer as StoreContextConsumer};