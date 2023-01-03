import { createContext } from "react";

const initialToken = localStorage.getItem("kelmon_token");
const storageCheck = localStorage.getItem("kelmon_token") != null;
const UserContext = createContext({
  isLoggedIn: storageCheck,
  user_name: "",
  user_id: "",
  profile_img: "",
  token: initialToken,
});

export default UserContext;
