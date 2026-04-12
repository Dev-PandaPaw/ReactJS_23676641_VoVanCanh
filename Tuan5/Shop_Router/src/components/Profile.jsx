import { useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext.jsx";

function Profile() {
  const navigate = useNavigate();
  const { user, logout } = useShop();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>{user?.name}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
