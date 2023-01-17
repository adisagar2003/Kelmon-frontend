import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import "./SignIn.css";
import axios from "axios";
import UserContext from "../context/userContext";
import { Button, Heading, Input, WrapItem } from "@chakra-ui/react";

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setAlert] = useState(false);
  const { userData, setUserData } = useContext(UserContext);
  async function Login() {
    try {
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}api/v1/auth/login`,
        {
          user_name: userName,
          password: password,
        }
      );
      console.log(data, "DATA RETRIEVED");
      setUserData({
        isLoggedIn: true,
        user_name: data.data.user.user_name,
        user_id: data.data.user.id,
        token: data.data.token,
        profile_img: data.data.user.profile_image,
      });
      localStorage.setItem("kelmon_token", data.data.token);
      localStorage.setItem("kelmon_user", JSON.stringify(data.data.user));
      console.log(userData, "USER DATA");

      document.cookie = `access_token=${data.data.token};SameSite=Lax`;
    } catch (err) {
      console.log(err, "ERROR");
      setAlert(true);
      setInterval(() => {
        setAlert(false);
      }, 5000);
    }
  }
  return (
    <div>
      {showAlert && <div className="Alert">User Not Found!</div>}
      <WrapItem>
        <Sidebar />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
            marginTop: 200,
            marginLeft: 30,
          }}
        >
          <Heading color="#7f5af0">Sign In</Heading>
          <Input
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeContent="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={Login}>Login</Button>
        </div>
      </WrapItem>
    </div>
  );
};

export default SignIn;
