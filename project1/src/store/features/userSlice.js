import { createSlice } from "@reduxjs/toolkit";

const usersReducer = createSlice({
  name: "users",
  initialState: {
    isLogin: false,
    user: {
      loginValue: "admin",
      passwordValue: "admin",
    },
  },
  reducers: {
    userLogin: (state, action) => {
      if (
        action.payload.loginValue === state.user.loginValue &&
        action.payload.passwordValue === state.user.passwordValue
      ) {
        return {
          ...state,
          isLogin: true,
        };
      } else {
        return {
          ...state,
          isLogin: false,
        };
      }
    },
  },
});

export const selectUsers = (state) => state.users;

export const { userLogin } = usersReducer.actions;

export default usersReducer.reducer;
