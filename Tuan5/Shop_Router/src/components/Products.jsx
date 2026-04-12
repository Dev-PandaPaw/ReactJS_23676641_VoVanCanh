import { Link } from "react-router-dom";
import products from "../data/products.js";

function Products() {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
