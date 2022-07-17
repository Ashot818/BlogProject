import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectBlogs } from "../../store/features/blogsSlice";
import { selectUsers } from "../../store/features/userSlice";
import EditBlog from "../EditBlog/EditBlog";
import "./CurrentBlog.css";

function CurrentBlog() {
  const blogs = useSelector(selectBlogs);
  const users = useSelector(selectUsers);
  return (
    <div className="container-blog">
      {blogs.loading && <h1>loading ...</h1>}
      {blogs.errors && <h1>E404</h1>}
      <h2>{blogs.currentBlogData.title}</h2>
      <img src={blogs.currentBlogData.img} alt="" />
      <p>{blogs.currentBlogData.body}</p>

      <Link to={`/`}>
        <FontAwesomeIcon icon={faAngleLeft} /> Back{" "}
      </Link>
      {users.isLogin && <EditBlog />}
    </div>
  );
}

export default CurrentBlog;
