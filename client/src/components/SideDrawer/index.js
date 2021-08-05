import React from 'react'
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"
import './SideDrawer.css'
import { useSelector } from "react-redux";


function SideDrawer({show, click}) {
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart
    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + Number(qty), 0)
    }
    return (
        <div className={`${show ? 'sideDrawer show' : 'sideDrawer'}`}>
            <ul className="sideDrawer__links" onClick={click}>
                <li>
                    <Link to='/cart' className='sideDrawer__cartLink'>
                        {/* Icons */}
                        <FaShoppingCart/>
                        <span>
                            Cart
                            <span className="sideDrawer__badge">{getCartCount()}</span>
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
        </div>
    )
}

export default SideDrawer
