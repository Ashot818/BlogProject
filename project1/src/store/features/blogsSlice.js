import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlogs = createAsyncThunk(
  "blogs/fetchblogs",
  async function (page) {
    const responsePosts = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`
    );
    const responseImages = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?_limit=5&_page=${page}`
    );

    const max = responsePosts.headers["x-total-count"];

    const dataPosts = await responsePosts.data;
    const dataImages = await responseImages.data;
    const data = dataPosts.map((el, index) => {
      return {
        id: el.id,
        title: el.title,
        body: el.body,
        img: dataImages[index].url,
      };
    });
    return { data, max: max };
  }
);

const blogsReducer = createSlice({
  name: "blogs",
  initialState: {
    data: [],
    loading: false,
    errors: false,
    max: 0,
    addBlog: false,
    currentBlogData: {},
    page: 1,
  },
  reducers: {
    setCurrentBlog: (state, action) => {
      return {
        ...state,
        currentBlogData: {
          id: action.payload.id,
          title: action.payload.title,
          body: action.payload.body,
          img: action.payload.img,
          isEditing: false,
        },
      };
    },
    deleteBlog: (state, action) => {
      return {
        ...state,
        data: state.data.filter((el) => el.id !== action.payload),
      };
    },
    Editing: (state, action) => {
      return {
        ...state,
        currentBlogData: {
          ...state.currentBlogData,
          isEditing: action.payload,
        },
      };
    },
    changeBlog: (state, action) => {
      return {
        ...state,
        currentBlogData: {
          ...state.currentBlogData,
          title: action.payload.title || state.currentBlogData.title,
          img: action.payload.img || state.currentBlogData.img,
          body: action.payload.body || state.currentBlogData.body,
        },
        data: [
          ...state.data.map((el) => {
            if (el.id === action.payload.id) {
              return {
                id: action.payload.id,
                title: action.payload.title || state.currentBlogData.title,
                img: action.payload.img || state.currentBlogData.img,
                body: action.payload.body || state.currentBlogData.body,
              };
            }
            return el
          }),
        ],
      };
    },

    isAdd: (state, action) => {
      return {
        ...state,
        addBlog: action.payload,
      };
    },
    addBlog: (state, action) => {
      return {
        ...state,
        data: [
          {
            id: new Date().getTime.toString(),
            title: action.payload.title,
            body: action.payload.body,
            img: action.payload.img,
          },
          ...state.data,
        ],
      };
    },
    changePage: (state, action) => {
      return {
        ...state,
        page: state.page + 1,
      };
    },
  },
  extraReducers: {
    [fetchBlogs.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
        errors: false,
      };
    },
    [fetchBlogs.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        errors: false,
        data: [...state.data, ...action.payload.data],
        max: action.payload.max,
      };
    },
    [fetchBlogs.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        errors: true,
      };
    },
  },
});

export const selectBlogs = (state) => state.blogs;

export const {
  removeBlogs,
  setCurrentBlog,
  deleteBlog,
  Editing,
  isAdd,
  addBlog,
  changeBlog,
  changePage,
} = blogsReducer.actions;

export default blogsReducer.reducer;
