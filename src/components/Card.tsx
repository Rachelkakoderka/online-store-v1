import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorite, removeFromFavorite } from '../redux'

import {RiHeartLine} from "react-icons/ri" 
import {RiHeartFill} from "react-icons/ri"
import {BsCartPlus} from "react-icons/bs"
import {BsCartXFill} from "react-icons/bs"
import { HatInterf, StoreInterf } from '../Interfaces'



interface Props {
key:number,
src:string,
product: HatInterf
}


export default function Card(props :Props) {
    const {product, src} = props;

    const [isHovered, setIsHovered] = useState<boolean>(false);
    const dispatch = useDispatch()
    const favouriteProducts: [string] = useSelector((store : StoreInterf) => store.favouriteProducts);
    const store = useSelector(store => store)
    const cart = useSelector((store : StoreInterf) => store.itemsInCart);
    
    
    const isFavourite = favouriteProducts.includes(product.id)
    const isInCart = cart.includes(product.id)
    console.log(isFavourite)

    const heartIcon = isFavourite ?
    <span onClick={() => dispatch(removeFromFavorite(product.id))}>
        <RiHeartFill className="card__actions_icons" /></span> :
    <span onClick={() => dispatch(addToFavorite(product.id))}>
    <RiHeartLine className="card__actions_icons" /></span>

    const cartIcon =  isInCart ?
        <span onClick={() => console.log("removed from cart")}><BsCartXFill className='card__actions_icons'/> </span> :
        <span onClick={() => console.log("added to cart")}><BsCartPlus className="card__actions_icons" /></span>


  return (
        <div id={product.id} className="card stacked">
            <img className="card__img" src={src} alt={product.title} />
            <div className="card__content">
                <div className="card__details">
                    <h2 className="card__title"> {product.title}</h2>
                    <p className="card_price">{product.price} {product.currency}</p>
                    <p className="card__description"> {product.description}</p>    
                </div>
                <div className="card__actions">
                   {heartIcon}
                   {cartIcon}    
                      
                    
                </div>
            </div>
        </div>
  )
}
