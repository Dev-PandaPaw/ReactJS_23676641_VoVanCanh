import { useNavigate, useParams } from "react-router-dom";
import products from "../data/products.js";
import { useShop } from "../context/ShopContext.jsx";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useShop();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return <h2>Không tìm thấy sản phẩm</h2>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
    </div>
  );
}

export default ProductDetail;
