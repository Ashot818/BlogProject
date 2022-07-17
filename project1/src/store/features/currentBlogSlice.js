import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrentBlog = createAsyncThunk(
    'blog/fetchCurrentBlog',
    async function(id){
        const responsePost = await axios.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
        const responseImg = await axios.get(`https://jsonplaceholder.typicode.com/photos?id=${id}`)

        const dataPost = await responsePost.data
        const dataImg = await responseImg.data

        const data = {
            id: dataPost[0].id,
            title: dataPost[0].title,
            body: dataPost[0].body,
            img: dataImg[0].url
        }

        return data
    }

)

const currentBlogReducer = createSlice({
    name:'currentBlog',
    initialState:{
        data:{},
        loading:false,
        errors:false
    },
    reducers:{},
    extraReducers: {
        [fetchCurrentBlog.pending]:(state,action) =>{
            return {
                ...state,
                loading:true,
                errors:false
            }
        },
        [fetchCurrentBlog.fulfilled]:(state,action) =>{
            return {
                loading:false,
                errors:false,
                data: action.payload
            }
        },
        [fetchCurrentBlog.rejected]:(state,action) =>{
            return {
                ...state,
                loading:false,
                errors:true
            }
        }
    }

})

export default currentBlogReducer.reducer

export const selectCurrentBlog = (state) => state.currentBlog