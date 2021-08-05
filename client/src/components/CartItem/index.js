import "./CartItem.css";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const cartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartItem">
      <div className="cartItem__image">
        <img src={item.imageUrl} alt={item.name}/>
      </div>
      <Link to={`/product/${item.productId}`} className="cartItem__name">
        <p>{item.name}</p>
      </Link>
      <p className="cartItem__price">${item.price}</p>
      <select className='cartItem__select' value={item.qty} onChange={(e) => qtyChangeHandler(item.productId, e.target.value)}>
                  {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x+1} value={x+1}>{x+1}</option>
                  ))}
                </select>
      <button className="cartItem__deleteBtn" onClick={() => removeHandler(item.productId)}>
        <FaTrash/>
      </button>
    </div>
  );
};

export default cartItem;