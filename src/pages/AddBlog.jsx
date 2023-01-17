import { Alert } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./AddBlog.css";
const AddBlog = () => {
  const [successToast, setSuccessToast] = useState(false);
  const [error, setError] = useState(false);
  const [content, setContent] = useState("");

  async function submitBlog() {
    try {
      const headers = document.cookie
        .split(";")
        .find((row) => row.startsWith(" access_token"))
        .split("=")[1];
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}api/v1/blog`,

        {
          content: content,
        },
        {
          headers: {
            Authorization: `Bearer ${headers}`,
          },
        }
      );
      console.log(data);
      setSuccessToast(true);
    } catch (err) {
      console.log(err.message);
      setError(true);
      setInterval(() => {
        setError(false);
      }, 3000);
    }
  }
  return (
    <div className="AddBlog">
      <Sidebar />
      <div className="AddBlog__addnew">
        <div className="AddBlog__heading">Add Blog</div>
        <div className="AddBlog__Container">
          <textarea
            className="TextArea"
            onChange={(e) => setContent(e.target.value)}
            name="w3review"
            rows="3"
            cols="50"
          ></textarea>
          <button onClick={submitBlog} disabled={content.length <= 10}>
            Active
          </button>
          {successToast && <Alert>Blog Successfully Added</Alert>}
          {error && (
            <div
              style={{
                position: "absolute",
                top: 0,
                zIndex: 99,
                padding: 10,
                backgroundColor: "red",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              Error Not Logged In/ Invalid Token
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
