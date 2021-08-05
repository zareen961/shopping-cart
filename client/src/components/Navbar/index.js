import React from 'react'
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

import './Navbar.css'

function Navbar({handleShow}) {
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart
    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + Number(qty), 0)
    }
    return (
        <nav className='navbar'>
            {/* logo */}
            <div className="navbar__logo" >
                <h2>MERN Shopping Cart</h2>
            </div>
            {/* links */}
            <ul className="navbar__links">
                <li>
                    <Link to='/cart' className='navbar__cartLink'>
                        {/* Icons */}
                        <FaShoppingCart/>
                        <span>
                            Cart
                            <span className="navbar__badge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        {/* Icons */}
                        Shop
                    </Link>
                </li>
            </ul>
            {/* hamburger menu */}
            <div className="navbar__hamburgerMenu" onClick={() => handleShow(true)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
