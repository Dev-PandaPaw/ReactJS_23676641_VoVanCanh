import { useNavigate, useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Product ID: {id}</h2>
      <button onClick={() => navigate("/checkout")}>Mua hàng</button>
    </div>
  );
}

export default ProductDetail;
