import React from "react"
import { useSelector } from "react-redux"
import { StoreInterf } from "../Interfaces";
import store from "../redux"
import CartItem from "../components/CartItem";


const Cart = () => {

    const cart:[string] = useSelector((store : StoreInterf) => store.itemsInCart);
    console.log(cart)

    const cartItemElems = cart.map(thing => <CartItem id={thing}/>)

    return (
        <div>{cart.length ? cart : "Your cart is empty"}</div>
    )
}

export default Cart;