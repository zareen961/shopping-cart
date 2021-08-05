import "./CartScreen.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { addToCart, removeFromCart } from "../../redux/actions/cartActions";

import CartItem from "../../components/CartItem"


const CartScreen = () => {
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  const qtyChangeHandler = (id,qty) => {
    dispatch(addToCart(id, qty))
  }

  const removeHandler = (id) => {
    dispatch(removeFromCart(id))
  }
  
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + Number(qty), 0)
  }

  const getCartTotalPrice = () => {
    return cartItems.reduce((price, item) => (item.price*item.qty) + price, 0)
  }

  return (
      <div className="cartScreen">
        <div className="cartScreen__left">
            <h2>Shopping Cart</h2> 
            {/* <CartItem/> */}
            { cartItems.length === 0 ? (
              <div>
                Your cart is empty <Link to='/'>Go Back</Link>
              </div>
            ): cartItems.map((item,index) => (
                <CartItem key={index} item={item} qtyChangeHandler={qtyChangeHandler} removeHandler={removeHandler} />          
            ))}       
        </div>
        <div className="cartScreen__right">
          <div className="cartScreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartTotalPrice().toFixed(2)}</p>
          </div>
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
  )
}

export default CartScreen;