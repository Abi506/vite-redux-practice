import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/usersSlics";

const store=configureStore({
    reducer:{
        usersInfo:usersReducer
    }
})
export default store