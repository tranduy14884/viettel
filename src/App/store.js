import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../Admin/Auth/adminSlice";
const rootReducer ={
    admin : adminReducer,
};

const store = configureStore({
    reducer : rootReducer,
});

export default store;
