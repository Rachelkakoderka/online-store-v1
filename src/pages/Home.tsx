import React from "react"
import products from "../assets/products"
import hat1 from "../assets/hat-1.jpg"
import hat2 from "../assets/hat-2.jpg"
import hat3 from "../assets/hat-3.jpg"
import hat4 from "../assets/hat-4.jpg"
import hat5 from "../assets/hat-5.jpg"
import hat6 from "../assets/hat-6.jpg"
import hat7 from "../assets/hat-7.jpg"

import Card from "../components/Card"





const Home = () => {

    const images = [hat1, hat2, hat3, hat4, hat5, hat6, hat7, hat1, hat2, hat3, hat4, hat5, hat6, hat7]

   
    const productCardElems = products.map((hat, index) => <Card key={index} product={hat} src={images[index]} />)

    
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