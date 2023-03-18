import React from "react"
import products from "../assets/products"
import hat1 from "../assets/hat-1.jpg"
import hat2 from "../assets/hat-2.jpg"
import hat3 from "../assets/hat-3.jpg"
import hat4 from "../assets/hat-4.jpg"
import hat5 from "../assets/hat-5.jpg"
import hat6 from "../assets/hat-6.jpg"
import hat7 from "../assets/hat-7.jpg"

import {RiHeartLine} from "react-icons/ri" 
import {RiHeartFill} from "react-icons/ri"
import {BsCartPlus} from "react-icons/bs"
import {BsCartXFill} from "react-icons/bs"





const Home = () => {

    const images = [hat1, hat2, hat3, hat4, hat5, hat6, hat7, hat1, hat2, hat3, hat4, hat5, hat6, hat7]

    const productCardElems = products.map((hat, index) => 
        <div id={hat.id} className="card stacked">
                    <img className="card__img" src={images[index]} alt={hat.title} />
                    <div className="card__content">
                        <div className="card__details">
                            <h2 className="card__title"> {hat.title}</h2>
                            <p className="card_price">{hat.price} {hat.currency}</p>
                            <p className="card__description"> {hat.description}</p>    
                        </div>
                        <div className="card_actions"><RiHeartLine /><BsCartPlus/></div>
                    </div>
                </div>
        )

    const emptyHeartIcon = <i className="ri-heart-line"></i>
    const fullHeartIcon = <i className="ri-heart-fill"></i>


    return (
    <>
        <div className="container">
            <div className="product-grid">
            {productCardElems}
            </div>
                
        </div>
        
    </>
    
    )
}

export default Home;