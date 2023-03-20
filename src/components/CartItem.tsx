import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeFromCart} from "../redux"
import products from '../assets/products'
import {RiDeleteBin6Fill} from "react-icons/ri"
import { RiDeleteBin6Line } from "react-icons/ri"
import { StoreInterf } from '../Interfaces'


interface Props {
    id: string
}

export default function CartItem(props : Props) {
  const {id} = props

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const cartItem = products.find(x => x.id === id);
  //console.log(cartItem)
  const cart : string[] = useSelector((store : StoreInterf)  => store.itemsInCart)
  const dispatch = useDispatch()

  const deleteIcon = isHovered ? 
    <span onClick={() =>dispatch(removeFromCart(id))}><RiDeleteBin6Fill className='cart__item_delete'/></span>
    : 
    <span onClick={() =>dispatch(removeFromCart(id))}><RiDeleteBin6Line className='cart__item_delete'/></span>

  return (
    <div className='cart__item'>
      
      <div className='cart__item__details'>
        <div className='cart__item__box'>
          {deleteIcon}
          <img className='cart__item__img' src={cartItem?.imgSrc} alt={cartItem?.title} width="100px"/>
        </div>
        <p className='cart__item__title'>{cartItem?.title}</p>
      </div>
      <p>{cartItem?.price} {cartItem?.currency}</p>
    </div>
  )
}
