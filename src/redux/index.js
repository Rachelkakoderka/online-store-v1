import redux, {createStore} from "redux"

export function addToFavorite(id) {
   // console.log(id)
    return {
        type: "ADD_TO_FAVORITE",
        payload: id
    }
} 

export function removeFromFavorite(id) {
    // console.log(id)
     return {
         type: "REMOVE_FROM_FAVORITE",
         payload: id
     }
 } 

export function addToCart(id) {
    return {
        type: "ADD_TO_CART",
        payload: id
    }
} 

export function removeFromCart(id) {
    return {
        type: "REMOVE_FROM_CART",
        payload: id
    }
} 

export function emptyCart()  {
    return {
        type: "EMPTY_CART"
    }
}


const initialState = {
    favouriteProducts: [],
    itemsInCart: [],
    isLoggedIn: false
}

function reducer(state = initialState, action ) {
    switch(action.type) {
        case "ADD_TO_FAVORITE":
           return  state.favouriteProducts.includes(action.payload) ?  state : {
                ...state,
                favouriteProducts: [...state.favouriteProducts, action.payload]
            }
        case "REMOVE_FROM_FAVORITE":
           return  { ...state,
                favouriteProducts: state.favouriteProducts.filter(x => x !== action.payload)
            }
        case "ADD_TO_CART":
           return  state.itemsInCart.includes(action.payload) ?  state : {
                ...state,
                itemsInCart: [...state.itemsInCart, action.payload]
            }
        case "REMOVE_FROM_CART":
           return  { ...state,
                itemsInCart: state.itemsInCart.filter(x => x !== action.payload)
            }
        case "EMPTY_CART":
           return  { ...state,
                itemsInCart:[]
            }
        default:
            return state
    }

}

const store = createStore(reducer)
store.subscribe(()=> console.log(store.getState()));
export default store;

// //
// ...state,
// favouriteProducts: [...state.favouriteProducts, action.payload]