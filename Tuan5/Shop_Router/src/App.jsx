import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import ProductsLayout from "./components/ProductsLayout.jsx";
import Products from "./components/Products.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Cart from "./components/Cart.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/products">Products</Link>
        {" | "}
        <Link to="/cart">Cart</Link>
        {" | "}
        <Link to="/login">Login</Link>
        {" | "}
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsLayout />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
