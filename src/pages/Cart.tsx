import { useSelector } from "react-redux"
import { StoreInterf } from "../Interfaces";
import CartItem from "../components/CartItem";
import products from "../assets/products";
import { HatInterf } from "../Interfaces";


const Cart = () => {

    const cart:[string] = useSelector((store : StoreInterf) => store.itemsInCart);
    //console.log(cart)

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
    
    console.log(allItems)
    

    const cartItemElems = cart.map(thing => <CartItem key={thing} id={thing}/>)
    console.log(totalCost)

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
                        <button className="place_order__btn" >
                            <h4>ZAMAWIAM</h4>
                        </button>
                    </div>
                
                </>
                : 
                <p>
                    Twój koszyk jest pusty
                </p>
        
                }
                
                
            </div>
            
        </div>
    )
}

export default Cart;