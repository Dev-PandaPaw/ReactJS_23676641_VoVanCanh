import { useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext.jsx";

function Login() {
  const navigate = useNavigate();
  const { login } = useShop();

  const handleLogin = () => {
    login();
    navigate("/profile");
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
