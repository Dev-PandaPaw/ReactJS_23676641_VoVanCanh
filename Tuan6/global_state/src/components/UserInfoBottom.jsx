import { useRecoilValue } from "recoil";
import { userState } from "../recoil/atoms.js";

function UserInfoBottom() {
  const user = useRecoilValue(userState);

  return <p>Bottom: {user ? user.username : "guest"}</p>;
}

export default UserInfoBottom;
