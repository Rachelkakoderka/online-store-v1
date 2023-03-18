import React from "react"
import hat1 from "../assets/hat-1.jpg"
import hat2 from "../assets/hat-2.jpg"
import hat3 from "../assets/hat-3.jpg"
import hat4 from "../assets/hat-4.jpg"
import hat5 from "../assets/hat-5.jpg"
import hat6 from "../assets/hat-6.jpg"
import hat7 from "../assets/hat-7.jpg"



const Home = () => {

    const emptyHeartIcon = <i className="ri-heart-line"></i>
    const fullHeartIcon = <i className="ri-heart-fill"></i>


    return (
    <>
        <div className="container">
            <div className="product-grid">
                <div className="card stacked featured">
                    <img className="card__img" src={hat1} alt="image of a hat" />
                    <div className="card__content">
                        <h2 className="card__title">Lorem ipsum</h2>
                        <p className="card_price">100 PLN</p>
                        <p className="card__description"> Lorem Ipsum</p>
                    </div>
                    <div className="card_action">{emptyHeartIcon}</div>
                </div>
                <div className="card stacked ">
                    <img className="card__img" src={hat2} alt="image of a hat" />
                    <div className="card__content">
                        <h2 className="card__title">Lorem ipsum</h2>
                        <p className="card_price">100 PLN</p>
                        <p className="card__description"> Lorem Ipsum</p>
                    </div>
                </div>
                <div className="card stacked">
                    <img className="card__img" src={hat3} alt="image of a hat" />
                    <div className="card__content">
                        <h2 className="card__title">Lorem ipsum</h2>
                        <p className="card_price">100 PLN</p>
                        <p className="card__description"> Lorem Ipsum</p>
                    </div>
                </div>
                <div className="card stacked">
                    <img className="card__img" src={hat4} alt="image of a hat" />
                    <div className="card__content">
                        <h2 className="card__title">Lorem ipsum</h2>
                        <p className="card_price">100 PLN</p>
                        <p className="card__description"> Lorem Ipsum</p>
                    </div>
                </div>
                <div className="card stacked">
                    <img className="card__img" src={hat5} alt="image of a hat" />
                    <div className="card__content">
                        <h2 className="card__title">Lorem ipsum</h2>
                        <p className="card_price">100 PLN</p>
                        <p className="card__description"> Lorem Ipsum</p>
                    </div>
                </div>
                <div className="card stacked">
                    <img className="card__img" src={hat6} alt="image of a hat" />
                    <div className="card__content">
                        <h2 className="card__title">Lorem ipsum</h2>
                        <p className="card_price">100 PLN</p>
                        <p className="card__description"> Lorem Ipsum</p>
                    </div>
                </div>
                <div className="card stacked">
                    <img className="card__img" src={hat7} alt="image of a hat" />
                    <div className="card__content">
                    <h2 className="card__title">Lorem ipsum</h2>
                        <p className="card_price">100 PLN</p>
                        <p className="card__description"> Lorem Ipsum</p>
                    </div>
                </div>
            </div>
        </div>
        
    </>
    
    )
}

export default Home;