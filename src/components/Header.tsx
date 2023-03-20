import React from "react"
import {NavLink} from "react-router-dom"
import { RiShoppingBasket2Line } from "react-icons/ri"
import { RiAccountPinBoxLine, RiAccountPinBoxFill } from "react-icons/ri";

import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import { StoreInterf } from "../Interfaces";



const Header = () => {

    const iconStyle =  {color: "black" } 
    const isLoggedIn = useSelector((store : StoreInterf) => store.isLoggedIn)
    console.log(isLoggedIn)

    return (
        <>
        <header className="app-header">
            <div></div>
            <NavLink to="/"><h1>myHatStore</h1></NavLink>
            <nav>
                <IconContext.Provider value={iconStyle}>
                    <NavLink className="nav__icons" to="account">{isLoggedIn ? <RiAccountPinBoxFill /> : < RiAccountPinBoxLine />}</NavLink>
                </IconContext.Provider>
                
                <IconContext.Provider value={iconStyle}>
                    <NavLink className="nav__icons" to="cart">< RiShoppingBasket2Line /></NavLink>
                </IconContext.Provider>
            </nav>
            
        </header>
        </>
    )
}

export default Header;