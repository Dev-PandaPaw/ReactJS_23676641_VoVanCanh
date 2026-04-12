import { Navigate } from "react-router-dom";
import { useShop } from "../context/ShopContext.jsx";

function ProtectedRoute({ children }) {
  const { user } = useShop();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
