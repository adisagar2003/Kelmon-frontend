import axios from "axios";
import React from "react";
import { useState } from "react";
import { RingLoader } from "react-spinners";
import Sidebar from "../components/Sidebar";
import "./RegisterPage.css";
const RegisterPage = () => {
  const [image, setImage] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const form = new FormData();
  form.append("profile", image);
  form.append("user_name", userName);
  form.append("password", password);
  form.append("confirmPassword", confirmPassword);

  async function submitData(e) {
    e.preventDefault();
    setLoading(true);
    const data = await axios.post(
      `${process.env.REACT_APP_API_URL}api/v1/user`,
      form,
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );
    setLoading(false);
    console.log(data);
  }
  return (
    <div className="RegisterPage__layout">
      {loading && (
        <div className="Loading__bar">
          <RingLoader size={100} color="#ffffff" />
        </div>
      )}

      <Sidebar />
      <div className="Register__form">
        <div>
          <form
            method="post"
            onSubmit={submitData}
            enctype="multipart/form-data"
          >
            <input
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input onChange={(e) => setImage(e.target.files[0])} type="file" />
            <input type="submit" placeholder="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
