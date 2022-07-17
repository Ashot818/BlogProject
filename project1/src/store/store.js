import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./features/blogsSlice";
import usersReducer from './features/userSlice'
export const store = configureStore({
    reducer:{
        blogs:blogsReducer,
        users:usersReducer
    }
})