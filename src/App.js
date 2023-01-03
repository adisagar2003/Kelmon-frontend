import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import UserContext from "./context/userContext";
import AboutPage from "./pages/AboutPage";
import AddBlog from "./pages/AddBlog";
import BlogPage from "./pages/BlogPage";
import EditProfile from "./pages/EditProfile";
import RegisterPage from "./pages/RegisterPage";
import SignIn from "./pages/SignIn";

function App() {
  const initialToken = localStorage.getItem("kelmon_token");
  const [userData, setUserData] = useState({
    isLoggedIn: initialToken != null,
    user_name:
      initialToken != null
        ? JSON.parse(localStorage.getItem("kelmon_user")).user_name
        : "",
    user_id:
      initialToken != null
        ? JSON.parse(localStorage.getItem("kelmon_user")).id
        : "",
  });

  return (
    <div className="App">
      <UserContext.Provider value={{ userData, setUserData }}>
        <Routes>
          <Route path="/" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/addBlog" element={<AddBlog />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
