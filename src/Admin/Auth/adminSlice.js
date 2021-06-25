import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import adminApi from "../../api/adminApi";
// import  adminApi from "../../api/adminApi";

// First, create the thunk
export const login = createAsyncThunk("admin/login", async (payload) => {
  //call api
    const data = await adminApi.login(payload);
  //save in local
  localStorage.setItem('access_token',data.jwt);
  localStorage.setItem('admin',JSON.stringify(data.account));
  return data.account;
});
const adminSice = createSlice({
  name: "admin",
  initialState: {
    current: JSON.parse(localStorage.getItem('admin')) || {},
  },
  reducers: {
      logout(state){
        //clear localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('admin');
        state.current = {};
      }
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const {actions, reducer } = adminSice;
export const {logout} = actions;
export default reducer;
