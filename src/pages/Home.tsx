import React from "react"
import products from "../assets/products"

import Card from "../components/Card"





const Home = () => {

   

   
    const productCardElems = products.map((hat, index) => <Card key={index} product={hat} src={hat.imgSrc} />)

    
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