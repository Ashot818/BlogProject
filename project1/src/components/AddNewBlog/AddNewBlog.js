import { faHistory, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, isAdd, selectBlogs } from "../../store/features/blogsSlice";
import "./AddNewBlog.css";
function AddNewBlog() {
  const blogs = useSelector(selectBlogs);
  const dispatch = useDispatch();
  return blogs.addBlog ? (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          addBlog({
            title: e.target[0].value,
            img: e.target[1].value,
            body: e.target[2].value,
          })
        );
        dispatch(isAdd(false));
      }}
    >
      <span
        style={{ cursor: "pointer", color: "white" }}
        onClick={() => {
          dispatch(isAdd(false));
        }}
      >
        x
      </span>
      <textarea cols={60} rows={5} placeholder="  Title..." />
      <input placeholder="Image URL..." style={{ padding: "8px" }} />
      <textarea cols={60} rows={5} placeholder="  Body..." />
      <button className="addBlog">Add new blog</button>
    </form>
  ) : (
    <span
      className="icon-span"
      onClick={() => {
        dispatch(isAdd(true));
      }}
    >
      <FontAwesomeIcon className="icon-plus" icon={faPlus} /> ADD
    </span>
  );
}

export default AddNewBlog;
