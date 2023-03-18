import React from "react"
import {NavLink, Link} from "react-router-dom"
import { RiShoppingBasket2Line } from "react-icons/ri"


const Header = () => {
    return (
        <>
        <header className="app-header">
            
            <NavLink to="/"><h1>myStore</h1></NavLink>
            <nav>
                <NavLink to="account">Account</NavLink>
                <NavLink to="cart">Cart</NavLink>

            </nav>
            
        </header>
        </>
    )
}

export default Header;