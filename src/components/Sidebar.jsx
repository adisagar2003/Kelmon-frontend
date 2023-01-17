import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../assets/Logo2.png";
import { NavLink } from "react-router-dom";
import { BsJustify } from "react-icons/bs";
import { useContext } from "react";
import UserContext from "../context/userContext";
function Sidebar() {
  function Logout() {
    localStorage.removeItem("kelmon_user");
    localStorage.removeItem("kelmon_token");
    document.cookie = "access_token=; Max-Age=0; path=/; domain=";
    window.location.reload();
  }

  const { userData } = useContext(UserContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <div
        className="Sidebar__hamburger"
        style={{ zIndex: 99 }}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <BsJustify />
      </div>

      <div className={`Sidebar__layout ${sidebarOpen && "active"}`}>
        <div className="Sidebar__logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="Sidebar__items">
          <NavLink
            style={{ textDecoration: "none" }}
            to="/"
            className="Sidebar__item"
            activeClassName="Sidebar__item active"
          >
            Home{" "}
          </NavLink>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/about"
            className="Sidebar__item"
            activeClassName="Sidebar__item active"
          >
            About{" "}
          </NavLink>
          <NavLink
            style={{ textDecoration: "none" }}
            to={userData.isLoggedIn ? "/Edit" : "/signIn"}
            className="Sidebar__item"
            activeClassName="Sidebar__item active"
          >
            {userData.isLoggedIn ? "Edit Profile" : "Sign In"}{" "}
          </NavLink>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/addBlog"
            className="Sidebar__item"
            activeClassName="Sidebar__item active"
          >
            Add Blog{" "}
          </NavLink>

          {!userData.isLoggedIn && (
            <NavLink
              style={{ textDecoration: "none" }}
              to="/register"
              className="Sidebar__item"
              activeClassName="Sidebar__item active"
            >
              Register{" "}
            </NavLink>
          )}
          {userData.isLoggedIn && (
            <button onClick={Logout} className="Sidebar__item">
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
