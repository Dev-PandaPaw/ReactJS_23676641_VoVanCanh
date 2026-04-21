import { useRecoilValue } from "recoil";
import { userState } from "../recoil/atoms.js";

function UserInfoTop() {
  const user = useRecoilValue(userState);

  return <p>Top: {user ? user.username : "guest"}</p>;
}

export default UserInfoTop;
