import React from 'react'
import { useSelector } from 'react-redux'
import store from "../redux"
import products from '../assets/products'

interface Props {
    id: string
}

export default function CartItem(props : Props) {
  const {id} = props

  const cartItem = products.find(x => x.id === id);
  //console.log(cartItem)


  return (
    <div className='cart__item'>
      <div className='cart__item__details'>
        <img className='cart__item__img' src={cartItem?.imgSrc} alt={cartItem?.title} width="100px"/>
        <p className='cart__item__title'>{cartItem?.title}</p>
      </div>
      <p>{cartItem?.price} {cartItem?.currency}</p>
    </div>
  )
}
