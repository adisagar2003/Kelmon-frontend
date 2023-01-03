import React from "react";
import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import UserContext from "../context/userContext";
import "./EditProfile.css";
const EditProfile = () => {
  const { userData } = useContext(UserContext);
  return (
    <div className="EditProfile__layout">
      <Sidebar />
      {userData.isLoggedIn ? (
        <div className="">Logged In</div>
      ) : (
        <div className="EditProfile__loginWarning">Not logged in :( </div>
      )}
    </div>
  );
};

export default EditProfile;
