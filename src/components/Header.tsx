import React from "react"
import {NavLink, Link} from "react-router-dom"


const Header = () => {
    return (
        <header className="app-header">
            <h1>myStore</h1>
            <NavLink to="/">Products</NavLink>
            <NavLink to="cart">Cart</NavLink>
        </header>
    )
}

export default Header;