import { useSelector } from "react-redux"
import { StoreInterf } from "../Interfaces";
import CartItem from "../components/CartItem";
import products from "../assets/products";
import { HatInterf } from "../Interfaces";


const Cart = () => {

    const cart:[string] = useSelector((store : StoreInterf) => store.itemsInCart);
    //console.log(cart)

    const allItems = cart.map(id => products.find(x => x.id === id))
                        .map(item => item?.price) 

   console.log(allItems)
    const totalCost : number = allItems.reduce(((acc, curr) => acc +=  curr), 0)
    const cartItemElems = cart.map(thing => <CartItem id={thing}/>)
    console.log(totalCost)

    return (
        <div className="cart__container">
            <div className="cart__elements">
                {cart.length ? cartItemElems : "Your cart is empty"}
                <div className="cart__total">
                    <h2>Razem:</h2>
                    <h3>{totalCost} PLN</h3>
                </div>
                
            </div>
            
        </div>
    )
}

export default Cart;