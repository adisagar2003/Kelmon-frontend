import React from "react";
import Blog from "../components/Blog";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import "./BlogPage.css";
import { useState } from "react";
import { useEffect } from "react";
import { RingLoader } from "react-spinners";
function BlogPage() {
  const [blogData, setData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const fetchBlogs = async () => {
    const data = await axios.get(
      `${process.env.REACT_APP_API_URL}api/v1/blog?limit=5`
    );
    setData(data.data.data);

    console.log(data);
    setDataLoaded(true);
  };
  useEffect(() => {
    fetchBlogs();
  }, [dataLoaded]);
  return (
    <div className="BlogPage">
      <Sidebar />
      <div className="BlogPage__blogs">
        {blogData.length ? (
          blogData.map((blog) => {
            return (
              <Blog
                user_name={blog.user.user_name}
                profileImage={`${process.env.REACT_APP_API_URL}${blog.user.image_path}`}
                content={blog.content}
              />
            );
          })
        ) : (
          <RingLoader color="white" size={100} />
        )}
      </div>
    </div>
  );
}

export default BlogPage;
