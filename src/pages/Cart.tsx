import { useSelector } from "react-redux"
import { StoreInterf } from "../Interfaces";
import CartItem from "../components/CartItem";
import products from "../assets/products";


const Cart = () => {

    const cart:[string] = useSelector((store : StoreInterf) => store.itemsInCart);
    //console.log(cart)

    const totalCost = products.map(item => products.filter( product => product.id === item.id))
    const cartItemElems = cart.map(thing => <CartItem id={thing}/>)

    return (
        <div className="cart__container">
            <div className="cart__elements">
                {cart.length ? cartItemElems : "Your cart is empty"}
            </div>
            <h2>Razem:{}</h2>
        </div>
    )
}

export default Cart;