import { useDispatch, useSelector } from "react-redux"
import { StoreInterf } from "../Interfaces";
import CartItem from "../components/CartItem";
import products from "../assets/products";
import { emptyCart } from "../redux";
import { useState } from "react";


const Cart = () => {

    //state pulled from Redux store
    const cart:[string] = useSelector((store : StoreInterf) => store.itemsInCart);
    const dispatch = useDispatch();

    const [cartDefaultText, setCartDefaultText] = useState<string>("Twój koszyk jest pusty");
    
    const  allItems = cart.map(id => products.find(x => x.id === id))
                        .map(item => item?.price) 
        
    const totalCost = () : number => {
            if (allItems.length > 0) {
               return allItems.reduce((acc : number, curr? : number) => {
               if (curr !== undefined) {
                return acc+curr
                }
                return  acc}, 0)
            }
        return 0        
    }
    
     
    

    function placeOrder() {
        setTimeout( () =>
        { 
            dispatch(emptyCart());
            setCartDefaultText("Twoje zamówienie zostało złożone. Dziękujemy!")
        }, 2000
        )
    } 
    

    const cartItemElems = cart.map(thing => <CartItem key={thing} id={thing} isCart={true}/>)
   

    return (
        <div className="cart__container">
            <div className="cart__elements">
                { cart.length > 0 ?
                <>
                    <div>
                       {cartItemElems}
                    </div>
                    <div className="cart__counter">
                        <div className="cart__total">
                            <h2>Razem:</h2>
                            <h2>{totalCost()} PLN</h2>
                        </div>
                        <button className="place_order__btn btn" onClick={placeOrder}  >
                            <h4>ZAMAWIAM</h4>
                        </button>
                    </div>
                
                </>
                :
                <div>
                    <p>
                        {cartDefaultText}
                    </p>
                    {/* <button className="btn"> Zobacz nasze produkty</button> */}
                </div> 
                }
                
                
            </div>
            
        </div>
    )
}

export default Cart;