import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { StoreInterf } from "../Interfaces";
import CartItem from "./CartItem";
import { addToCart } from "../redux";


const AccDetails = () => {

    const {login, favouriteProducts} = useSelector((store : StoreInterf) => store)
    console.log(login);
    const dispatch = useDispatch();

    const favProductsElems = favouriteProducts.map(thing => <CartItem key={thing} id={thing} isCart={false}/>)

    return (
        <div className="cart_container">
            <h2 className="greetings">Witaj {login}!</h2>
            {
            favouriteProducts.length>0 ?
             <div className="cart__elements"> 
             <h3 className="page__description">To są Twoje ulubione produkty:</h3>
                {favProductsElems}
                <button className="btn" onClick={() => favouriteProducts.map((product : string) =>  dispatch(addToCart(product)))}><h4>DODAJ DO KOSZYKA</h4></button>

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