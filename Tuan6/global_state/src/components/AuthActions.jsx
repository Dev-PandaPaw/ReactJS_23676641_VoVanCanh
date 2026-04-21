import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms.js";

function AuthActions() {
  const [user, setUser] = useRecoilState(userState);

  return (
    <div>
      <button onClick={() => setUser({ username: "canh" })}>Login</button>
      <button onClick={() => setUser(null)}>Logout</button>
      <p>{user ? `Xin chao ${user.username}` : "Chua login"}</p>
    </div>
  );
}

export default AuthActions;
