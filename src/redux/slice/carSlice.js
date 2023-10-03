import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../assets/data";

const carSlice = createSlice({
    name:"carSlice",
    initialState:{
        data:[]
    },
    reducers:{
        getData:(state,action)=>{
            state.data = data;
        },
        onSearchData:(state,action)=>{
            const payload = action.payload;
            console.log(payload)
            state.data = state.data.filter(item=>item.name===payload)
        }
    }
})

export default carSlice.reducer;
export const {getData,onSearchData} = carSlice.actions;