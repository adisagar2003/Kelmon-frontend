import React from "react";
import Sidebar from "../components/Sidebar";
import "./AboutPage.css";
const AboutPage = () => {
  return (
    <div className="AboutPage">
      <Sidebar />
      <div className="AboutPage__content">
        Kelmon is a simple blog created using MERN stack. JWT authentication is
        used and it is an open-source project.
      </div>
    </div>
  );
};

export default AboutPage;
