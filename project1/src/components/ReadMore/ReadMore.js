import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBlog, setCurrentBlog } from "../../store/features/blogsSlice";
import { selectUsers } from "../../store/features/userSlice";
import "./ReadMore.css";

function ReadMore({ data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUsers);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(setCurrentBlog(data));
          navigate(`/blog/${data.id}`);
        }}
        className="learn-more"
      >
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Read More</span>
      </button>
      {user?.isLogin && (
        <button
          onClick={() => {
            dispatch(deleteBlog(data.id));
          }}
          className="btn-delete"
        >
          Delete <FontAwesomeIcon icon={faTrash} />
        </button>
      )}
    </div>
  );
}

export default ReadMore;
