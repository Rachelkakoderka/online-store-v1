import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart, removeFromFavorite} from "../redux"
import products from '../assets/products'
import {RiDeleteBin6Fill, RiHeartFill, RiHeartLine} from "react-icons/ri"
import { RiDeleteBin6Line } from "react-icons/ri"


interface Props {
    id: string,
    isCart: boolean
}

export default function CartItem(props : Props) {
  const {id, isCart} = props

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const cartItem = products.find(x => x.id === id);

  const dispatch = useDispatch()

  const deleteIcon = isHovered ? 
    <span onClick={() =>dispatch(removeFromCart(id))}><RiDeleteBin6Fill className='icon'/></span>
    : 
    <span onClick={() =>dispatch(removeFromCart(id))}><RiDeleteBin6Line className='icon'/></span>

    const heartIcon = isHovered ? 
    <span onClick={() => dispatch(removeFromFavorite(id))}>
    <RiHeartLine className="icon" /></span> :
    <span onClick={() => dispatch(removeFromFavorite(id))}>
        <RiHeartFill className="icon full_heart" /></span>

  return (
    <div className='cart__item'>
      
      <div className='cart__item__details'>
        <div className='cart__item__box'>
          <div onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}>
            { isCart ? deleteIcon : heartIcon}
          </div>
          <img className='cart__item__img' src={cartItem?.imgSrc} alt={cartItem?.title} width="100px"/>
        </div>
        <p className='cart__item__title'>{cartItem?.title}</p>
      </div>
      <div className='cart__item__price__box'>
        <p>{cartItem?.price}</p> 
        <p>{cartItem?.currency}</p>
      </div>
    </div>
  )
}
