import axios from "axios";
import React from "react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./AddBlog.css";
const AddBlog = () => {
  const [successToast, setSuccessToast] = useState(false);
  const [content, setContent] = useState("");

  async function submitBlog() {
    const headers = document.cookie
      .split(";")
      .find((row) => row.startsWith(" access_token"))
      .split("=")[1];

    console.log(headers);
    try {
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
          {successToast && <div>Hello there </div>}
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
