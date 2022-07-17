import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  changeBlog,
  Editing,
  selectBlogs,
} from "../../store/features/blogsSlice";

function EditBlog() {
  const blogs = useSelector(selectBlogs);
  const dispatch = useDispatch();
  const id = useParams();
  return (
    <>
      {blogs.currentBlogData.isEditing || (
        <button
          style={{
            backgroundColor: "#2A4B7C",
            color: "white",
            padding: "10px 44px",
          }}
          onClick={() => {
            dispatch(Editing(true));
          }}
        >
          Edit
        </button>
      )}
      {blogs.currentBlogData.isEditing && (
        <form
          style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              changeBlog({
                id: blogs.currentBlogData.id,
                title: e.target[0].value,
                img: e.target[1].value,
                body: e.target[2].value,
              })
            );
            dispatch(Editing(false));
          }}
        >
          <span
            onClick={() => {
              dispatch(Editing(false));
            }}
          >
            x
          </span>
          <textarea
            cols={30}
            rows={3}
            placeholder={blogs.currentBlogData.title}
          />
          <input
            placeholder={blogs.currentBlogData.img}
            style={{ padding: "10px" }}
          />
          <textarea
            cols={30}
            rows={5}
            placeholder={blogs.currentBlogData.body}
          />
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px 20px",
            }}
          >
            Edit
          </button>
        </form>
      )}
    </>
  );
}

export default EditBlog;
