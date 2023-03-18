import React from "react"
import {NavLink, Link} from "react-router-dom"
import { RiShoppingBasket2Line } from "react-icons/ri"
import { RiAccountPinBoxLine } from "react-icons/ri";

import { IconContext } from "react-icons";



const Header = () => {

    const iconStyle =  {color: "black" } 

    return (
        <>
        <header className="app-header">
            <div></div>
            <NavLink to="/"><h1>myHatStore</h1></NavLink>
            <nav>
                <IconContext.Provider value={iconStyle}>
                    <NavLink className="nav__icons" to="account">< RiAccountPinBoxLine /></NavLink>
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