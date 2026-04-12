import { useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext.jsx";

function Cart() {
  const navigate = useNavigate();
  const { cart } = useShop();

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={`${item.id}-${index}`}>{item.name}</li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate("/profile")}>Checkout</button>
    </div>
  );
}

export default Cart;
