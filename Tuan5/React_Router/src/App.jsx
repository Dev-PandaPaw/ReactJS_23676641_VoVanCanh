import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import Products from "./components/Products.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Checkout from "./components/Checkout.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Profile from "./components/Profile.jsx";
import Orders from "./components/Orders.jsx";
import Settings from "./components/Settings.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/about">About</Link>
        {" | "}
        <Link to="/contact">Contact</Link>
        {" | "}
        <Link to="/products">Products</Link>
        {" | "}
        <Link to="/dashboard">Dashboard</Link>
        {" | "}
        <Link to="/login">Login</Link>
        {" | "}
        <Link to="/profile">Profile</Link>
        {" | "}
        <Link to="/orders">Orders</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
