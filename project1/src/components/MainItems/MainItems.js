import React from "react";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changePage,
  fetchBlogs,
  selectBlogs,
} from "../../store/features/blogsSlice";
import { selectUsers } from "../../store/features/userSlice";
import MainItemAbout from "../MainItemAbout/MainItemAbout";
import AddNewBlog from "../AddNewBlog/AddNewBlog";
import Error from "../Errors/Error";
import Loading from "../Loading/Loading";
import "./MainItems.css";
import { Link } from "react-router-dom";

function MainItems({ data }) {
  const [isFetching, setIsFetching] = useState(true);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const blogs = useSelector(selectBlogs);
  const users = useSelector(selectUsers);
  useEffect(() => {
    if (isFetching || blogs.data.lenght < blogs.max) {
      dispatch(fetchBlogs(blogs.page));
      setPage(page + 1);
      setIsFetching(false);
      dispatch(changePage());
    }
  }, [isFetching, page]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = useCallback((e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      1
    ) {
      setIsFetching(true);
    }
  }, []);

  return (
    <>
      <div className="container-main-items">
        {!users.isLogin && (
          <button id="Singn">
            {" "}
            <Link to={"/login"}>SignIn</Link>{" "}
          </button>
        )}

        {users.isLogin && <AddNewBlog />}
        {blogs.loading && <Loading />}
        {blogs.errors && <Error />}
        {blogs.data.map((data) => {
          return (
            <div className="main-items">
              <img src={data.img} alt="" />
              <MainItemAbout data={data} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MainItems;
