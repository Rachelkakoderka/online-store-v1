import React from "react"
import { useSelector } from "react-redux";
import { StoreInterf } from "../Interfaces";
import CartItem from "./CartItem";


const AccDetails = () => {

    const {login, favouriteProducts} = useSelector((store : StoreInterf) => store)
    console.log(login);

    const favProductsElems = favouriteProducts.map(thing => <CartItem key={thing} id={thing} isCart={false}/>)

    return (
        <div className="account__details_container">
            <h3 className="greetings">Witaj w naszym sklepie {login}!</h3>
            {
            favouriteProducts.length>0 ?
             <div> 
                <p>To są Twoje ulubione produkty:</p>
                {favProductsElems}

             </div> :
             <div>
                <p>
                    Nie masz jeszcze ulubionych produktów...
                </p>
             </div>
             }
        </div>
        
    )
}

export default AccDetails;