import React from "react"
import { useSelector } from "react-redux"
import { StoreInterf } from "../Interfaces";
import store from "../redux"


const Cart = () => {

    const cart:[string] = useSelector((store : StoreInterf) => store.itemsInCart);
    console.log(cart)

    

    return (
        <div>{cart.length ? cart : "Your cart is empty"}</div>
    )
}

export default Cart;