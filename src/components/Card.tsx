import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, addToFavorite, removeFromCart, removeFromFavorite } from '../redux'

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

    const dispatch = useDispatch()
    const cart:[string] = useSelector((store : StoreInterf) => store.itemsInCart);
    const favouriteProducts: [string] = useSelector((store : StoreInterf) => store.favouriteProducts);
   

    
    
    const isFavourite = favouriteProducts.includes(product.id)
    const isInCart = cart.includes(product.id)
    console.log(isFavourite)

    const heartIcon = isFavourite ?
    <span onClick={() => dispatch(removeFromFavorite(product.id))}>
        <RiHeartFill className="card__actions_icon" /></span> :
    <span onClick={() => dispatch(addToFavorite(product.id))}>
    <RiHeartLine className="card__actions_icon" /></span>

    const cartIcon =  isInCart ?
        <span onClick={() =>dispatch(removeFromCart(product.id))}><BsCartXFill className='card__actions_icon'/> </span> :
        <span onClick={() => dispatch(addToCart(product.id))}><BsCartPlus className="card__actions_icon" /></span>


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
