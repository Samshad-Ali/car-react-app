import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./slice/carSlice";

export default configureStore({
    reducer:{
        carReducer:carSlice
    }
})